> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment/compositiontracksegmentwithtimerange:](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/compositiontracksegmentwithtimerange:)

# compositionTrackSegmentWithTimeRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new object that presents an empty composition track segment.

## Declaration

```objectivec
+ (instancetype) compositionTrackSegmentWithTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range of the empty composition track segment.

<a id="return-value"></a>

## Return Value

A new composition track segment.

## See Also

### Creating a segment

- [initWithTimeRange:](init%28timerange_%29.md): Creates an object that presents an empty composition track segment.
- [compositionTrackSegmentWithURL:trackID:sourceTimeRange:targetTimeRange:](compositiontracksegmentwithurl_trackid_sourcetimerange_targettimerange_.md): Returns a new an object that presents a segment of a media file that the specified URL references.
- [initWithURL:trackID:sourceTimeRange:targetTimeRange:](init%28url_trackid_sourcetimerange_targettimerange_%29-4rc2g.md): Creates an object that presents a segment of a media file that the specified URL references.
