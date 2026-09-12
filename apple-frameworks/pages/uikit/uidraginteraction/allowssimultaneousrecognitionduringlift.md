> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/allowssimultaneousrecognitionduringlift](https://developer.apple.com/documentation/uikit/uidraginteraction/allowssimultaneousrecognitionduringlift)

# allowsSimultaneousRecognitionDuringLift (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the interaction allows recognition of other gestures during the lift activity.

## Declaration

```swift
var allowsSimultaneousRecognitionDuringLift: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you set the [allowsSimultaneousRecognitionDuringLift](allowssimultaneousrecognitionduringlift.md) property to [true](https://developer.apple.com/documentation/swift/true), the interaction is canceled when another gesture is recognized. If you set this property to [false](https://developer.apple.com/documentation/swift/false) (the default value), competing gesture recognizers fail.

> **Note**

>  [UILongPressGestureRecognizer](../uilongpressgesturerecognizer.md) instances are always delayed and happen simultaneously during the lift activity.

## See Also

### Managing drag interactions

- [delegate](delegate.md): An object that configures and controls a drag interaction.
- [UIDragInteractionDelegate](../uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.

# allowsSimultaneousRecognitionDuringLift (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the interaction allows recognition of other gestures during the lift activity.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsSimultaneousRecognitionDuringLift;
```

<a id="Discussion"></a>

## Discussion

If you set the [allowsSimultaneousRecognitionDuringLift](allowssimultaneousrecognitionduringlift.md) property to [true](https://developer.apple.com/documentation/swift/true), the interaction is canceled when another gesture is recognized. If you set this property to [false](https://developer.apple.com/documentation/swift/false) (the default value), competing gesture recognizers fail.

> **Note**

>  [UILongPressGestureRecognizer](../uilongpressgesturerecognizer.md) instances are always delayed and happen simultaneously during the lift activity.

## See Also

### Managing drag interactions

- [delegate](delegate.md): An object that configures and controls a drag interaction.
- [UIDragInteractionDelegate](../uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
