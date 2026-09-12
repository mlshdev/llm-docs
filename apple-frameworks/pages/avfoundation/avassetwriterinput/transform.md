> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/transform](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/transform)

# transform (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The transform to use for display of the output’s visual media.

## Declaration

```swift
var transform: CGAffineTransform { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the input uses the [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md) transform.

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.

# transform (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The transform to use for display of the output’s visual media.

## Declaration

```objectivec
@property (nonatomic) CGAffineTransform transform;
```

<a id="Discussion"></a>

## Discussion

By default, the input uses the [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md) transform.

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.
