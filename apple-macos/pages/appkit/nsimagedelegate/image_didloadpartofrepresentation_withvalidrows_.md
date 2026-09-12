> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagedelegate/image:didloadpartofrepresentation:withvalidrows:](https://developer.apple.com/documentation/appkit/nsimagedelegate/image:didloadpartofrepresentation:withvalidrows:)

# image:didLoadPartOfRepresentation:withValidRows:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Tells the delegate that part of the incrementally loaded image data is available.

## Declaration

```objectivec
- (void) image:(NSImage *) image didLoadPartOfRepresentation:(NSImageRep *) rep withValidRows:(NSInteger) rows;
```

## Parameters

- `image`: The image object whose contents are being loaded.
- `rep`: The image representation object that is receiving and processing the image data.
- `rows`: The number of rows of data that have been decompressed.

<a id="Discussion"></a>

## Discussion

This method is optional; incremental loading will continue if the delegate does not implement it.

## See Also

### Managing Incremental Loads

- [image:didLoadRepresentation:withStatus:](image_didloadrepresentation_withstatus_.md): Deprecated. Tells the delegate that an incrementally loaded image has been loaded and decompressed as completely as is possible.
- [image:didLoadRepresentationHeader:](image_didloadrepresentationheader_.md): Deprecated. Tells the delegate that enough data has been read to determine the size of the image.
- [image:willLoadRepresentation:](image_willloadrepresentation_.md): Deprecated. Tells the delegate that the image object is about to access its underlying bitmap data.
- [NSImageLoadStatus](../nsimage/loadstatus.md): Status values for incremental image loading.
