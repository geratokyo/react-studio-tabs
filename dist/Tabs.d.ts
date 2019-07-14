import * as React from 'react';
export interface TabsProps {
    bemClassName?: string;
    className?: string;
    ulClassName?: string;
    liClassName?: string;
    contentClassName?: string;
    initialTab?: number;
    onInitialTabChange?: (currentIdx: number) => void;
    afterTabChange?: (currentIdx: number, prevIdx: number) => void;
    onTabClicked?: (idx?: number, prevIdx?: number) => void;
    isSeoFriendly?: boolean;
}
export interface TabsState {
    currentTabIdx: number;
}
export declare class Tabs extends React.Component<TabsProps, TabsState> {
    constructor(p: TabsProps);
    static defaultProps: Partial<TabsProps>;
    static getDerivedStateFromProps(props: any, state: any): any;
    componentDidMount(): void;
    componentWillUpdate(nextProps: TabsProps, nextState: TabsState): void;
    componentDidUpdate(prevProps: TabsProps, prevState: TabsState): void;
    onInitialTabChange: () => void;
    afterTabChange: (prevIdx: number) => void;
    setTab: (idx: number) => void;
    getTitle: (title: React.ReactNode) => JSX.Element;
    render(): JSX.Element;
}
