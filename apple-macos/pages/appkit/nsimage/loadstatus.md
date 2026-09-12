> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/loadstatus](https://developer.apple.com/documentation/appkit/nsimage/loadstatus)

# NSImage.LoadStatus (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Status values for incremental image loading.

## Declaration

```swift
enum LoadStatus
```

## Topics

### Load Status Values

- [NSImage.LoadStatus.completed](loadstatus/completed.md): Enough data is available to completely decompress the image.
- [NSImage.LoadStatus.cancelled](loadstatus/cancelled.md): Image loading was canceled.
- [NSImage.LoadStatus.invalidData](loadstatus/invaliddata.md): An error occurred during image decompression.
- [NSImage.LoadStatus.unexpectedEOF](loadstatus/unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSImage.LoadStatus.readError](loadstatus/readerror.md): Not enough data was available for full decompression of the image.

### Initializers

- [init(rawValue:)](loadstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSImageLoadStatus (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Status values for incremental image loading.

## Declaration

```objectivec
enum NSImageLoadStatus : NSUInteger;
```

## Topics

### Load Status Values

- [NSImageLoadStatusCompleted](loadstatus/completed.md): Enough data is available to completely decompress the image.
- [NSImageLoadStatusCancelled](loadstatus/cancelled.md): Image loading was canceled.
- [NSImageLoadStatusInvalidData](loadstatus/invaliddata.md): An error occurred during image decompression.
- [NSImageLoadStatusUnexpectedEOF](loadstatus/unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSImageLoadStatusReadError](loadstatus/readerror.md): Not enough data was available for full decompression of the image.

## See Also

### Managing Incremental Loads

- [image:didLoadPartOfRepresentation:withValidRows:](../nsimagedelegate/image_didloadpartofrepresentation_withvalidrows_.md): Deprecated. Tells the delegate that part of the incrementally loaded image data is available.
- [image:didLoadRepresentation:withStatus:](../nsimagedelegate/image_didloadrepresentation_withstatus_.md): Deprecated. Tells the delegate that an incrementally loaded image has been loaded and decompressed as completely as is possible.
- [image:didLoadRepresentationHeader:](../nsimagedelegate/image_didloadrepresentationheader_.md): Deprecated. Tells the delegate that enough data has been read to determine the size of the image.
- [image:willLoadRepresentation:](../nsimagedelegate/image_willloadrepresentation_.md): Deprecated. Tells the delegate that the image object is about to access its underlying bitmap data.
