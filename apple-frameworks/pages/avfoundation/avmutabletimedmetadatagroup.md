> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutabletimedmetadatagroup](https://developer.apple.com/documentation/avfoundation/avmutabletimedmetadatagroup)

# AVMutableTimedMetadataGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mutable collection of metadata items that are valid for use during a specific time range.

## Declaration

```swift
class AVMutableTimedMetadataGroup
```

## Topics

### Configuring the group

- [items](avmutabletimedmetadatagroup/items.md): An array of metadata items in the timed metadata group.
- [timeRange](avmutabletimedmetadatagroup/timerange.md): The time range of the timed metadata.

## Relationships

### Inherits From

- [AVTimedMetadataGroup](avtimedmetadatagroup.md)

### Conforms To

- [AVAssetReaderOutput.SupportedPayload](avassetreaderoutput/supportedpayload.md)
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
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

# AVMutableTimedMetadataGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A mutable collection of metadata items that are valid for use during a specific time range.

## Declaration

```objectivec
@interface AVMutableTimedMetadataGroup : AVTimedMetadataGroup
```

## Topics

### Configuring the group

- [items](avmutabletimedmetadatagroup/items.md): An array of metadata items in the timed metadata group.
- [timeRange](avmutabletimedmetadatagroup/timerange.md): The time range of the timed metadata.

## Relationships

### Inherits From

- [AVTimedMetadataGroup](avtimedmetadatagroup.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.
