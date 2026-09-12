> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/init(imageprovider:size:_:format:colorspace:options:)](https://developer.apple.com/documentation/coreimage/ciimage/init(imageprovider:size:_:format:colorspace:options:))

# init(imageProvider:size:\_:format:colorSpace:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes an image object based on pixels from an image provider object.

## Declaration

```swift
init(imageProvider provider: Any, size width: Int, _ height: Int, format: CIFormat, colorSpace: CGColorSpace?, options: [CIImageOption : Any]? = nil)
```

## Parameters

- `provider`: An object that implements the `CIImageProvider` protocol.
- `width`: The width of the image.
- `height`: The height of the image.
- `format`: The [CIFormat](../ciformat.md) of the provided pixels.
- `colorSpace`: The color space that the image is defined in. If `nil`, then the pixels will not be is not color matched to the Core Image working color space.
- `options`: A dictionary that contains various [CIImageOption](../ciimageoption.md) keys that affect the resulting [CIImage](../ciimage.md).
  The option [providerTileSize](../ciimageoption/providertilesize.md) controls if and how the provider object is called in tiles. The option [providerUserInfo](../ciimageoption/provideruserinfo.md) allows additional state to be passed to the provider object.

<a id="return-value"></a>

## Return Value

 An initialized [CIImage](../ciimage.md) object based on the data provider.

<a id="discussion"></a>

## Discussion

Core Image retains the provider object until the image is deallocated. The image provider object will not be called until the image is rendered.

## See Also

### Creating an Image

- [empty()](empty%28%29.md): Creates and returns an empty image object.
- [init(image:)](init%28image_%29.md): Initializes an image object with the specified UIKit image object.
- [init(image:options:)](init%28image_options_%29.md): Initializes an image object with the specified UIKit image object, using the specified options.
- [init(contentsOf:)](init%28contentsof_%29.md): Initializes an image object by reading an image from a URL.
- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Initializes an image object by reading an image from a URL, using the specified options.
- [init(cgImage:)](init%28cgimage_%29-2kvvb.md): Initializes an image object with a Quartz 2D image.
- [init(cgImage:options:)](init%28cgimage_options_%29-8663h.md): Initializes an image object with a Quartz 2D image, using the specified options.
- [init(cgImageSource:index:options:)](init%28cgimagesource_index_options_%29-e2bz.md)
- [init(data:)](init%28data_%29.md): Initializes an image object with the supplied image data.
- [init(data:options:)](init%28data_options_%29.md): Initializes an image object with the supplied image data, using the specified options.
- [init(bitmapData:bytesPerRow:size:format:colorSpace:)](init%28bitmapdata_bytesperrow_size_format_colorspace_%29.md): Initializes an image object with bitmap data.
- [init(bitmapImageRep:)](init%28bitmapimagerep_%29.md): Initializes an image object with the specified bitmap image representation.
- [init(depthData:)](init%28depthdata_%29.md)
- [init(depthData:options:)](init%28depthdata_options_%29.md)
- [init(portaitEffectsMatte:)](init%28portaiteffectsmatte_%29.md)

# initWithImageProvider:size::format:colorSpace:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes an image object based on pixels from an image provider object.

## Declaration

```objectivec
- (instancetype) initWithImageProvider:(id) provider size:(size_t) width :(size_t) height format:(CIFormat) format colorSpace:(CGColorSpaceRef) colorSpace options:(NSDictionary<NSString *,id> *) options;
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

 An initialized [CIImage](../ciimage.md) object based on the data provider.

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
