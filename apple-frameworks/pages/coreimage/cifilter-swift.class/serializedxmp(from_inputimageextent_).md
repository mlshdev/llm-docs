> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/serializedxmp(from:inputimageextent:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/serializedxmp(from:inputimageextent:))

# serializedXMP(from:inputImageExtent:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 17.0) · iPadOS 6.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.9+ (deprecated in 14.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Serializes filter parameters into XMP form that is suitable for embedding in an image.

## Declaration

```swift
class func serializedXMP(from filters: [CIFilter], inputImageExtent extent: CGRect) -> Data?
```

## Parameters

- `filters`: The array of filters to serialize. See Discussion for the filters that can be serialized.
- `extent`: The extent of the input image to the filter.

<a id="Discussion"></a>

## Discussion

At this time the only filters classes that can be serialized using this method are, CIAffineTransform, CICrop, and the filters returned by the [CIImage](../ciimage.md) methods [autoAdjustmentFilters()](../ciimage/autoadjustmentfilters%28%29.md) and [autoAdjustmentFilters(options:)](../ciimage/autoadjustmentfilters%28options_%29.md). The parameters of other filter classes will not be serialized.

## See Also

### Deprecated

- [init(CVPixelBuffer:properties:options:)](init%28cvpixelbuffer_properties_options_%29-7qpsv.md): Deprecated. Creates a filter from a Core Video pixel buffer.
- [init(imageData:options:)](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [init(imageURL:options:)](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [filterArray(fromSerializedXMP:inputImageExtent:error:)](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels()](supportedrawcameramodels%28%29.md): Deprecated.

# serializedXMPFromFilters:inputImageExtent: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 17.0) · iPadOS 6.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.9+ (deprecated in 14.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Serializes filter parameters into XMP form that is suitable for embedding in an image.

## Declaration

```objectivec
+ (NSData *) serializedXMPFromFilters:(NSArray<CIFilter *> *) filters inputImageExtent:(CGRect) extent;
```

## Parameters

- `filters`: The array of filters to serialize. See Discussion for the filters that can be serialized.
- `extent`: The extent of the input image to the filter.

<a id="Discussion"></a>

## Discussion

At this time the only filters classes that can be serialized using this method are, CIAffineTransform, CICrop, and the filters returned by the [CIImage](../ciimage.md) methods [autoAdjustmentFilters](../ciimage/autoadjustmentfilters%28%29.md) and [autoAdjustmentFiltersWithOptions:](../ciimage/autoadjustmentfilters%28options_%29.md). The parameters of other filter classes will not be serialized.

## See Also

### Deprecated

- [filterWithImageData:options:](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [filterWithImageURL:options:](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [filterArrayFromSerializedXMP:inputImageExtent:error:](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels](supportedrawcameramodels%28%29.md): Deprecated.
