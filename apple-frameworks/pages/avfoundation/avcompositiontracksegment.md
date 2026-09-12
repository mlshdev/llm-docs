> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontracksegment](https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment)

# AVCompositionTrackSegment (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A track segment that maps a time from the source media track to the composition track.

## Declaration

```swift
class AVCompositionTrackSegment
```

<a id="overview"></a>

## Overview

You typically use this class to save a low-level representation of a composition.

## Topics

### Creating a segment

- [init(timeRange:)](avcompositiontracksegment/init%28timerange_%29.md): Creates an object that presents an empty composition track segment.
- [init(url:trackID:sourceTimeRange:targetTimeRange:)](avcompositiontracksegment/init%28url_trackid_sourcetimerange_targettimerange_%29-4rc2g.md): Creates an object that presents a segment of a media file that the specified URL references.

### Accessing segment properties

- [sourceURL](avcompositiontracksegment/sourceurl.md): A URL of the container file whose media this track segment presents.
- [sourceTrackID](avcompositiontracksegment/sourcetrackid.md): An identifier of a track in the container file whose media this track segment presents.
- [isEmpty](avcompositiontracksegment/isempty.md): A Boolean value that indicates whether the segment is empty.

### Initializers

- [init(URL:trackID:sourceTimeRange:targetTimeRange:)](avcompositiontracksegment/init%28url_trackid_sourcetimerange_targettimerange_%29-9shbx.md)
- [init(URL:trackID:sourceTimeRange:targetTimeRange:)](avcompositiontracksegment/init%28url_trackid_sourcetimerange_targettimerange_%29-qoz.md)

## Relationships

### Inherits From

- [AVAssetTrackSegment](avassettracksegment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compositions

- [AVComposition](avcomposition.md): An object that combines and arranges media from multiple assets into a single composite asset that you can play or process.
- [AVCompositionTrack](avcompositiontrack.md): A track in a composition that presents media of a uniform type.

# AVCompositionTrackSegment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A track segment that maps a time from the source media track to the composition track.

## Declaration

```objectivec
@interface AVCompositionTrackSegment : AVAssetTrackSegment
```

<a id="overview"></a>

## Overview

You typically use this class to save a low-level representation of a composition.

## Topics

### Creating a segment

- [compositionTrackSegmentWithTimeRange:](avcompositiontracksegment/compositiontracksegmentwithtimerange_.md): Returns a new object that presents an empty composition track segment.
- [initWithTimeRange:](avcompositiontracksegment/init%28timerange_%29.md): Creates an object that presents an empty composition track segment.
- [compositionTrackSegmentWithURL:trackID:sourceTimeRange:targetTimeRange:](avcompositiontracksegment/compositiontracksegmentwithurl_trackid_sourcetimerange_targettimerange_.md): Returns a new an object that presents a segment of a media file that the specified URL references.
- [initWithURL:trackID:sourceTimeRange:targetTimeRange:](avcompositiontracksegment/init%28url_trackid_sourcetimerange_targettimerange_%29-4rc2g.md): Creates an object that presents a segment of a media file that the specified URL references.

### Accessing segment properties

- [sourceURL](avcompositiontracksegment/sourceurl.md): A URL of the container file whose media this track segment presents.
- [sourceTrackID](avcompositiontracksegment/sourcetrackid.md): An identifier of a track in the container file whose media this track segment presents.
- [empty](avcompositiontracksegment/isempty.md): A Boolean value that indicates whether the segment is empty.

## Relationships

### Inherits From

- [AVAssetTrackSegment](avassettracksegment.md)

## See Also

### Compositions

- [AVComposition](avcomposition.md): An object that combines and arranges media from multiple assets into a single composite asset that you can play or process.
- [AVCompositionTrack](avcompositiontrack.md): A track in a composition that presents media of a uniform type.
