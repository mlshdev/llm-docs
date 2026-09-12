> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/naturalsize](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/naturalsize)

# naturalSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The natural display dimensions of the output’s visual media.

## Declaration

```swift
var naturalSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md), which indicates the system sets the natural size according to the dimensions of the output track’s format descriptions.

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [transform](transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.

# naturalSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The natural display dimensions of the output’s visual media.

## Declaration

```objectivec
@property (nonatomic) CGSize naturalSize;
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md), which indicates the system sets the natural size according to the dimensions of the output track’s format descriptions.

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [transform](transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
- [marksOutputTrackAsEnabled](marksoutputtrackasenabled.md): A Boolean value that indicates whether to enable a track in the output for playback and processing.
