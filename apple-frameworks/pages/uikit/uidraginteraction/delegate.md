> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/delegate](https://developer.apple.com/documentation/uikit/uidraginteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that configures and controls a drag interaction.

## Declaration

```swift
weak var delegate: (any UIDragInteractionDelegate)? { get }
```

## See Also

### Managing drag interactions

- [allowsSimultaneousRecognitionDuringLift](allowssimultaneousrecognitionduringlift.md): A Boolean value that determines whether the interaction allows recognition of other gestures during the lift activity.
- [UIDragInteractionDelegate](../uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that configures and controls a drag interaction.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIDragInteractionDelegate> delegate;
```

## See Also

### Managing drag interactions

- [allowsSimultaneousRecognitionDuringLift](allowssimultaneousrecognitionduringlift.md): A Boolean value that determines whether the interaction allows recognition of other gestures during the lift activity.
- [UIDragInteractionDelegate](../uidraginteractiondelegate.md): The interface for configuring and controlling a drag interaction.
