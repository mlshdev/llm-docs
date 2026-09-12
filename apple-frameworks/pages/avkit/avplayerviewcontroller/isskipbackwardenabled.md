> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/isskipbackwardenabled](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/isskipbackwardenabled)

# isSkipBackwardEnabled (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A Boolean value that indicates whether backward-skipping is available.

## Declaration

```swift
var isSkipBackwardEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property affects the appearance of the backward-skipping indicator. The value you set for the player view controller’s [skippingBehavior](skippingbehavior.md) property determines its backward-skipping behavior.

## See Also

### Configuring skipping behavior

- [isSkipForwardEnabled](isskipforwardenabled.md): A Boolean value that indicates whether forward-skipping is available.
- [skippingBehavior](skippingbehavior.md): The behavior that skipping gestures perform.
- [AVPlayerViewControllerSkippingBehavior](../avplayerviewcontrollerskippingbehavior.md): Constants that represent the player view controller’s skipping behavior.

# skipBackwardEnabled (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A Boolean value that indicates whether backward-skipping is available.

## Declaration

```objectivec
@property (nonatomic, getter=isSkipBackwardEnabled) BOOL skipBackwardEnabled;
```

<a id="Discussion"></a>

## Discussion

This property affects the appearance of the backward-skipping indicator. The value you set for the player view controller’s [skippingBehavior](skippingbehavior.md) property determines its backward-skipping behavior.

## See Also

### Configuring skipping behavior

- [skipForwardEnabled](isskipforwardenabled.md): A Boolean value that indicates whether forward-skipping is available.
- [skippingBehavior](skippingbehavior.md): The behavior that skipping gestures perform.
- [AVPlayerViewControllerSkippingBehavior](../avplayerviewcontrollerskippingbehavior.md): Constants that represent the player view controller’s skipping behavior.
