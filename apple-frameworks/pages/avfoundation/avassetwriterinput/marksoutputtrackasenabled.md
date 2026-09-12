> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/marksoutputtrackasenabled](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/marksoutputtrackasenabled)

# marksOutputTrackAsEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether to enable a track in the output for playback and processing.

## Declaration

```swift
var marksOutputTrackAsEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If the format you’re writing supports disabling tracks, you can disable a track by setting this value to [false](https://developer.apple.com/documentation/swift/false).

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.

# marksOutputTrackAsEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether to enable a track in the output for playback and processing.

## Declaration

```objectivec
@property (nonatomic) BOOL marksOutputTrackAsEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If the format you’re writing supports disabling tracks, you can disable a track by setting this value to [false](https://developer.apple.com/documentation/swift/false).

You can’t set this value after writing starts.

## See Also

### Configuring presentation

- [naturalSize](naturalsize.md): The natural display dimensions of the output’s visual media.
- [transform](transform.md): The transform to use for display of the output’s visual media.
- [preferredVolume](preferredvolume.md): The volume to prefer for playback of the output’s audio data.
- [mediaTimeScale](mediatimescale.md): The time scale of the track in the output file.
