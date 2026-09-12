> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreenshotservicedelegate](https://developer.apple.com/documentation/uikit/uiscreenshotservicedelegate)

# UIScreenshotServiceDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

Methods you use to generate PDF data that accompanies a user-requested screenshot.

## Declaration

```swift
@MainActor protocol UIScreenshotServiceDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When the user captures a screenshot of your app’s windows, UIKit calls the methods of this protocol to retrieve PDF data for those windows, and then it provides that data to the user. Adopt this protocol in a custom object of your app, and assign that object to the [UIScreenshotService](uiscreenshotservice.md) object associated with one of your window scenes. Use your custom delegate object to generate PDF content for the windows in the associated window-scene object.

## Topics

### Providing the PDF data

- [screenshotService(\_:generatePDFRepresentationWithCompletion:)](uiscreenshotservicedelegate/screenshotservice%28__generatepdfrepresentationwithcompletion_%29.md): Generates a high-fidelity PDF version of the entire content in a given window scene.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to screenshot requests

- [delegate](uiscreenshotservice/delegate.md): The custom object you use to provide PDF data for a screenshot.

# UIScreenshotServiceDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

Methods you use to generate PDF data that accompanies a user-requested screenshot.

## Declaration

```objectivec
@protocol UIScreenshotServiceDelegate <NSObject>
```

<a id="overview"></a>

## Overview

When the user captures a screenshot of your app’s windows, UIKit calls the methods of this protocol to retrieve PDF data for those windows, and then it provides that data to the user. Adopt this protocol in a custom object of your app, and assign that object to the [UIScreenshotService](uiscreenshotservice.md) object associated with one of your window scenes. Use your custom delegate object to generate PDF content for the windows in the associated window-scene object.

## Topics

### Providing the PDF data

- [screenshotService:generatePDFRepresentationWithCompletion:](uiscreenshotservicedelegate/screenshotservice%28__generatepdfrepresentationwithcompletion_%29.md): Generates a high-fidelity PDF version of the entire content in a given window scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to screenshot requests

- [delegate](uiscreenshotservice/delegate.md): The custom object you use to provide PDF data for a screenshot.
