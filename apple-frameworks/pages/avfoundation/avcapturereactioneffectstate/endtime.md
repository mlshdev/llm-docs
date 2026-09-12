> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturereactioneffectstate/endtime](https://developer.apple.com/documentation/avfoundation/avcapturereactioneffectstate/endtime)

# endTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The presentation time of the first frame following the end of a reaction effect.

## Declaration

```swift
var endTime: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The value is [invalid](../../coremedia/cmtime/invalid.md) while the effect is in progress, but changes to a valid time when the reaction effect completes and the system removes it from the list of [reactionEffectsInProgress](../avcapturedevice/reactioneffectsinprogress.md).

## See Also

### Configuring the effect state

- [reactionType](reactiontype.md): The type of reaction.
- [AVCaptureReactionType](../avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [startTime](starttime.md): The presentation time of the first frame where the system renders the effect.

# endTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The presentation time of the first frame following the end of a reaction effect.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime endTime;
```

<a id="Discussion"></a>

## Discussion

The value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) while the effect is in progress, but changes to a valid time when the reaction effect completes and the system removes it from the list of [reactionEffectsInProgress](../avcapturedevice/reactioneffectsinprogress.md).

## See Also

### Configuring the effect state

- [reactionType](reactiontype.md): The type of reaction.
- [AVCaptureReactionType](../avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [startTime](starttime.md): The presentation time of the first frame where the system renders the effect.
