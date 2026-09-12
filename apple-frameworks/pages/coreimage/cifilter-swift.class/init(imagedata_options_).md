> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/init(imagedata:options:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/init(imagedata:options:))

# init(imageData:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a filter that allows the processing of RAW images.

> Use [init(imageData:identifierHint:)](../cirawfilter/init%28imagedata_identifierhint_%29.md) instead.

## Declaration

```swift
init!(imageData data: Data!, options: [CIRAWFilterOption : Any]! = [:])
```

## Parameters

- `data`: The RAW image data to initialize the object with.
- `options`: An options dictionary.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object.

<a id="Discussion"></a>

## Discussion

You can pass any of the keys defined in [RAW Image Options](../raw-image-options.md) along with the appropriate value in `options`. You should provide a source type identifier hint key ([kCGImageSourceTypeIdentifierHint](../../imageio/kcgimagesourcetypeidentifierhint.md)) and the appropriate source type value to help the decoder determine the file type. Otherwise it’s possible to obtain incorrect results.

The first step when working with RAW images in Core Image is to process the image using either [init(imageData:options:)](init%28imagedata_options_%29.md) or [init(imageURL:options:)](init%28imageurl_options_%29.md). These initializers create a [CIFilter](../cifilter-swift.class.md) object with an [outputImage](outputimage.md) which is a [CIImage](../ciimage.md) representation of the supplied RAW image. You can process After calling this method, the [CIFilter](../cifilter-swift.class.md) object returns a [CIImage](../ciimage.md) object that’s properly processed similar to images retrieved using the `outputImage` key.

> **Important**

>  Core Image doesn’t process the supplied RAW image until the filter’s [outputImage](outputimage.md) is rendered. For this reason, if you supply this initializer with a RAW image of an unsupported format, the filter object will be initialized but its [outputImage](outputimage.md) will be `nil`.

## See Also

### Deprecated

- [init(CVPixelBuffer:properties:options:)](init%28cvpixelbuffer_properties_options_%29-7qpsv.md): Deprecated. Creates a filter from a Core Video pixel buffer.
- [init(imageURL:options:)](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMP(from:inputImageExtent:)](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArray(fromSerializedXMP:inputImageExtent:error:)](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels()](supportedrawcameramodels%28%29.md): Deprecated.

# filterWithImageData:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a filter that allows the processing of RAW images.

> Use [filterWithImageData:identifierHint:](../cirawfilter/init%28imagedata_identifierhint_%29.md) instead.

## Declaration

```objectivec
+ (CIFilter *) filterWithImageData:(NSData *) data options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `data`: The RAW image data to initialize the object with.
- `options`: An options dictionary.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object.

<a id="Discussion"></a>

## Discussion

You can pass any of the keys defined in [RAW Image Options](../raw-image-options.md) along with the appropriate value in `options`. You should provide a source type identifier hint key ([kCGImageSourceTypeIdentifierHint](../../imageio/kcgimagesourcetypeidentifierhint.md)) and the appropriate source type value to help the decoder determine the file type. Otherwise it’s possible to obtain incorrect results.

The first step when working with RAW images in Core Image is to process the image using either [filterWithImageData:options:](init%28imagedata_options_%29.md) or [filterWithImageURL:options:](init%28imageurl_options_%29.md). These initializers create a [CIFilter](../cifilter-swift.class.md) object with an [outputImage](outputimage.md) which is a [CIImage](../ciimage.md) representation of the supplied RAW image. You can process After calling this method, the [CIFilter](../cifilter-swift.class.md) object returns a [CIImage](../ciimage.md) object that’s properly processed similar to images retrieved using the `outputImage` key.

> **Important**

>  Core Image doesn’t process the supplied RAW image until the filter’s [outputImage](outputimage.md) is rendered. For this reason, if you supply this initializer with a RAW image of an unsupported format, the filter object will be initialized but its [outputImage](outputimage.md) will be `nil`.

## See Also

### Deprecated

- [filterWithImageURL:options:](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMPFromFilters:inputImageExtent:](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArrayFromSerializedXMP:inputImageExtent:error:](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels](supportedrawcameramodels%28%29.md): Deprecated.
