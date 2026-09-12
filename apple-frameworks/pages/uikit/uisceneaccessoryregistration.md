> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneaccessoryregistration](https://developer.apple.com/documentation/uikit/uisceneaccessoryregistration)

# UISceneAccessoryRegistration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A type which represents the registration for a given scene accessory.

## Declaration

```swift
@MainActor class UISceneAccessoryRegistration
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)

<a id="overview"></a>

## Overview

Instances of this type allow for observing availability of a given scene accessory, as well as controlling whether the contents should be displayed when the system determines the scene is available.

## Topics

### Observing availability and controlling display

- [isAvailable](uisceneaccessoryregistration/isavailable.md): Whether the associated scene accessory is available for display by the system or not.
- [isEnabled](uisceneaccessoryregistration/isenabled.md): Whether the content defined by this scene accessory should be displayed or not.

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

- [UISceneAccessory](uisceneaccessory.md): A type which can be used to register for a specific type of scene accessory presentation.

# UISceneAccessoryRegistration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A type which represents the registration for a given scene accessory.

## Declaration

```objectivec
@interface UISceneAccessoryRegistration : NSObject
```

## Mentioned In

- [Presenting content on a connected display](presenting-content-on-a-connected-display.md)

<a id="overview"></a>

## Overview

Instances of this type allow for observing availability of a given scene accessory, as well as controlling whether the contents should be displayed when the system determines the scene is available.

## Topics

### Observing availability and controlling display

- [available](uisceneaccessoryregistration/isavailable.md): Whether the associated scene accessory is available for display by the system or not.
- [enabled](uisceneaccessoryregistration/isenabled.md): Whether the content defined by this scene accessory should be displayed or not.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Scene accessories

- [UISceneAccessory](uisceneaccessory.md): A type which can be used to register for a specific type of scene accessory presentation.
