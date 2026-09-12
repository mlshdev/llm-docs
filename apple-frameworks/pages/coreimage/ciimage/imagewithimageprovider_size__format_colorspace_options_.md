> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/imagewithimageprovider:size::format:colorspace:options:](https://developer.apple.com/documentation/coreimage/ciimage/imagewithimageprovider:size::format:colorspace:options:)

# imageWithImageProvider:size::format:colorSpace:options:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Create an image object based on pixels from an image provider object.

## Declaration

```objectivec
+ (CIImage *) imageWithImageProvider:(id) provider size:(size_t) width :(size_t) height format:(CIFormat) format colorSpace:(CGColorSpaceRef) colorSpace options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `provider`: An object that implements the `CIImageProvider` protocol.
- `width`: The width of the image.
- `height`: The height of the image.
- `format`: The [CIFormat](../ciformat.md) of the provided pixels.
- `colorSpace`: The color space that the image is defined in. If `nil`, then the pixels will not be is not color matched to the Core Image working color space.
- `options`: A dictionary that contains various [CIImageOption](../ciimageoption.md) keys that affect the resulting [CIImage](../ciimage.md).
  The option [kCIImageProviderTileSize](../ciimageoption/providertilesize.md) controls if and how the provider object is called in tiles. The option [kCIImageProviderUserInfo](../ciimageoption/provideruserinfo.md) allows additional state to be passed to the provider object.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) object based on the data provider.

<a id="discussion"></a>

## Discussion

Core Image retains the provider object until the image is deallocated. The image provider object will not be called until the image is rendered.

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
