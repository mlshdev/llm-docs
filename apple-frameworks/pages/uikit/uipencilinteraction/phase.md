> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteraction/phase](https://developer.apple.com/documentation/uikit/uipencilinteraction/phase)

# UIPencilInteraction.Phase (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

Constants that describe the phases of an interaction on Apple Pencil.

## Declaration

```swift
enum Phase
```

## Topics

### Phases

- [UIPencilInteraction.Phase.began](phase/began.md): A continuous gesture on the pencil began
- [UIPencilInteraction.Phase.cancelled](phase/cancelled.md): A continuous gesture on the pencil was cancelled
- [UIPencilInteraction.Phase.changed](phase/changed.md): A continuous gesture on the pencil changed
- [UIPencilInteraction.Phase.ended](phase/ended.md): A continuous gesture on the pencil ended, or a discrete gesture on the pencil recognized

### Initializers

- [init(rawValue:)](phase/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](../uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionDelegate](../uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteraction.Tap](tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteraction.Squeeze](squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilHoverPose](../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

# UIPencilInteractionPhase (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 26.2+

Constants that describe the phases of an interaction on Apple Pencil.

## Declaration

```objectivec
enum UIPencilInteractionPhase : NSUInteger;
```

## Topics

### Phases

- [UIPencilInteractionPhaseBegan](phase/began.md): A continuous gesture on the pencil began
- [UIPencilInteractionPhaseCancelled](phase/cancelled.md): A continuous gesture on the pencil was cancelled
- [UIPencilInteractionPhaseChanged](phase/changed.md): A continuous gesture on the pencil changed
- [UIPencilInteractionPhaseEnded](phase/ended.md): A continuous gesture on the pencil ended, or a discrete gesture on the pencil recognized

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](../uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionDelegate](../uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
- [UIPencilInteractionTap](tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteractionSqueeze](squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilHoverPose](../uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.
