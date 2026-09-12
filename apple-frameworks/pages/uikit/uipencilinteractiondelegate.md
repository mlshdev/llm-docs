> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteractiondelegate](https://developer.apple.com/documentation/uikit/uipencilinteractiondelegate)

# UIPencilInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.

## Declaration

```swift
@MainActor protocol UIPencilInteractionDelegate : NSObjectProtocol
```

## Topics

### Handling double-tap interactions

- [pencilInteraction(\_:didReceiveTap:)](uipencilinteractiondelegate/pencilinteraction%28__didreceivetap_%29.md): Tells the delegate when a person double-taps Apple Pencil.

### Handling squeeze interactions

- [pencilInteraction(\_:didReceiveSqueeze:)](uipencilinteractiondelegate/pencilinteraction%28__didreceivesqueeze_%29.md): Tells the delegate when a person squeezes Apple Pencil.

### Deprecated

- [pencilInteractionDidTap(\_:)](uipencilinteractiondelegate/pencilinteractiondidtap%28__%29.md): Deprecated. Tells the delegate that the user double-tapped Apple Pencil.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteraction.Tap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteraction.Squeeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteraction.Phase](uipencilinteraction/phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.

# UIPencilInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.

## Declaration

```objectivec
@protocol UIPencilInteractionDelegate <NSObject>
```

## Topics

### Handling double-tap interactions

- [pencilInteraction:didReceiveTap:](uipencilinteractiondelegate/pencilinteraction%28__didreceivetap_%29.md): Tells the delegate when a person double-taps Apple Pencil.

### Handling squeeze interactions

- [pencilInteraction:didReceiveSqueeze:](uipencilinteractiondelegate/pencilinteraction%28__didreceivesqueeze_%29.md): Tells the delegate when a person squeezes Apple Pencil.

### Deprecated

- [pencilInteractionDidTap:](uipencilinteractiondelegate/pencilinteractiondidtap%28__%29.md): Deprecated. Tells the delegate that the user double-tapped Apple Pencil.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Apple Pencil interactions in UIKit

- [UIPencilInteraction](uipencilinteraction.md): An interaction that tells your app when a person double-taps or squeezes Apple Pencil.
- [UIPencilInteractionTap](uipencilinteraction/tap.md): An interaction that represents a double tap on Apple Pencil.
- [UIPencilInteractionSqueeze](uipencilinteraction/squeeze.md): An interaction that represents a squeeze on Apple Pencil.
- [UIPencilInteractionPhase](uipencilinteraction/phase.md): Constants that describe the phases of an interaction on Apple Pencil.
- [UIPencilHoverPose](uipencilhoverpose.md): An object that describes the hover pose of Apple Pencil during an interaction like double tap or squeeze.
