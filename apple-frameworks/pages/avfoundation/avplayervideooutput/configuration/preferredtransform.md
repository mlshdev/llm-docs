> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayervideooutput/configuration/preferredtransform](https://developer.apple.com/documentation/avfoundation/avplayervideooutput/configuration/preferredtransform)

# preferredTransform (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The preferred transform of the visual media.

## Declaration

```swift
var preferredTransform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

The system retrieves the transform from the [AVAssetTrack](../../avassettrack.md) that provides the media data. If the source track doesn’t specify a transform, the value of this property is [CGAffineTransformIdentity](../../../coregraphics/cgaffinetransformidentity.md).

## See Also

### Inspecting the configuration

- [sourcePlayerItem](sourceplayeritem.md): The player item that’s the source of this configuration.
- [dataChannelDescription](datachanneldescription.md): An array of data channels selected for this configuration.
- [activationTime](activationtime.md): The host time this configuration became active on its associated player object.

# preferredTransform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The preferred transform of the visual media.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform preferredTransform;
```

<a id="Discussion"></a>

## Discussion

The system retrieves the transform from the [AVAssetTrack](../../avassettrack.md) that provides the media data. If the source track doesn’t specify a transform, the value of this property is [CGAffineTransformIdentity](../../../coregraphics/cgaffinetransformidentity.md).

## See Also

### Inspecting the configuration

- [sourcePlayerItem](sourceplayeritem.md): The player item that’s the source of this configuration.
- [dataChannelDescriptions](../../avplayervideooutputconfiguration/datachanneldescriptions.md): An array of data channels selected for this configuration.
- [activationTime](activationtime.md): The host time this configuration became active on its associated player object.
