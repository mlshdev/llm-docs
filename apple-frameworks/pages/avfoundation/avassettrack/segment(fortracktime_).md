> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/segment(fortracktime:)](https://developer.apple.com/documentation/avfoundation/avassettrack/segment(fortracktime:))

# segment(forTrackTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Retrieves a segment with a target time range that contains, or is closest to, the specified track time.

> Use [loadSegment(forTrackTime:completionHandler:)](loadsegment%28fortracktime_completionhandler_%29.md) instead.

## Declaration

```swift
func segment(forTrackTime trackTime: CMTime) -> AVAssetTrackSegment?
```

## Parameters

- `trackTime`: The track time for which you want the segment.

<a id="return-value"></a>

## Return Value

The track segment matching, or closest to, the specied time.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a segment asynchronously using [loadSegment(forTrackTime:completionHandler:)](loadsegment%28fortracktime_completionhandler_%29.md) instead.

# segmentForTrackTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Retrieves a segment with a target time range that contains, or is closest to, the specified track time.

> Use [loadSegmentForTrackTime:completionHandler:](loadsegment%28fortracktime_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (AVAssetTrackSegment *) segmentForTrackTime:(CMTime) trackTime;
```

## Parameters

- `trackTime`: The track time for which you want the segment.

<a id="return-value"></a>

## Return Value

The track segment matching, or closest to, the specied time.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a segment asynchronously using [loadSegmentForTrackTime:completionHandler:](loadsegment%28fortracktime_completionhandler_%29.md) instead.

## See Also

### Accessing track segments

- [segments](segments.md): Deprecated. The time mappings from the track’s media samples to its timeline.
