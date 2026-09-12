> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatagroup](https://developer.apple.com/documentation/avfoundation/avmetadatagroup)

# AVMetadataGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of metadata items associated with a timeline segment.

## Declaration

```swift
class AVMetadataGroup
```

## Topics

### Inspecting the metadata group

- [items](avmetadatagroup/items.md): The array of metadata items associated with the metadata group.
- [uniqueID](avmetadatagroup/uniqueid.md): The unique identifier for the metadata group.
- [classifyingLabel](avmetadatagroup/classifyinglabel.md): The classifying label associated with the metadata group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md)
- [AVTimedMetadataGroup](avtimedmetadatagroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

# AVMetadataGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of metadata items associated with a timeline segment.

## Declaration

```objectivec
@interface AVMetadataGroup : NSObject
```

## Topics

### Inspecting the metadata group

- [items](avmetadatagroup/items.md): The array of metadata items associated with the metadata group.
- [uniqueID](avmetadatagroup/uniqueid.md): The unique identifier for the metadata group.
- [classifyingLabel](avmetadatagroup/classifyinglabel.md): The classifying label associated with the metadata group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md)
- [AVTimedMetadataGroup](avtimedmetadatagroup.md)

## See Also

### Timed metadata

- [Presenting chapter markers](presenting-chapter-markers.md): Add chapter markers to enable users to quickly navigate your content.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.
