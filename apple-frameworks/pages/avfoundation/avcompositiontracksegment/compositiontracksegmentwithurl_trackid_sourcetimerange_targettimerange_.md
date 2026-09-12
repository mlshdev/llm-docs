> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment/compositiontracksegmentwithurl:trackid:sourcetimerange:targettimerange:](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/compositiontracksegmentwithurl:trackid:sourcetimerange:targettimerange:)

# compositionTrackSegmentWithURL:trackID:sourceTimeRange:targetTimeRange:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new an object that presents a segment of a media file that the specified URL references.

## Declaration

```objectivec
+ (instancetype) compositionTrackSegmentWithURL:(NSURL *) URL trackID:(CMPersistentTrackID) trackID sourceTimeRange:(CMTimeRange) sourceTimeRange targetTimeRange:(CMTimeRange) targetTimeRange;
```

## Parameters

- `URL`: A URL of the source media file.
- `trackID`: The identifier of the track whose media this segment presents.
- `sourceTimeRange`: The time range of the track whose media this segment presents.
- `targetTimeRange`: The time range of the composition track to present the segment’s media.

<a id="return-value"></a>

## Return Value

A new composition track segment.

## See Also

### Creating a segment

- [compositionTrackSegmentWithTimeRange:](compositiontracksegmentwithtimerange_.md): Returns a new object that presents an empty composition track segment.
- [initWithTimeRange:](init%28timerange_%29.md): Creates an object that presents an empty composition track segment.
- [initWithURL:trackID:sourceTimeRange:targetTimeRange:](init%28url_trackid_sourcetimerange_targettimerange_%29-4rc2g.md): Creates an object that presents a segment of a media file that the specified URL references.
