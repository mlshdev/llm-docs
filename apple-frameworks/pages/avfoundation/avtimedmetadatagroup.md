> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtimedmetadatagroup](https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup)

# AVTimedMetadataGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A collection of metadata items that are valid for use during a specific time range.

## Declaration

```swift
class AVTimedMetadataGroup
```

## Mentioned In

- [Presenting chapter markers](presenting-chapter-markers.md)

<a id="overview"></a>

## Overview

For example, `AVTimedMetadataGroups` are used to represent chapters, optionally containing metadata items for chapter titles and chapter images.

## Topics

### Creating a timed metadata group

- [init(sampleBuffer:)](avtimedmetadatagroup/init%28samplebuffer_%29-6atlv.md): Creates a timed metadata group with a sample buffer.
- [init(items:timeRange:)](avtimedmetadatagroup/init%28items_timerange_%29.md): Creates a timed metadata group initialized with the given metadata items.
- [init(sampleBuffer:)](avtimedmetadatagroup/init%28samplebuffer_%29-bjuo.md): Deprecated.

### Accessing group attributes

- [items](avtimedmetadatagroup/items.md): An array of metadata items in the timed metadata group.
- [timeRange](avtimedmetadatagroup/timerange.md): The time range for the timed metadata.

### Creating a format description

- [copyFormatDescription()](avtimedmetadatagroup/copyformatdescription%28%29.md): Creates a format description based on the receiver’s items.

## Relationships

### Inherits From

- [AVMetadataGroup](avmetadatagroup.md)

### Inherited By

- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md)

### Conforms To

- [AVAssetReaderOutput.SupportedPayload](avassetreaderoutput/supportedpayload.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

# AVTimedMetadataGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A collection of metadata items that are valid for use during a specific time range.

## Declaration

```objectivec
@interface AVTimedMetadataGroup : AVMetadataGroup
```

## Mentioned In

- [Presenting chapter markers](presenting-chapter-markers.md)

<a id="overview"></a>

## Overview

For example, `AVTimedMetadataGroups` are used to represent chapters, optionally containing metadata items for chapter titles and chapter images.

## Topics

### Creating a timed metadata group

- [initWithItems:timeRange:](avtimedmetadatagroup/init%28items_timerange_%29.md): Creates a timed metadata group initialized with the given metadata items.
- [initWithSampleBuffer:](avtimedmetadatagroup/init%28samplebuffer_%29-bjuo.md): Deprecated.

### Accessing group attributes

- [items](avtimedmetadatagroup/items.md): An array of metadata items in the timed metadata group.
- [timeRange](avtimedmetadatagroup/timerange.md): The time range for the timed metadata.

### Creating a format description

- [copyFormatDescription](avtimedmetadatagroup/copyformatdescription%28%29.md): Creates a format description based on the receiver’s items.

## Relationships

### Inherits From

- [AVMetadataGroup](avmetadatagroup.md)

### Inherited By

- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.
