> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/stylemedia](https://developer.apple.com/documentation/webkitjs/stylemedia)

# StyleMedia

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Class  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 4.2+

The `StyleMedia` class provides a way to evaluate CSS media queries from JavaScript. You do not need to, nor should you, create instances of this class. You access the shared `StyleMedia` object using the window’s [styleMedia](domwindow/1632755-stylemedia.md) property.

## Declaration

```
interface StyleMedia
```

<a id="overview"></a>

## Overview

> **I OS Note**

> This class name changed from `Media` in iOS 4.2 and later.

## Topics

### Get Properties

- [type](stylemedia/1634102-type.md): A string that represents the media type of the current view used for rendering the document.

### Make Media Queries

- [matchMedium](stylemedia/1634038-matchmedium.md): Evaluates the given string as a media query and returns the result.
