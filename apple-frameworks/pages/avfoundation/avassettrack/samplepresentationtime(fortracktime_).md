> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/samplepresentationtime(fortracktime:)](https://developer.apple.com/documentation/avfoundation/avassettrack/samplepresentationtime(fortracktime:))

# samplePresentationTime(forTrackTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

> Use [loadSamplePresentationTime(forTrackTime:completionHandler:)](loadsamplepresentationtime%28fortracktime_completionhandler_%29.md) instead.

## Declaration

```swift
func samplePresentationTime(forTrackTime trackTime: CMTime) -> CMTime
```

## Parameters

- `trackTime`: The track time for which to request the sample presentation time.

<a id="return-value"></a>

## Return Value

The sample presentation time corresponding to the specified time; otherwise [invalid](../../coremedia/cmtime/invalid.md) if the time is out of range.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a sample presentation time asynchronously using [loadSamplePresentationTime(forTrackTime:completionHandler:)](loadsamplepresentationtime%28fortracktime_completionhandler_%29.md) instead.

# samplePresentationTimeForTrackTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Maps the specified track time through the appropriate time mapping and returns the resulting sample presentation time.

> Use [loadSamplePresentationTimeForTrackTime:completionHandler:](loadsamplepresentationtime%28fortracktime_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (CMTime) samplePresentationTimeForTrackTime:(CMTime) trackTime;
```

## Parameters

- `trackTime`: The track time for which to request the sample presentation time.

<a id="return-value"></a>

## Return Value

The sample presentation time corresponding to the specified time; otherwise [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) if the time is out of range.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a sample presentation time asynchronously using [loadSamplePresentationTimeForTrackTime:completionHandler:](loadsamplepresentationtime%28fortracktime_completionhandler_%29.md) instead.

## See Also

### Accessing temporal information

- [timeRange](timerange.md): Deprecated. The time range of the track within the overall timeline of the asset.
- [naturalTimeScale](naturaltimescale.md): Deprecated. The natural time scale of the media that a track references.
- [estimatedDataRate](estimateddatarate.md): Deprecated. The estimated data rate, in bits per second, of the media that the track references.
