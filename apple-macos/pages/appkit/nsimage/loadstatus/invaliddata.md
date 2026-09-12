> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/loadstatus/invaliddata](https://developer.apple.com/documentation/appkit/nsimage/loadstatus/invaliddata)

# NSImage.LoadStatus.invalidData (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

An error occurred during image decompression.

## Declaration

```swift
case invalidData
```

<a id="Discussion"></a>

## Discussion

The image data is probably corrupt. The image contains the portions of the data that have already been successfully decompressed, if any.

## See Also

### Load Status Values

- [NSImage.LoadStatus.completed](completed.md): Enough data is available to completely decompress the image.
- [NSImage.LoadStatus.cancelled](cancelled.md): Image loading was canceled.
- [NSImage.LoadStatus.unexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSImage.LoadStatus.readError](readerror.md): Not enough data was available for full decompression of the image.

# NSImageLoadStatusInvalidData (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

An error occurred during image decompression.

## Declaration

```objectivec
NSImageLoadStatusInvalidData
```

<a id="Discussion"></a>

## Discussion

The image data is probably corrupt. The image contains the portions of the data that have already been successfully decompressed, if any.

## See Also

### Load Status Values

- [NSImageLoadStatusCompleted](completed.md): Enough data is available to completely decompress the image.
- [NSImageLoadStatusCancelled](cancelled.md): Image loading was canceled.
- [NSImageLoadStatusUnexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.
- [NSImageLoadStatusReadError](readerror.md): Not enough data was available for full decompression of the image.
