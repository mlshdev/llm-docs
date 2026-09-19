> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturereactioneffectstate/starttime

# startTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The presentation time of the first frame where the system renders the effect.

## Declaration

```swift
var startTime: CMTime { get }
```

## See Also

### Configuring the effect state

- [reactionType](reactiontype.md): The type of reaction.
- [AVCaptureReactionType](../avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [endTime](endtime.md): The presentation time of the first frame following the end of a reaction effect.

# startTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The presentation time of the first frame where the system renders the effect.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime startTime;
```

## See Also

### Configuring the effect state

- [reactionType](reactiontype.md): The type of reaction.
- [AVCaptureReactionType](../avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [endTime](endtime.md): The presentation time of the first frame following the end of a reaction effect.
