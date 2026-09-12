> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/init(cvpixelbuffer:properties:options:)-7qpsv](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/init(cvpixelbuffer:properties:options:)-7qpsv)

# init(CVPixelBuffer:properties:options:)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.12+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a filter from a Core Video pixel buffer.

> Use [init(cvPixelBuffer:properties:)](../cirawfilter/init%28cvpixelbuffer_properties_%29-6209q.md) instead.

## Declaration

```swift
init!(CVPixelBuffer pixelBuffer: CVPixelBuffer!, properties: [AnyHashable : Any]!, options: [CIRAWFilterOption : Any]! = [:])
```

## Parameters

- `pixelBuffer`: CVPixelBufferRef with one of the following RAW pixel format types:

  [kCVPixelFormatType_14Bayer_GRBG](../../corevideo/kcvpixelformattype_14bayer_grbg.md)

  [kCVPixelFormatType_14Bayer_RGGB](../../corevideo/kcvpixelformattype_14bayer_rggb.md)

  [kCVPixelFormatType_14Bayer_BGGR](../../corevideo/kcvpixelformattype_14bayer_bggr.md)

  [kCVPixelFormatType_14Bayer_GBRG](../../corevideo/kcvpixelformattype_14bayer_gbrg.md)
- `properties`: A properties dictionary. Defines the properties of the pixel buffer.
- `options`: An options dictionary.  You can pass any of the keys defined in [RAW Image Options](../raw-image-options.md).

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object.

<a id="Discussion"></a>

## Discussion

The first step when working with RAW images in Core Image is to process the image using either [init(imageData:options:)](init%28imagedata_options_%29.md) or [init(imageURL:options:)](init%28imageurl_options_%29.md). These initializers create a [CIFilter](../cifilter-swift.class.md) object with an [outputImage](outputimage.md) which is a [CIImage](../ciimage.md) representation of the supplied RAW image.

> **Important**

>  Core Image doesn’t process the supplied RAW image until the filter’s [outputImage](outputimage.md) is rendered. For this reason, if you supply this initializer with a RAW image of an unsupported format, the filter object will be initialized but its [outputImage](outputimage.md) will be nil.

## See Also

### Deprecated

- [init(imageData:options:)](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [init(imageURL:options:)](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMP(from:inputImageExtent:)](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArray(fromSerializedXMP:inputImageExtent:error:)](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels()](supportedrawcameramodels%28%29.md): Deprecated.
