> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcompositiontrack/segment(fortracktime:)

# segment(forTrackTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a segment whose target time range contains, or is closest to, the specified track time.

## Declaration

```swift
func segment(forTrackTime trackTime: CMTime) -> AVCompositionTrackSegment?
```

## Parameters

- `trackTime`: The track time of the segment to return.

<a id="return-value"></a>

## Return Value

The [AVCompositionTrackSegment](../avcompositiontracksegment.md) associated with the track time.

## See Also

### Accessing track segments

- [segments](segments.md): The time mappings from the track’s media samples to its timeline.

# segmentForTrackTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a segment whose target time range contains, or is closest to, the specified track time.

## Declaration

```objectivec
- (AVCompositionTrackSegment *) segmentForTrackTime:(CMTime) trackTime;
```

## Parameters

- `trackTime`: The track time of the segment to return.

<a id="return-value"></a>

## Return Value

The [AVCompositionTrackSegment](../avcompositiontracksegment.md) associated with the track time.

## See Also

### Accessing track segments

- [segments](segments.md): The time mappings from the track’s media samples to its timeline.
