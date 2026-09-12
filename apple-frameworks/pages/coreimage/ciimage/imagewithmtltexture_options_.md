> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/imagewithmtltexture:options:](https://developer.apple.com/documentation/coreimage/ciimage/imagewithmtltexture:options:)

# imageWithMTLTexture:options:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an image object with data supplied by a Metal texture.

## Declaration

```objectivec
+ (CIImage *) imageWithMTLTexture:(id<MTLTexture>) texture options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `texture`: The Metal texture from which to use image data.
- `options`: A dictionary specifying image options. (See `Image Dictionary Keys`.)

<a id="return-value"></a>

## Return Value

An image object initialized with the texture data.

<a id="Discussion"></a>

## Discussion

To also render using Metal, use this image with a Metal-based [CIContext](../cicontext.md) object created with the [contextWithMTLDevice:](../cicontext/init%28mtldevice_%29-swey.md) method, and call the [render:toMTLTexture:commandBuffer:bounds:colorSpace:](../cicontext/render%28__to_commandbuffer_bounds_colorspace_%29.md) method to create an output image in another Metal texture object.

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
