> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/loadsegment(fortracktime:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassettrack/loadsegment(fortracktime:completionhandler:))

# loadSegment(forTrackTime:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a segment with a target time range that contains, or is closest to, the specified track time.

## Declaration

```swift
func loadSegment(forTrackTime trackTime: CMTime, completionHandler: @escaping @Sendable (AVAssetTrackSegment?, (any Error)?) -> Void)
```

```swift
func loadSegment(forTrackTime trackTime: CMTime) async throws -> AVAssetTrackSegment?
```

## Parameters

- `trackTime`: The track time of the segment to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **segment**: The loaded track segment, or `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

If the specified track time doesn’t map to a sample presentation time, the system returns the segment with the closest matching time.

## See Also

### Loading track segments

- [segments](../avpartialasyncproperty/segments.md): Conforms when `Root` inherits `AVAssetTrack`. The time mappings from the track’s media samples to its timeline.
- [loadSamplePresentationTime(forTrackTime:completionHandler:)](loadsamplepresentationtime%28fortracktime_completionhandler_%29.md): Loads a sample presentation time that maps to the specified track time.
- [AVAssetTrackSegment](../avassettracksegment.md): An object that represents a time range segment of an asset track.

# loadSegmentForTrackTime:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a segment with a target time range that contains, or is closest to, the specified track time.

## Declaration

```objectivec
- (void) loadSegmentForTrackTime:(CMTime) trackTime completionHandler:(void (^)(AVAssetTrackSegment *, NSError *)) completionHandler;
```

## Parameters

- `trackTime`: The track time of the segment to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **segment**: The loaded track segment, or `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

If the specified track time doesn’t map to a sample presentation time, the system returns the segment with the closest matching time.

## See Also

### Loading track segments

- [loadSamplePresentationTimeForTrackTime:completionHandler:](loadsamplepresentationtime%28fortracktime_completionhandler_%29.md): Loads a sample presentation time that maps to the specified track time.
- [AVAssetTrackSegment](../avassettracksegment.md): An object that represents a time range segment of an asset track.
