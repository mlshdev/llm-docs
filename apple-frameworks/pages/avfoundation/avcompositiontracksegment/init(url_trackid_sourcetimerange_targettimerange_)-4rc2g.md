> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment/init(url:trackid:sourcetimerange:targettimerange:)-4rc2g](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/init(url:trackid:sourcetimerange:targettimerange:)-4rc2g)

# init(url:trackID:sourceTimeRange:targetTimeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an object that presents a segment of a media file that the specified URL references.

## Declaration

```swift
init(url URL: URL, trackID: CMPersistentTrackID, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange)
```

## Parameters

- `URL`: A URL of the source media file.
- `trackID`: The identifier of the track whose media this segment presents.
- `sourceTimeRange`: The time range of the track whose media this segment presents.
- `targetTimeRange`: The time range of the composition track to present the segment’s media.

## See Also

### Creating a segment

- [init(timeRange:)](init%28timerange_%29.md): Creates an object that presents an empty composition track segment.

# initWithURL:trackID:sourceTimeRange:targetTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an object that presents a segment of a media file that the specified URL references.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL trackID:(CMPersistentTrackID) trackID sourceTimeRange:(CMTimeRange) sourceTimeRange targetTimeRange:(CMTimeRange) targetTimeRange;
```

## Parameters

- `URL`: A URL of the source media file.
- `trackID`: The identifier of the track whose media this segment presents.
- `sourceTimeRange`: The time range of the track whose media this segment presents.
- `targetTimeRange`: The time range of the composition track to present the segment’s media.

## See Also

### Creating a segment

- [compositionTrackSegmentWithTimeRange:](compositiontracksegmentwithtimerange_.md): Returns a new object that presents an empty composition track segment.
- [initWithTimeRange:](init%28timerange_%29.md): Creates an object that presents an empty composition track segment.
- [compositionTrackSegmentWithURL:trackID:sourceTimeRange:targetTimeRange:](compositiontracksegmentwithurl_trackid_sourcetimerange_targettimerange_.md): Returns a new an object that presents a segment of a media file that the specified URL references.
