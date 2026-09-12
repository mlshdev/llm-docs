> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/timescale](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/timescale)

# timescale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The time scale for tracks that contain the `moov` atom.

## Declaration

```swift
var timescale: CMTimeScale { get set }
```

<a id="Discussion"></a>

## Discussion

The default media time is `0`. Set this property on any new, empty tracks before any edits are performed on the track.

## See Also

### Accessing temporal information

- [timeRange](timerange.md): The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](naturaltimescale.md): The natural time scale of the media that a track references.
- [estimatedDataRate](estimateddatarate.md): The estimated data rate, in bits per second, of the media that the track references.
- [samplePresentationTime(forTrackTime:)](samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

# timescale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The time scale for tracks that contain the `moov` atom.

## Declaration

```objectivec
@property (nonatomic, readwrite) CMTimeScale timescale;
```

<a id="Discussion"></a>

## Discussion

The default media time is `0`. Set this property on any new, empty tracks before any edits are performed on the track.

## See Also

### Accessing temporal information

- [samplePresentationTimeForTrackTime:](samplepresentationtime%28fortracktime_%29.md): Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.
