> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/imagewithbitmapdata:bytesperrow:size:format:colorspace:](https://developer.apple.com/documentation/coreimage/ciimage/imagewithbitmapdata:bytesperrow:size:format:colorspace:)

# imageWithBitmapData:bytesPerRow:size:format:colorSpace:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Creates and returns an image object from bitmap data.

## Declaration

```objectivec
+ (CIImage *) imageWithBitmapData:(NSData *) data bytesPerRow:(size_t) bytesPerRow size:(CGSize) size format:(CIFormat) format colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `data`: The bitmap data for the image. This data must be premultiplied.
- `bytesPerRow`: The number of bytes per row.
- `size`: The dimensions of the image.
- `format`: The format and size of each pixel. You must supply a pixel format constant. See `Pixel Formats`.
- `colorSpace`: The color space that the image is defined in. If this value is `nil`, the image is not color matched. Pass `nil` for images that don’t contain color data (such as elevation maps, normal vector maps, and sampled function tables).

<a id="return-value"></a>

## Return Value

An image object.

## See Also

### Creating an Image

- [emptyImage](empty%28%29.md): Creates and returns an empty image object.
- [initWithImage:](init%28image_%29.md): Initializes an image object with the specified UIKit image object.
- [initWithImage:options:](init%28image_options_%29.md): Initializes an image object with the specified UIKit image object, using the specified options.
- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes an image object by reading an image from a URL.
- [imageWithContentsOfURL:](imagewithcontentsofurl_.md): Creates and returns an image object from the contents of a file.
- [initWithContentsOfURL:options:](init%28contentsof_options_%29.md): Initializes an image object by reading an image from a URL, using the specified options.
- [imageWithContentsOfURL:options:](imagewithcontentsofurl_options_.md): Creates and returns an image object from the contents of a file, using the specified options.
- [imageWithCGImage:](imagewithcgimage_.md): Creates and returns an image object from a Quartz 2D image.
- [initWithCGImage:](init%28cgimage_%29-2kvvb.md): Initializes an image object with a Quartz 2D image.
- [imageWithCGImage:options:](imagewithcgimage_options_.md): Creates and returns an image object from a Quartz 2D image using the specified options.
- [initWithCGImage:options:](init%28cgimage_options_%29-8663h.md): Initializes an image object with a Quartz 2D image, using the specified options.
- [imageWithCGImageSource:index:options:](imagewithcgimagesource_index_options_.md)
- [initWithCGImageSource:index:options:](init%28cgimagesource_index_options_%29-e2bz.md)
- [imageWithData:](imagewithdata_.md): Creates and returns an image object initialized with the supplied image data.
- [initWithData:](init%28data_%29.md): Initializes an image object with the supplied image data.
