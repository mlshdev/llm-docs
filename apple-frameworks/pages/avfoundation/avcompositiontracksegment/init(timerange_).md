> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment/init(timerange:)](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/init(timerange:))

# init(timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an object that presents an empty composition track segment.

## Declaration

```swift
init(timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range of the empty track segment.

## See Also

### Creating a segment

- [init(url:trackID:sourceTimeRange:targetTimeRange:)](init%28url_trackid_sourcetimerange_targettimerange_%29-4rc2g.md): Creates an object that presents a segment of a media file that the specified URL references.

# initWithTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an object that presents an empty composition track segment.

## Declaration

```objectivec
- (instancetype) initWithTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range of the empty track segment.

## See Also

### Creating a segment

- [compositionTrackSegmentWithTimeRange:](compositiontracksegmentwithtimerange_.md): Returns a new object that presents an empty composition track segment.
- [compositionTrackSegmentWithURL:trackID:sourceTimeRange:targetTimeRange:](compositiontracksegmentwithurl_trackid_sourcetimerange_targettimerange_.md): Returns a new an object that presents a segment of a media file that the specified URL references.
- [initWithURL:trackID:sourceTimeRange:targetTimeRange:](init%28url_trackid_sourcetimerange_targettimerange_%29-4rc2g.md): Creates an object that presents a segment of a media file that the specified URL references.
