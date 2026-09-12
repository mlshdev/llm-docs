> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/init(cvimagebuffer:)-7wmzq](https://developer.apple.com/documentation/coreimage/ciimage/init(cvimagebuffer:)-7wmzq)

# init(cvImageBuffer:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes an image object from the contents of a Core Video image buffer.

## Declaration

```swift
init(cvImageBuffer imageBuffer: CVImageBuffer)
```

## Parameters

- `imageBuffer`: A  `CVImageBuffer` object in a supported pixel format constant. For more information, see [Core Video](../../corevideo.md).

<a id="return-value"></a>

## Return Value

The initialized image object.

<a id="Discussion"></a>

## Discussion

The `imageBuffer` parameter must be in one of the following formats:

- [kCVPixelFormatType_32ARGB](../../corevideo/kcvpixelformattype_32argb.md)
- [kCVPixelFormatType_422YpCbCr8](../../corevideo/kcvpixelformattype_422ypcbcr8.md)
- [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md)

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
- [init(imageProvider:size:\_:format:colorSpace:options:)](init%28imageprovider_size___format_colorspace_options_%29.md): Initializes an image object based on pixels from an image provider object.
- [init(depthData:)](init%28depthdata_%29.md)
- [init(depthData:options:)](init%28depthdata_options_%29.md)

# initWithCVImageBuffer: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes an image object from the contents of a Core Video image buffer.

## Declaration

```objectivec
- (instancetype) initWithCVImageBuffer:(CVImageBufferRef) imageBuffer;
```

## Parameters

- `imageBuffer`: A  `CVImageBuffer` object in a supported pixel format constant. For more information, see [Core Video](../../corevideo.md).

<a id="return-value"></a>

## Return Value

The initialized image object.

<a id="Discussion"></a>

## Discussion

The `imageBuffer` parameter must be in one of the following formats:

- [kCVPixelFormatType_32ARGB](../../corevideo/kcvpixelformattype_32argb.md)
- [kCVPixelFormatType_422YpCbCr8](../../corevideo/kcvpixelformattype_422ypcbcr8.md)
- [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md)

## See Also

### Related Documentation

- [imageWithCVImageBuffer:](imagewithcvimagebuffer_.md): Creates and returns an image object from the contents of `CVImageBuffer` object.

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
