> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneaccessory](https://developer.apple.com/documentation/uikit/uisceneaccessory)

# UISceneAccessory (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type which can be used to register for a specific type of scene accessory presentation.

## Declaration

```swift
@MainActor class UISceneAccessory
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)

<a id="overview"></a>

## Overview

A scene accessory declares supplementary content that the system presents on the app’s behalf when an associated piece of system functionality becomes available, for example when an external display is connected. The app declares what content to provide; the system decides when and where to present it. Scene accessories enhance the app’s experience when available, but the app must remain fully functional without them.

Use an instance of this type along with `UIViewController.registerSceneAccessory(_:)`.

## Topics

### Type Methods

- [externalNonInteractive(sceneConfiguration:)](uisceneaccessory/externalnoninteractive%28sceneconfiguration_%29.md): Creates a new scene accessory configuration for presenting non-interactive content on an external display.
- [externalNonInteractive(sceneConfiguration:userInfo:)](uisceneaccessory/externalnoninteractive%28sceneconfiguration_userinfo_%29.md): Creates a new scene accessory configuration for presenting non-interactive content on an external display.

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

### Scene accessories

- [UISceneAccessoryRegistration](uisceneaccessoryregistration.md): A type which represents the registration for a given scene accessory.

# UISceneAccessory (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A type which can be used to register for a specific type of scene accessory presentation.

## Declaration

```objectivec
@interface UISceneAccessory : NSObject
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)

<a id="overview"></a>

## Overview

A scene accessory declares supplementary content that the system presents on the app’s behalf when an associated piece of system functionality becomes available, for example when an external display is connected. The app declares what content to provide; the system decides when and where to present it. Scene accessories enhance the app’s experience when available, but the app must remain fully functional without them.

Use an instance of this type along with `UIViewController.registerSceneAccessory(_:)`.

## Topics

### Type Methods

- [externalNonInteractiveSceneAccessoryWithConfiguration:](uisceneaccessory/externalnoninteractive%28sceneconfiguration_%29.md): Creates a new scene accessory configuration for presenting non-interactive content on an external display.
- [externalNonInteractiveSceneAccessoryWithConfiguration:userInfo:](uisceneaccessory/externalnoninteractive%28sceneconfiguration_userinfo_%29.md): Creates a new scene accessory configuration for presenting non-interactive content on an external display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Scene accessories

- [UISceneAccessoryRegistration](uisceneaccessoryregistration.md): A type which represents the registration for a given scene accessory.
