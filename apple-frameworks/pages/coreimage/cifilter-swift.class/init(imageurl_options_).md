> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/init(imageurl:options:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/init(imageurl:options:))

# init(imageURL:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a filter that allows the processing of RAW images.

> Use [init(imageURL:)](../cirawfilter/init%28imageurl_%29.md) instead.

## Declaration

```swift
init!(imageURL url: URL!, options: [CIRAWFilterOption : Any]! = [:])
```

## Parameters

- `url`: The location of a RAW image file.
- `options`: An options dictionary.  You can pass any of the keys defined in [RAW Image Options](../raw-image-options.md).

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object.

<a id="Discussion"></a>

## Discussion

The first step when working with RAW images in Core Image is to process the image using either [init(imageData:options:)](init%28imagedata_options_%29.md) or [init(imageURL:options:)](init%28imageurl_options_%29.md). These initializers create a [CIFilter](../cifilter-swift.class.md) object with an [outputImage](outputimage.md) which is a [CIImage](../ciimage.md) representation of the supplied RAW image.

The newly created filter object allows you fine control over the image processing that isn’t available when working with processed images such a JPEG. The following listing shows how to create a Core Image filter based on a URL named `imageURL`. The image is processed so that its neutral temperature is set to 2,000 Kelvin (giving a blue tint) and its baseline exposure doubled. Finally, a Core Image vignette filter is applied to the processed image in the same way it would be with any other source image:

```objc
let rawFilter = CIFilter(imageURL: imageURL, options: nil)
rawFilter?.setValue(2000,    
                    forKey: kCIInputNeutralTemperatureKey)
if let baselineExposure = rawFilter?.value(forKey: kCIInputBaselineExposureKey) as? NSNumber {    
    rawFilter?.setValue(baselineExposure.doubleValue * 2.5,                        forKey: kCIInputBaselineExposureKey)
}
let vignettedImage = rawFilter?.outputImage?.applyingFilter(    
    "CIVignette",    
    withInputParameters: [kCIInputIntensityKey: 5])
if let outputImage = vignettedImage {    
    imageView.image = UIImage(ciImage: outputImage)
}
```

> **Important**

>  Core Image doesn’t process the supplied RAW image until the filter’s [outputImage](outputimage.md) is rendered. For this reason, if you supply this initializer with a RAW image of an unsupported format, the filter object will be initialized but its [outputImage](outputimage.md) will be `nil`.

## See Also

### Deprecated

- [init(CVPixelBuffer:properties:options:)](init%28cvpixelbuffer_properties_options_%29-7qpsv.md): Deprecated. Creates a filter from a Core Video pixel buffer.
- [init(imageData:options:)](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMP(from:inputImageExtent:)](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArray(fromSerializedXMP:inputImageExtent:error:)](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels()](supportedrawcameramodels%28%29.md): Deprecated.

# filterWithImageURL:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a filter that allows the processing of RAW images.

> Use [filterWithImageURL:](../cirawfilter/init%28imageurl_%29.md) instead.

## Declaration

```objectivec
+ (CIFilter *) filterWithImageURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `url`: The location of a RAW image file.
- `options`: An options dictionary.  You can pass any of the keys defined in [RAW Image Options](../raw-image-options.md).

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object.

<a id="Discussion"></a>

## Discussion

The first step when working with RAW images in Core Image is to process the image using either [filterWithImageData:options:](init%28imagedata_options_%29.md) or [filterWithImageURL:options:](init%28imageurl_options_%29.md). These initializers create a [CIFilter](../cifilter-swift.class.md) object with an [outputImage](outputimage.md) which is a [CIImage](../ciimage.md) representation of the supplied RAW image.

The newly created filter object allows you fine control over the image processing that isn’t available when working with processed images such a JPEG. The following listing shows how to create a Core Image filter based on a URL named `imageURL`. The image is processed so that its neutral temperature is set to 2,000 Kelvin (giving a blue tint) and its baseline exposure doubled. Finally, a Core Image vignette filter is applied to the processed image in the same way it would be with any other source image:

```objc
let rawFilter = CIFilter(imageURL: imageURL, options: nil)
rawFilter?.setValue(2000,    
                    forKey: kCIInputNeutralTemperatureKey)
if let baselineExposure = rawFilter?.value(forKey: kCIInputBaselineExposureKey) as? NSNumber {    
    rawFilter?.setValue(baselineExposure.doubleValue * 2.5,                        forKey: kCIInputBaselineExposureKey)
}
let vignettedImage = rawFilter?.outputImage?.applyingFilter(    
    "CIVignette",    
    withInputParameters: [kCIInputIntensityKey: 5])
if let outputImage = vignettedImage {    
    imageView.image = UIImage(ciImage: outputImage)
}
```

> **Important**

>  Core Image doesn’t process the supplied RAW image until the filter’s [outputImage](outputimage.md) is rendered. For this reason, if you supply this initializer with a RAW image of an unsupported format, the filter object will be initialized but its [outputImage](outputimage.md) will be `nil`.

## See Also

### Deprecated

- [filterWithImageData:options:](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMPFromFilters:inputImageExtent:](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArrayFromSerializedXMP:inputImageExtent:error:](filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels](supportedrawcameramodels%28%29.md): Deprecated.
