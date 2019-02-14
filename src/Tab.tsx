import * as React from 'react';

export interface TabProps {
    /**
     * Tab panel class name
     */
    className?:string; 

    /**
     * The title name of the tab button
     */
    title: string | React.ReactNode;

    style:any;
}

export interface TabState {

}

export class Tab extends React.Component<TabProps, TabState>{

    constructor(props: TabProps) {
        super(props);
    }

    public static defaultProps:Partial<TabProps> = {
        className:""
    }

    getTitle = () => {
        return this.props.title;
    }

    render() {
        const {props, state} = this; 

        return <div className={`tab-panel ${props.className}`} style={props.style}data-tab-title={this.props.title}>
            {this.props.children}
        </div>
    }
}
