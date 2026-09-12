> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/preferredvolume](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/preferredvolume)

# preferredVolume (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The volume to prefer for playback of the output’s audio data.

## Declaration

```swift
var preferredVolume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for audio data is `1.0`, which indicates typical playback level. Set the value for this property in the range of `0.0` to `1.0`. For nonaudio media, the default value is `0.0`.

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](transform.md): The transform to use for display of the output’s visual media.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.

# preferredVolume (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The volume to prefer for playback of the output’s audio data.

## Declaration

```objectivec
@property (nonatomic) float preferredVolume;
```

<a id="Discussion"></a>

## Discussion

The default value for audio data is `1.0`, which indicates typical playback level. Set the value for this property in the range of `0.0` to `1.0`. For nonaudio media, the default value is `0.0`.

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](transform.md): The transform to use for display of the output’s visual media.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.
