> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/samplepresentationtime(fortracktime:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/samplepresentationtime(fortracktime:))

# samplePresentationTime(forTrackTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

## Declaration

```swift
func samplePresentationTime(forTrackTime trackTime: CMTime) -> CMTime
```

## Parameters

- `trackTime`: The track time for which to request the sample presentation time.

<a id="return-value"></a>

## Return Value

The sample presentation time corresponding to the specified time; otherwise [invalid](../../coremedia/cmtime/invalid.md) if the time is out of range.

## See Also

### Accessing temporal information

- [timeRange](timerange.md): The time range of the track within the overall timeline of the asset.
- [timescale](timescale.md): The time scale for tracks that contain the `moov` atom.
- [naturalTimeScale](naturaltimescale.md): The natural time scale of the media that a track references.
- [estimatedDataRate](estimateddatarate.md): The estimated data rate, in bits per second, of the media that the track references.

# samplePresentationTimeForTrackTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

## Declaration

```objectivec
- (CMTime) samplePresentationTimeForTrackTime:(CMTime) trackTime;
```

## Parameters

- `trackTime`: The track time for which to request the sample presentation time.

<a id="return-value"></a>

## Return Value

The sample presentation time corresponding to the specified time; otherwise [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) if the time is out of range.

## See Also

### Accessing temporal information

- [timescale](timescale.md): The time scale for tracks that contain the `moov` atom.
