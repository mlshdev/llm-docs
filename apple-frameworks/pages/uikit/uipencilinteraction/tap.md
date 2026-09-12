> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteraction/tap](https://developer.apple.com/documentation/uikit/uipencilinteraction/tap)

# UIPencilInteraction.Tap (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

An interaction that represents a double tap on Apple Pencil.

## Declaration

```swift
@MainActor class Tap
```

## Topics

### Getting information about a double-tap interaction

- [timestamp](tap/timestamp.md): The timestamp of the double-tap interaction.
- [hoverPose](tap/hoverpose.md): The hover pose of Apple Pencil during a double-tap interaction.
- [UIPencilHoverPose](../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](../uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionDelegate](../uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteraction.Squeeze](squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteraction.Phase](phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

# UIPencilInteractionTap (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

An interaction that represents a double tap on Apple Pencil.

## Declaration

```objectivec
@interface UIPencilInteractionTap : NSObject
```

## Topics

### Getting information about a double-tap interaction

- [timestamp](tap/timestamp.md): The timestamp of the double-tap interaction.
- [hoverPose](tap/hoverpose.md): The hover pose of Apple Pencil during a double-tap interaction.
- [UIPencilHoverPose](../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](../uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionDelegate](../uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteractionSqueeze](squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteractionPhase](phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.
