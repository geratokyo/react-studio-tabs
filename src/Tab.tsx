import * as React from 'react';

export interface TabProps {
    className?:string; 
    title: string | React.ReactNode;
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
        
        return <div className={`tab-panel ${props.className}`} data-tab-title={this.props.title}>
            {this.props.children}
        </div>
    }
}
