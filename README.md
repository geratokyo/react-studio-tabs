# react-studio-tabs

A minimalistic react tab component that displays content in tabs. Some default stylings are included in the below link

* [style.css](https://github.com/geratokyo/react-studio-tabs/blob/master/dist/style.css)

----

## Tabs Props
----
|Name|Type|Descriptions|
|-----|------|---|
|className?|string|Main element class name|
|ulClassName?|string|The class name of the ul list|
|liClassName?|string|The class name of the list element|
|contentClassName?|string|the class name of the tab content|
|initialTab?|number|Initial tab to be shown|
|onInitialTabChange?|currentIdx:number)=>void|Function that is being triggered when the initialTab is changed|
|afterTabChange?|(currentIdx:number, prevIdx:number)=>void|Function that is being triggered after the index is changed|
|onTabClicked?|(idx?:number, prevIdx?:number)=>void|Function that is being triggered when the tab indexed is being changed|

## Tabs Default Props
|Name|Value|
|----|-----|
|onTabClicked|()=>{}|
|onInitialTabChange|()=>{}|
|afterTabChange|()=>{}|
|ulClassName|""|
|className|""|
|contentClassName|""|
|liClassName|""|


## Tab Props

|Name|Type|Descriptions|
|-----|------|---|
className?|string|Tab panel class name|
title|string | React.ReactNode|The title name of the tab button|

## Tab Default Props

|Name|Value|
|----|-----|
|className|""|

## Installation 

```
$ npm install --save react-studio-tabs
```

## Usage

```
import {Tabs, Tab} from "react-studio-tabs";
```


#### Simple Example

```
<Tabs>
    <Tab title="one">One</Tab>
    <Tab title="two">Two</Tab>
    <Tab title="three">Three</Tab>
    <Tab title="four">Four</Tab>
</Tabs>
```

