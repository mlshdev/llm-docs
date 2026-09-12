> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/loadsamplepresentationtime(fortracktime:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassettrack/loadsamplepresentationtime(fortracktime:completionhandler:))

# loadSamplePresentationTime(forTrackTime:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a sample presentation time that maps to the specified track time.

## Declaration

```swift
func loadSamplePresentationTime(forTrackTime trackTime: CMTime, completionHandler: @escaping @Sendable (CMTime, (any Error)?) -> Void)
```

```swift
func loadSamplePresentationTime(forTrackTime trackTime: CMTime) async throws -> CMTime
```

## Parameters

- `trackTime`: The track time of the presentation time to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **time**: A [CMTime](../../coremedia/cmtime.md) value, which is [invalid](../../coremedia/cmtime/invalid.md) if the track time is out of range or if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading track segments

- [segments](../avpartialasyncproperty/segments.md): Conforms when `Root` inherits `AVAssetTrack`. The time mappings from the track’s media samples to its timeline.
- [loadSegment(forTrackTime:completionHandler:)](loadsegment%28fortracktime_completionhandler_%29.md): Loads a segment with a target time range that contains, or is closest to, the specified track time.
- [AVAssetTrackSegment](../avassettracksegment.md): An object that represents a time range segment of an asset track.

# loadSamplePresentationTimeForTrackTime:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a sample presentation time that maps to the specified track time.

## Declaration

```objectivec
- (void) loadSamplePresentationTimeForTrackTime:(CMTime) trackTime completionHandler:(void (^)(CMTime , NSError *)) completionHandler;
```

## Parameters

- `trackTime`: The track time of the presentation time to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **time**: A [CMTime](../../coremedia/cmtime.md) value, which is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) if the track time is out of range or if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading track segments

- [loadSegmentForTrackTime:completionHandler:](loadsegment%28fortracktime_completionhandler_%29.md): Loads a segment with a target time range that contains, or is closest to, the specified track time.
- [AVAssetTrackSegment](../avassettracksegment.md): An object that represents a time range segment of an asset track.
