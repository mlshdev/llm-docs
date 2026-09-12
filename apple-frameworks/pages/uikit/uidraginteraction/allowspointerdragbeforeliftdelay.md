> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/allowspointerdragbeforeliftdelay](https://developer.apple.com/documentation/uikit/uidraginteraction/allowspointerdragbeforeliftdelay)

# allowsPointerDragBeforeLiftDelay (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.

## Declaration

```swift
var allowsPointerDragBeforeLiftDelay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), a pointer-initiated drag begins as soon as the pointer crosses the minimum movement threshold, regardless of whether the lift delay has elapsed.

When this property is [false](https://developer.apple.com/documentation/swift/false), a pointer-initiated drag waits for the lift delay to elapse before checking whether the pointer has crossed the minimum movement threshold. This matches touch-based drag initiation behavior.

Set this property to [false](https://developer.apple.com/documentation/swift/false) in gesture-rich views (such as a canvas) where people also interact frequently with secondary gestures in the same view. This ensures consistent gesture disambiguation regardless of input device.

The default value is [true](https://developer.apple.com/documentation/swift/true) in iOS and [false](https://developer.apple.com/documentation/swift/false) in macOS.

For touch-based gesture timing, use [liftBehavior](liftbehavior-swift.property.md).

## See Also

### Configuring lift behavior

- [liftBehavior](liftbehavior-swift.property.md): A value that controls the timing behavior for initiating a drag gesture from a touch.
- [UIDragInteraction.LiftBehavior](liftbehavior-swift.enum.md): Constants that determine the lift behavior for a drag interaction.

# allowsPointerDragBeforeLiftDelay (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A Boolean value that controls whether pointer-initiated drags begin before the lift delay elapses.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsPointerDragBeforeLiftDelay;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), a pointer-initiated drag begins as soon as the pointer crosses the minimum movement threshold, regardless of whether the lift delay has elapsed.

When this property is [false](https://developer.apple.com/documentation/swift/false), a pointer-initiated drag waits for the lift delay to elapse before checking whether the pointer has crossed the minimum movement threshold. This matches touch-based drag initiation behavior.

Set this property to [false](https://developer.apple.com/documentation/swift/false) in gesture-rich views (such as a canvas) where people also interact frequently with secondary gestures in the same view. This ensures consistent gesture disambiguation regardless of input device.

The default value is [true](https://developer.apple.com/documentation/swift/true) in iOS and [false](https://developer.apple.com/documentation/swift/false) in macOS.

For touch-based gesture timing, use [liftBehavior](liftbehavior-swift.property.md).

## See Also

### Configuring lift behavior

- [liftBehavior](liftbehavior-swift.property.md): A value that controls the timing behavior for initiating a drag gesture from a touch.
- [UIDragLiftBehavior](liftbehavior-swift.enum.md): Constants that determine the lift behavior for a drag interaction.
