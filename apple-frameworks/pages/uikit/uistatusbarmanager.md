> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistatusbarmanager](https://developer.apple.com/documentation/uikit/uistatusbarmanager)

# UIStatusBarManager (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that describes the configuration of the status bar.

## Declaration

```swift
@MainActor class UIStatusBarManager
```

<a id="overview"></a>

## Overview

Use a [UIStatusBarManager](uistatusbarmanager.md) object to get the current configuration of the status bar for its associated scene. You don’t create [UIStatusBarManager](uistatusbarmanager.md) objects directly. Instead, you retrieve an existing object from the [statusBarManager](uiwindowscene/statusbarmanager.md) property of a [UIWindowScene](uiwindowscene.md) object.

You don’t use this object to modify the configuration of the status bar. Instead, you set the status bar configuration individually for each of your [UIViewController](uiviewcontroller.md) objects. For example, to modify the default visibility of the status bar, override the [prefersStatusBarHidden](uiviewcontroller/prefersstatusbarhidden.md) property of your view controller.

## Topics

### Getting the status bar configuration

- [isStatusBarHidden](uistatusbarmanager/isstatusbarhidden.md): A Boolean value that indicates whether the status bar is currently hidden.
- [statusBarStyle](uistatusbarmanager/statusbarstyle.md): The current appearance of the status bar.

### Getting the frame rectangle

- [statusBarFrame](uistatusbarmanager/statusbarframe.md): The frame rectangle of the status bar.

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

## See Also

### Device environment

- [UIDevice](uidevice.md): A representation of the current device.

# UIStatusBarManager (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that describes the configuration of the status bar.

## Declaration

```objectivec
@interface UIStatusBarManager : NSObject
```

<a id="overview"></a>

## Overview

Use a [UIStatusBarManager](uistatusbarmanager.md) object to get the current configuration of the status bar for its associated scene. You don’t create [UIStatusBarManager](uistatusbarmanager.md) objects directly. Instead, you retrieve an existing object from the [statusBarManager](uiwindowscene/statusbarmanager.md) property of a [UIWindowScene](uiwindowscene.md) object.

You don’t use this object to modify the configuration of the status bar. Instead, you set the status bar configuration individually for each of your [UIViewController](uiviewcontroller.md) objects. For example, to modify the default visibility of the status bar, override the [prefersStatusBarHidden](uiviewcontroller/prefersstatusbarhidden.md) property of your view controller.

## Topics

### Getting the status bar configuration

- [statusBarHidden](uistatusbarmanager/isstatusbarhidden.md): A Boolean value that indicates whether the status bar is currently hidden.
- [statusBarStyle](uistatusbarmanager/statusbarstyle.md): The current appearance of the status bar.

### Getting the frame rectangle

- [statusBarFrame](uistatusbarmanager/statusbarframe.md): The frame rectangle of the status bar.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Device environment

- [UIDevice](uidevice.md): A representation of the current device.
