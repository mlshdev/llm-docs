> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvbrowserviewcontrollerdatasource](https://developer.apple.com/documentation/tvmlkit/tvbrowserviewcontrollerdatasource)

# TVBrowserViewControllerDataSource (Swift)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

Methods adopted by the object you use to represent the browser view.

## Declaration

```swift
protocol TVBrowserViewControllerDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the data source to provide a document to the browser.

## Topics

### Providing Data

- [browserViewController(\_:documentViewControllerFor:)](tvbrowserviewcontrollerdatasource/browserviewcontroller%28__documentviewcontrollerfor_%29.md): Provides the document view controller to be used for a particular child of the full-screen browser.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing the Browser’s Data

- [dataSource](tvbrowserviewcontroller/datasource.md): The object that provides data to the full-screen browser.

# TVBrowserViewControllerDataSource (Objective-C)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 13.0+

Methods adopted by the object you use to represent the browser view.

## Declaration

```objectivec
@protocol TVBrowserViewControllerDataSource <NSObject>
```

<a id="overview"></a>

## Overview

Use the data source to provide a document to the browser.

## Topics

### Providing Data

- [browserViewController:documentViewControllerForElement:](tvbrowserviewcontrollerdatasource/browserviewcontroller%28__documentviewcontrollerfor_%29.md): Provides the document view controller to be used for a particular child of the full-screen browser.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Providing the Browser’s Data

- [dataSource](tvbrowserviewcontroller/datasource.md): The object that provides data to the full-screen browser.
