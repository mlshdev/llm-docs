> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagedelegate/image:didloadrepresentationheader:](https://developer.apple.com/documentation/appkit/nsimagedelegate/image:didloadrepresentationheader:)

# image:didLoadRepresentationHeader:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Tells the delegate that enough data has been read to determine the size of the image.

## Declaration

```objectivec
- (void) image:(NSImage *) image didLoadRepresentationHeader:(NSImageRep *) rep;
```

## Parameters

- `image`: The image object whose contents are being loaded.
- `rep`: The image representation object that is receiving and processing the image data.

<a id="Discussion"></a>

## Discussion

By the time this method is called, the `NSBitmapImageRep` object specified in the `rep` parameter is valid and has allocated the memory needed to store the bitmap. The bitmap itself is filled with the image’s background color. This method is optional; incremental loading will continue if the delegate does not implement it.

## See Also

### Managing Incremental Loads

- [image:didLoadPartOfRepresentation:withValidRows:](image_didloadpartofrepresentation_withvalidrows_.md): Deprecated. Tells the delegate that part of the incrementally loaded image data is available.
- [image:didLoadRepresentation:withStatus:](image_didloadrepresentation_withstatus_.md): Deprecated. Tells the delegate that an incrementally loaded image has been loaded and decompressed as completely as is possible.
- [image:willLoadRepresentation:](image_willloadrepresentation_.md): Deprecated. Tells the delegate that the image object is about to access its underlying bitmap data.
- [NSImageLoadStatus](../nsimage/loadstatus.md): Status values for incremental image loading.
