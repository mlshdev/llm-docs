> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturereactioneffectstate/reactiontype](https://developer.apple.com/documentation/avfoundation/avcapturereactioneffectstate/reactiontype)

# reactionType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The type of reaction.

## Declaration

```swift
var reactionType: AVCaptureReactionType { get }
```

<a id="Discussion"></a>

## Discussion

There may be multiple reactions of the same type at a given time. Some may come from calls to [performEffect(for:)](../avcapturedevice/performeffect%28for_%29.md) and others from gesture detection.

## See Also

### Configuring the effect state

- [AVCaptureReactionType](../avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [startTime](starttime.md): The presentation time of the first frame where the system renders the effect.
- [endTime](endtime.md): The presentation time of the first frame following the end of a reaction effect.

# reactionType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The type of reaction.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureReactionType reactionType;
```

<a id="Discussion"></a>

## Discussion

There may be multiple reactions of the same type at a given time. Some may come from calls to [performEffectForReaction:](../avcapturedevice/performeffect%28for_%29.md) and others from gesture detection.

## See Also

### Configuring the effect state

- [AVCaptureReactionType](../avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [startTime](starttime.md): The presentation time of the first frame where the system renders the effect.
- [endTime](endtime.md): The presentation time of the first frame following the end of a reaction effect.
