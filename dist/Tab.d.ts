import * as React from 'react';
export interface TabProps {
    className?: string;
    title: string | React.ReactNode;
}
export interface TabState {
}
export declare class Tab extends React.Component<TabProps, TabState> {
    constructor(props: TabProps);
    static defaultProps: Partial<TabProps>;
    getTitle: () => React.ReactNode;
    render(): JSX.Element;
}
