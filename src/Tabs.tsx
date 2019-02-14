import * as React from 'react';
// import { Tab } from './Tab';

import { B } from 'bem-class-gen';

export interface TabsProps {
    /**
     * Main bem class name
     */
    bemClassName?: string;

    /**
     * Main element class name
     */
    className?: string;

    /**
     * The class name of the ul list
     */
    ulClassName?: string;

    /**
     * The class name of the list element
     */
    liClassName?: string;

    /**
     * the class name of the tab content
     */
    contentClassName?: string;

    /**
     * Initial tab to be shown
     */
    initialTab?: number;

    /**
     * Function that is being triggered when the initialTab is changed
     */
    onInitialTabChange?: (currentIdx: number) => void;

    /**
     * Function that is being triggered after the index is changed
     */
    afterTabChange?: (currentIdx: number, prevIdx: number) => void;

    /**
     * Function that is being triggered when the tab indexed is being changed
     */
    onTabClicked?: (idx?: number, prevIdx?: number) => void;

    /**
     * If set to true the display of the current tab will be based on css styles instead of render options
     */
    isSeoFriendly?: boolean;
}

export interface TabsState {
    currentTabIdx: number;
}

var cls = B();

export class Tabs extends React.Component<TabsProps, TabsState>{

    constructor(p: TabsProps) {
        super(p);
        this.state = {
            currentTabIdx: 0
        }
    }

    public static defaultProps: Partial<TabsProps> = {
        onTabClicked: () => { },
        onInitialTabChange: () => { },
        afterTabChange: () => { },
        bemClassName: "tabs",
        ulClassName: "",
        className: "",
        contentClassName: "",
        liClassName: "",
        isSeoFriendly: false
    }

    static getDerivedStateFromProps(props, state) {
        cls.bl(props.bemClassName)
        return null;
    }

    componentDidMount() {
        this.setState({
            currentTabIdx: this.props.initialTab || 0
        });
    }

    componentWillUpdate(nextProps: TabsProps, nextState: TabsState) {
        if (nextProps.initialTab !== this.props.initialTab) {
            this.onInitialTabChange();
            this.setState({
                currentTabIdx: nextProps.initialTab
            })
        }
    }

    componentDidUpdate(prevProps: TabsProps, prevState: TabsState) {
        if (prevProps.initialTab !== this.props.initialTab) {
            this.afterTabChange(prevState.currentTabIdx);
        }
    }

    onInitialTabChange = () => {
        this.props.onInitialTabChange && this.props.onInitialTabChange(this.state.currentTabIdx);
    }

    afterTabChange = (prevIdx: number) => {
        this.props.afterTabChange && this.props.afterTabChange(this.state.currentTabIdx, prevIdx);
    }

    setTab = (idx: number) => {
        this.props.onTabClicked(idx, this.state.currentTabIdx);
        this.setState({
            currentTabIdx: idx
        })
    }

    render() {
        let props = this.props,
            state = this.state;
        return (
            <div className={`${cls.bem} ${props.className}`}>
                <ul className={`${cls.el('menu').bem} ${props.ulClassName}`}>
                    {
                        React.Children.map(this.props.children, (x, i) => {
                            return <li className={`${cls.el("item").bem} ${props.liClassName} ${(state.currentTabIdx === i ? cls.el("item").mod("active").bem : "")}`}
                                onClick={() => { this.setTab(i) }}>
                                <a>
                                    {(x as any).props.title}
                                </a>
                            </li>
                        })
                    }
                </ul>
                <div className={`${cls.el("content").bem} ${props.contentClassName}`}>
                    {
                        !props.isSeoFriendly &&
                        this.props.children[state.currentTabIdx]
                        ||
                        React.Children.map(this.props.children, (child: React.ReactElement<any>, i) => {
                            return React.cloneElement(child, {
                                ...child.props,
                                style: { "display": (state.currentTabIdx === i ? "block" : "none") }
                            })
                        })
                    }
                </div>
            </div>
        )
    }
}