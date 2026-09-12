> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdaterangemetadatagroup](https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup)

# AVDateRangeMetadataGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of metadata items that are valid for use within a specific date range.

## Declaration

```swift
class AVDateRangeMetadataGroup
```

## Topics

### Creating a date range group

- [init(items:start:end:)](avdaterangemetadatagroup/init%28items_start_end_%29.md): Initializes an instance of `AVDateRangeMetadataGroup` with a collection of metadata items.

### Accessing the metadata

- [items](avdaterangemetadatagroup/items.md): An array of associated metadata items.

### Accessing the date range

- [startDate](avdaterangemetadatagroup/startdate.md): The start date for the metadata date range group.
- [endDate](avdaterangemetadatagroup/enddate.md): The end date for the metadata date range group.

### Initializers

- [init(items:startDate:endDate:)](avdaterangemetadatagroup/init%28items_startdate_enddate_%29.md)

## Relationships

### Inherits From

- [AVMetadataGroup](avmetadatagroup.md)

### Inherited By

- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

# AVDateRangeMetadataGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of metadata items that are valid for use within a specific date range.

## Declaration

```objectivec
@interface AVDateRangeMetadataGroup : AVMetadataGroup
```

## Topics

### Creating a date range group

- [initWithItems:startDate:endDate:](avdaterangemetadatagroup/init%28items_start_end_%29.md): Initializes an instance of `AVDateRangeMetadataGroup` with a collection of metadata items.

### Accessing the metadata

- [items](avdaterangemetadatagroup/items.md): An array of associated metadata items.

### Accessing the date range

- [startDate](avdaterangemetadatagroup/startdate.md): The start date for the metadata date range group.
- [endDate](avdaterangemetadatagroup/enddate.md): The end date for the metadata date range group.

## Relationships

### Inherits From

- [AVMetadataGroup](avmetadatagroup.md)

### Inherited By

- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.
