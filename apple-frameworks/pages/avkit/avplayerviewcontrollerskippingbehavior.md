> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerskippingbehavior](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerskippingbehavior)

# AVPlayerViewControllerSkippingBehavior (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** tvOS 10.0+

Constants that represent the player view controller’s skipping behavior.

## Declaration

```swift
enum AVPlayerViewControllerSkippingBehavior
```

## Topics

### Creating a skipping behavior

- [init(rawValue:)](avplayerviewcontrollerskippingbehavior/init%28rawvalue_%29.md)

### Skipping Behaviors

- [AVPlayerViewControllerSkippingBehavior.default](avplayerviewcontrollerskippingbehavior/default.md): The default skipping behavior, which is to skip forward or backward in 10-second intervals.
- [AVPlayerViewControllerSkippingBehavior.skipItem](avplayerviewcontrollerskippingbehavior/skipitem.md): Skipping behavior that specifies skipping to the next or previous item in the player’s playlist.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring skipping behavior

- [isSkipForwardEnabled](avplayerviewcontroller/isskipforwardenabled.md): A Boolean value that indicates whether forward-skipping is available.
- [isSkipBackwardEnabled](avplayerviewcontroller/isskipbackwardenabled.md): A Boolean value that indicates whether backward-skipping is available.
- [skippingBehavior](avplayerviewcontroller/skippingbehavior.md): The behavior that skipping gestures perform.

# AVPlayerViewControllerSkippingBehavior (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** tvOS 10.0+

Constants that represent the player view controller’s skipping behavior.

## Declaration

```objectivec
enum AVPlayerViewControllerSkippingBehavior : NSInteger;
```

## Topics

### Skipping Behaviors

- [AVPlayerViewControllerSkippingBehaviorDefault](avplayerviewcontrollerskippingbehavior/default.md): The default skipping behavior, which is to skip forward or backward in 10-second intervals.
- [AVPlayerViewControllerSkippingBehaviorSkipItem](avplayerviewcontrollerskippingbehavior/skipitem.md): Skipping behavior that specifies skipping to the next or previous item in the player’s playlist.

## See Also

### Configuring skipping behavior

- [skipForwardEnabled](avplayerviewcontroller/isskipforwardenabled.md): A Boolean value that indicates whether forward-skipping is available.
- [skipBackwardEnabled](avplayerviewcontroller/isskipbackwardenabled.md): A Boolean value that indicates whether backward-skipping is available.
- [skippingBehavior](avplayerviewcontroller/skippingbehavior.md): The behavior that skipping gestures perform.
