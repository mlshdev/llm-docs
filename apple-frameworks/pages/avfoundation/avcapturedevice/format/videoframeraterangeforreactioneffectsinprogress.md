> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videoframeraterangeforreactioneffectsinprogress](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videoframeraterangeforreactioneffectsinprogress)

# videoFrameRateRangeForReactionEffectsInProgress (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Indicates the minimum and maximum frame rates available when a reaction effect runs.

## Declaration

```swift
var videoFrameRateRangeForReactionEffectsInProgress: AVFrameRateRange? { get }
```

<a id="Discussion"></a>

## Discussion

Unlike other video effects, enabling reaction effects doesn’t limit the stream’s frame rate because most of the time the system isn’t rendering the effect. The frame rate only ramps down when the system renders a reaction on the stream.

## See Also

### Determining reaction effects support

- [reactionEffectsSupported](reactioneffectssupported.md): A Boolean value that indicates whether the device supports reaction effects.

# videoFrameRateRangeForReactionEffectsInProgress (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Indicates the minimum and maximum frame rates available when a reaction effect runs.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVFrameRateRange * videoFrameRateRangeForReactionEffectsInProgress;
```

<a id="Discussion"></a>

## Discussion

Unlike other video effects, enabling reaction effects doesn’t limit the stream’s frame rate because most of the time the system isn’t rendering the effect. The frame rate only ramps down when the system renders a reaction on the stream.

## See Also

### Determining reaction effects support

- [reactionEffectsSupported](reactioneffectssupported.md): A Boolean value that indicates whether the device supports reaction effects.
