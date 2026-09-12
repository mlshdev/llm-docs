> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagedelegate/image:didloadrepresentation:withstatus:](https://developer.apple.com/documentation/appkit/nsimagedelegate/image:didloadrepresentation:withstatus:)

# image:didLoadRepresentation:withStatus:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Tells the delegate that an incrementally loaded image has been loaded and decompressed as completely as is possible.

## Declaration

```objectivec
- (void) image:(NSImage *) image didLoadRepresentation:(NSImageRep *) rep withStatus:(NSImageLoadStatus) status;
```

## Parameters

- `image`: The image object whose contents are being loaded.
- `rep`: The image representation object that loaded the image data.
- `status`: The status of the load operation. For a list of possible values, see [NSImageLoadStatus](../nsimage/loadstatus.md) in [NSImage](../nsimage.md).

<a id="Discussion"></a>

## Discussion

The delegate must implement this method if it wants to support the incremental loading of images. In that case, you must also set up the image object to be loaded lazily, by initializing it using the  [initByReferencingFile:](../nsimage/init%28byreferencingfile_%29.md) or [initByReferencingURL:](../nsimage/init%28byreferencing_%29.md) method.

If an error occurs during downloading or decompression, the `status` parameter is set to `NSImageLoadStatusInvalidData`, `NSImageLoadStatusUnexpectedEOF`, or `NSImageLoadStatusReadError`. If the download was cancelled, the `status` parameter is set to `NSImageLoadStatusCancelled`.

## See Also

### Managing Incremental Loads

- [image:didLoadPartOfRepresentation:withValidRows:](image_didloadpartofrepresentation_withvalidrows_.md): Deprecated. Tells the delegate that part of the incrementally loaded image data is available.
- [image:didLoadRepresentationHeader:](image_didloadrepresentationheader_.md): Deprecated. Tells the delegate that enough data has been read to determine the size of the image.
- [image:willLoadRepresentation:](image_willloadrepresentation_.md): Deprecated. Tells the delegate that the image object is about to access its underlying bitmap data.
- [NSImageLoadStatus](../nsimage/loadstatus.md): Status values for incremental image loading.
