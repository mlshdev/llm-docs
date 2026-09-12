> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(pixelbuffer:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(pixelbuffer:))

# init(pixelBuffer:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains an image from a pixel buffer.

## Declaration

```swift
convenience init(pixelBuffer value: CVPixelBuffer)
```

## Parameters

- `value`: A [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) (Swift) or [CVPixelBuffer](../../corevideo/cvpixelbuffer.md) (Objective-C) instance.

<a id="Discussion"></a>

## Discussion

[Core ML](../../coreml.md) supports different pixel format types depending on the model’s feature description. For information about `ImageFeatureType`, see [Core ML Format Reference](https://apple.github.io/coremltools/mlmodel/Format/FeatureTypes.html#imagefeaturetype). When the image feature’s color space is `GRAYSCALE`, use [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md); and when it’s `GRAYSCALE_FLOAT16`, use [kCVPixelFormatType_OneComponent16Half](../../corevideo/kcvpixelformattype_onecomponent16half.md); otherwise, use [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) when it’s set to `RGB` or `BGR`.

## See Also

### Creating image feature values

- [init(CGImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-2zg43.md): Creates a feature value that contains an image defined by a core graphics image and its size and pixel format.
- [init(CGImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28cgimage_orientation_pixelswide_pixelshigh_pixelformattype_options_%29-4nme0.md): Creates a feature value that contains an image defined by a core graphics image and its orientation, size, and pixel format.
- [init(CGImage:constraint:options:)](init%28cgimage_constraint_options_%29-1j00l.md): Creates a feature value that contains an image defined by a core graphics image and a constraint.
- [init(CGImage:orientation:constraint:options:)](init%28cgimage_orientation_constraint_options_%29-87vk0.md): Creates a feature value that contains an image defined by a core graphics image, an orientation, and a constraint.
- [init(imageAtURL:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28imageaturl_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s size and pixel format.
- [init(imageAtURL:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](init%28imageaturl_orientation_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s orientation, size, and pixel format.
- [init(imageAtURL:constraint:options:)](init%28imageaturl_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL and a constraint.
- [init(imageAtURL:orientation:constraint:options:)](init%28imageaturl_orientation_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL, an orientation, and a constraint.
- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [MLFeatureValue.ImageOption](imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.

# featureValueWithPixelBuffer: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a feature value that contains an image from a pixel buffer.

## Declaration

```objectivec
+ (instancetype) featureValueWithPixelBuffer:(CVPixelBufferRef) value;
```

## Parameters

- `value`: A [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) (Swift) or [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md) (Objective-C) instance.

<a id="Discussion"></a>

## Discussion

[Core ML](../../coreml.md) supports different pixel format types depending on the model’s feature description. For information about `ImageFeatureType`, see [Core ML Format Reference](https://apple.github.io/coremltools/mlmodel/Format/FeatureTypes.html#imagefeaturetype). When the image feature’s color space is `GRAYSCALE`, use [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md); and when it’s `GRAYSCALE_FLOAT16`, use [kCVPixelFormatType_OneComponent16Half](../../corevideo/kcvpixelformattype_onecomponent16half.md); otherwise, use [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) when it’s set to `RGB` or `BGR`.

## See Also

### Creating image feature values

- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [MLFeatureValueImageOption](imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.
