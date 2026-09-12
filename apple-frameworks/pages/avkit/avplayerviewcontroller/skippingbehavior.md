> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/skippingbehavior](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/skippingbehavior)

# skippingBehavior (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The behavior that skipping gestures perform.

## Declaration

```swift
var skippingBehavior: AVPlayerViewControllerSkippingBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

This property lets you override the default skipping behavior in tvOS, which is to skip forward or backward 10 seconds when a user presses the right or left sides, respectively, of the Touch surface on the Siri Remote.

## See Also

### Configuring skipping behavior

- [isSkipForwardEnabled](isskipforwardenabled.md): A Boolean value that indicates whether forward-skipping is available.
- [isSkipBackwardEnabled](isskipbackwardenabled.md): A Boolean value that indicates whether backward-skipping is available.
- [AVPlayerViewControllerSkippingBehavior](../avplayerviewcontrollerskippingbehavior.md): Constants that represent the player view controller’s skipping behavior.

# skippingBehavior (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The behavior that skipping gestures perform.

## Declaration

```objectivec
@property (nonatomic) AVPlayerViewControllerSkippingBehavior skippingBehavior;
```

<a id="Discussion"></a>

## Discussion

This property lets you override the default skipping behavior in tvOS, which is to skip forward or backward 10 seconds when a user presses the right or left sides, respectively, of the Touch surface on the Siri Remote.

## See Also

### Configuring skipping behavior

- [skipForwardEnabled](isskipforwardenabled.md): A Boolean value that indicates whether forward-skipping is available.
- [skipBackwardEnabled](isskipbackwardenabled.md): A Boolean value that indicates whether backward-skipping is available.
- [AVPlayerViewControllerSkippingBehavior](../avplayerviewcontrollerskippingbehavior.md): Constants that represent the player view controller’s skipping behavior.
