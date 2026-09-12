> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreenshotservice](https://developer.apple.com/documentation/uikit/uiscreenshotservice)

# UIScreenshotService (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

An object that coordinates the creation of PDF screenshots of an app’s content.

## Declaration

```swift
@MainActor class UIScreenshotService
```

<a id="overview"></a>

## Overview

When people take a screenshot of your app’s content, you work with a [UIScreenshotService](uiscreenshotservice.md) object to provide a PDF version of that screenshot. You don’t create a [UIScreenshotService](uiscreenshotservice.md) object directly. Instead, you retrieve the object from the [screenshotService](uiwindowscene/screenshotservice.md) property of your window scene and assign a delegate to it. Then when people take a screenshot, UIKit asks your delegate for the PDF data.

For information about how to provide the PDF data, see [UIScreenshotServiceDelegate](uiscreenshotservicedelegate.md).

> **Tip**

>  Beginning in iOS 17 and iPadOS 17, people have the option to share or save the generated full page screenshot as a PDF or an image.

## Topics

### Responding to screenshot requests

- [delegate](uiscreenshotservice/delegate.md): The custom object you use to provide PDF data for a screenshot.
- [UIScreenshotServiceDelegate](uiscreenshotservicedelegate.md): Methods you use to generate PDF data that accompanies a user-requested screenshot.

### Getting the current scene

- [windowScene](uiscreenshotservice/windowscene.md): The window scene that contains the windows to capture in your PDF data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UIScreenshotService (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+

An object that coordinates the creation of PDF screenshots of an app’s content.

## Declaration

```objectivec
@interface UIScreenshotService : NSObject
```

<a id="overview"></a>

## Overview

When people take a screenshot of your app’s content, you work with a [UIScreenshotService](uiscreenshotservice.md) object to provide a PDF version of that screenshot. You don’t create a [UIScreenshotService](uiscreenshotservice.md) object directly. Instead, you retrieve the object from the [screenshotService](uiwindowscene/screenshotservice.md) property of your window scene and assign a delegate to it. Then when people take a screenshot, UIKit asks your delegate for the PDF data.

For information about how to provide the PDF data, see [UIScreenshotServiceDelegate](uiscreenshotservicedelegate.md).

> **Tip**

>  Beginning in iOS 17 and iPadOS 17, people have the option to share or save the generated full page screenshot as a PDF or an image.

## Topics

### Responding to screenshot requests

- [delegate](uiscreenshotservice/delegate.md): The custom object you use to provide PDF data for a screenshot.
- [UIScreenshotServiceDelegate](uiscreenshotservicedelegate.md): Methods you use to generate PDF data that accompanies a user-requested screenshot.

### Getting the current scene

- [windowScene](uiscreenshotservice/windowscene.md): The window scene that contains the windows to capture in your PDF data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
