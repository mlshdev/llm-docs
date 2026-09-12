> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/isskipforwardenabled](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/isskipforwardenabled)

# isSkipForwardEnabled (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A Boolean value that indicates whether forward-skipping is available.

## Declaration

```swift
var isSkipForwardEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property affects the appearance of the forward-skipping indicator. The value you set for the player view controller’s [skippingBehavior](skippingbehavior.md) property determines its forward-skipping behavior.

## See Also

### Configuring skipping behavior

- [isSkipBackwardEnabled](isskipbackwardenabled.md): A Boolean value that indicates whether backward-skipping is available.
- [skippingBehavior](skippingbehavior.md): The behavior that skipping gestures perform.
- [AVPlayerViewControllerSkippingBehavior](../avplayerviewcontrollerskippingbehavior.md): Constants that represent the player view controller’s skipping behavior.

# skipForwardEnabled (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A Boolean value that indicates whether forward-skipping is available.

## Declaration

```objectivec
@property (nonatomic, getter=isSkipForwardEnabled) BOOL skipForwardEnabled;
```

<a id="Discussion"></a>

## Discussion

This property affects the appearance of the forward-skipping indicator. The value you set for the player view controller’s [skippingBehavior](skippingbehavior.md) property determines its forward-skipping behavior.

## See Also

### Configuring skipping behavior

- [skipBackwardEnabled](isskipbackwardenabled.md): A Boolean value that indicates whether backward-skipping is available.
- [skippingBehavior](skippingbehavior.md): The behavior that skipping gestures perform.
- [AVPlayerViewControllerSkippingBehavior](../avplayerviewcontrollerskippingbehavior.md): Constants that represent the player view controller’s skipping behavior.
