> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilhoverpose](https://developer.apple.com/documentation/uikit/uipencilhoverpose)

# UIPencilHoverPose (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

## Declaration

```swift
@MainActor class UIPencilHoverPose
```

<a id="overview"></a>

## Overview

Use the hover pose of Apple Pencil to support more complex interactions in response to a double tap or squeeze. Information about the hover pose — such as azimuth, altitude, and hover distance — is available when a person holds a supported model of Apple Pencil close to the screen during a double tap or squeeze.

The following code example shows how to use the [location](uipencilhoverpose/location.md) of a hover pose to present a contextual palette near the tip of Apple Pencil.

```swift
func pencilInteraction(_ interaction: UIPencilInteraction,
                       didReceiveSqueeze squeeze: UIPencilInteraction.Squeeze) {
    let preferredAction = UIPencilInteraction.preferredSqueezeAction
    
    if preferredAction == .showContextualPalette, squeeze.phase == .ended {
        if let anchorPoint = squeeze.hoverPose?.location {
            presentContextualPalette(atLocation: anchorPoint)
        }
    }
}
```

## Topics

### Getting the hover characteristics

- [location](uipencilhoverpose/location.md): The location of an Apple Pencil above the view’s bounds, in view’s coordinate space.
- [altitudeAngle](uipencilhoverpose/altitudeangle.md): A value that represents the altitude angle of Apple Pencil.
- [azimuthAngle](uipencilhoverpose/azimuthangle.md): A value that represents the azimuth angle of Apple Pencil.
- [azimuthUnitVector](uipencilhoverpose/azimuthunitvector.md): A value that represents the azimuth unit vector of Apple Pencil in the specified view.
- [rollAngle](uipencilhoverpose/rollangle.md): A value that represents the barrel-roll angle of Apple Pencil.
- [zOffset](uipencilhoverpose/zoffset.md): A value that represents the normalized distance between the screen and Apple Pencil.

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

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionDelegate](uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteraction.Tap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteraction.Squeeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteraction.Phase](uipencilinteraction/phase.md): Constants that describe the phases of an interaction on Apple Pencil.

# UIPencilHoverPose (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

## Declaration

```objectivec
@interface UIPencilHoverPose : NSObject
```

<a id="overview"></a>

## Overview

Use the hover pose of Apple Pencil to support more complex interactions in response to a double tap or squeeze. Information about the hover pose — such as azimuth, altitude, and hover distance — is available when a person holds a supported model of Apple Pencil close to the screen during a double tap or squeeze.

The following code example shows how to use the [location](uipencilhoverpose/location.md) of a hover pose to present a contextual palette near the tip of Apple Pencil.

```swift
func pencilInteraction(_ interaction: UIPencilInteraction,
                       didReceiveSqueeze squeeze: UIPencilInteraction.Squeeze) {
    let preferredAction = UIPencilInteraction.preferredSqueezeAction
    
    if preferredAction == .showContextualPalette, squeeze.phase == .ended {
        if let anchorPoint = squeeze.hoverPose?.location {
            presentContextualPalette(atLocation: anchorPoint)
        }
    }
}
```

## Topics

### Getting the hover characteristics

- [location](uipencilhoverpose/location.md): The location of an Apple Pencil above the view’s bounds, in view’s coordinate space.
- [altitudeAngle](uipencilhoverpose/altitudeangle.md): A value that represents the altitude angle of Apple Pencil.
- [azimuthAngle](uipencilhoverpose/azimuthangle.md): A value that represents the azimuth angle of Apple Pencil.
- [azimuthUnitVector](uipencilhoverpose/azimuthunitvector.md): A value that represents the azimuth unit vector of Apple Pencil in the specified view.
- [rollAngle](uipencilhoverpose/rollangle.md): A value that represents the barrel-roll angle of Apple Pencil.
- [zOffset](uipencilhoverpose/zoffset.md): A value that represents the normalized distance between the screen and Apple Pencil.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionDelegate](uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteractionTap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteractionSqueeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteractionPhase](uipencilinteraction/phase.md): Constants that describe the phases of an interaction on Apple Pencil.
