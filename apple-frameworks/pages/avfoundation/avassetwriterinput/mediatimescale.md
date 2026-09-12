> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/mediatimescale](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediatimescale)

# mediaTimeScale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time scale of the track in the output file.

## Declaration

```swift
var mediaTimeScale: CMTimeScale { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates that the input chooses an appropriate value, if applicable. It’s an error to set this value if the input’s media type is [audio](../avmediatype/audio.md).

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.

# mediaTimeScale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time scale of the track in the output file.

## Declaration

```objectivec
@property (nonatomic) CMTimeScale mediaTimeScale;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates that the input chooses an appropriate value, if applicable. It’s an error to set this value if the input’s media type is [AVMediaTypeAudio](../avmediatype/audio.md).

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.
