> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/loadstatus/readerror](https://developer.apple.com/documentation/appkit/nsimage/loadstatus/readerror)

# NSImage.LoadStatus.readError (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Not enough data was available for full decompression of the image.

## Declaration

```swift
case readError
```

<a id="Discussion"></a>

## Discussion

The image contains the portions of the data that have already been successfully decompressed, if any.

## See Also

### Load Status Values

- [NSImage.LoadStatus.completed](completed.md): Enough data is available to completely decompress the image.
- [NSImage.LoadStatus.cancelled](cancelled.md): Image loading was canceled.
- [NSImage.LoadStatus.invalidData](invaliddata.md): An error occurred during image decompression.
- [NSImage.LoadStatus.unexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.

# NSImageLoadStatusReadError (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Not enough data was available for full decompression of the image.

## Declaration

```objectivec
NSImageLoadStatusReadError
```

<a id="Discussion"></a>

## Discussion

The image contains the portions of the data that have already been successfully decompressed, if any.

## See Also

### Load Status Values

- [NSImageLoadStatusCompleted](completed.md): Enough data is available to completely decompress the image.
- [NSImageLoadStatusCancelled](cancelled.md): Image loading was canceled.
- [NSImageLoadStatusInvalidData](invaliddata.md): An error occurred during image decompression.
- [NSImageLoadStatusUnexpectedEOF](unexpectedeof.md): Not enough data was available to fully decompress the image.
