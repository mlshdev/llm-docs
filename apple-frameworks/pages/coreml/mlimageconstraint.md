> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlimageconstraint](https://developer.apple.com/documentation/coreml/mlimageconstraint)

# MLImageConstraint (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The width, height, and pixel format constraints of an image feature.

## Declaration

```swift
class MLImageConstraint
```

<a id="overview"></a>

## Overview

In CoreML, an *image* is a collection of pixels represented by [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md) (Swift) or [CVPixelBuffer](../corevideo/cvpixelbuffer.md) (Objective-C). An *image feature* is a model input or output that accepts or produces, respectively, an image bundled in an [MLFeatureValue](mlfeaturevalue.md). `MLImageConstraint` defines the image feature’s limitations for the images within an `MLFeatureValue`.

If a model has an image feature for an input or output, the model author uses an *image feature description* by creating an [MLFeatureDescription](mlfeaturedescription.md). The feature description for an image input or output has:

- Its [type](mlfeaturedescription/type.md) property set to [MLFeatureType.image](mlfeaturetype/image.md)
- Its [imageConstraint](mlfeaturedescription/imageconstraint.md) property set to an [MLImageConstraint](mlimageconstraint.md) instance configured to the image feature’s size and format

Image features that support additional image sizes provide a range of sizes, or a list of discrete sizes, in their image constraint’s [sizeConstraint](mlimageconstraint/sizeconstraint.md) property.

## Topics

### Accessing the constraints

- [pixelsWide](mlimageconstraint/pixelswide.md): The model’s default width for an image feature.
- [pixelsHigh](mlimageconstraint/pixelshigh.md): The model’s default height for an image feature.
- [pixelFormatType](mlimageconstraint/pixelformattype.md): The model’s pixel format for an image feature.

### Inspecting acceptable sizes

- [sizeConstraint](mlimageconstraint/sizeconstraint.md): Additional sizes this image feature supports.
- [MLImageSizeConstraint](mlimagesizeconstraint.md): A list or range of sizes that augment an image constraint’s default size.

### Initializers

- [init(coder:)](mlimageconstraint/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating image feature values

- [init(pixelBuffer:)](mlfeaturevalue/init%28pixelbuffer_%29.md): Creates a feature value that contains an image from a pixel buffer.
- [init(CGImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-2zg43.md): Creates a feature value that contains an image defined by a core graphics image and its size and pixel format.
- [init(CGImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28cgimage_orientation_pixelswide_pixelshigh_pixelformattype_options_%29-4nme0.md): Creates a feature value that contains an image defined by a core graphics image and its orientation, size, and pixel format.
- [init(CGImage:constraint:options:)](mlfeaturevalue/init%28cgimage_constraint_options_%29-1j00l.md): Creates a feature value that contains an image defined by a core graphics image and a constraint.
- [init(CGImage:orientation:constraint:options:)](mlfeaturevalue/init%28cgimage_orientation_constraint_options_%29-87vk0.md): Creates a feature value that contains an image defined by a core graphics image, an orientation, and a constraint.
- [init(imageAtURL:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28imageaturl_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s size and pixel format.
- [init(imageAtURL:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28imageaturl_orientation_pixelswide_pixelshigh_pixelformattype_options_%29.md): Creates a feature value that contains an image defined by an image URL and the image’s orientation, size, and pixel format.
- [init(imageAtURL:constraint:options:)](mlfeaturevalue/init%28imageaturl_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL and a constraint.
- [init(imageAtURL:orientation:constraint:options:)](mlfeaturevalue/init%28imageaturl_orientation_constraint_options_%29.md): Creates a feature value that contains an image defined by an image URL, an orientation, and a constraint.
- [MLFeatureValue.ImageOption](mlfeaturevalue/imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.

# MLImageConstraint (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The width, height, and pixel format constraints of an image feature.

## Declaration

```objectivec
@interface MLImageConstraint : NSObject
```

<a id="overview"></a>

## Overview

In CoreML, an *image* is a collection of pixels represented by [CVPixelBuffer](../corevideo/cvpixelbuffer-q2e.md) (Swift) or [CVPixelBufferRef](../corevideo/cvpixelbuffer.md) (Objective-C). An *image feature* is a model input or output that accepts or produces, respectively, an image bundled in an [MLFeatureValue](mlfeaturevalue.md). `MLImageConstraint` defines the image feature’s limitations for the images within an `MLFeatureValue`.

If a model has an image feature for an input or output, the model author uses an *image feature description* by creating an [MLFeatureDescription](mlfeaturedescription.md). The feature description for an image input or output has:

- Its [type](mlfeaturedescription/type.md) property set to [MLFeatureTypeImage](mlfeaturetype/image.md)
- Its [imageConstraint](mlfeaturedescription/imageconstraint.md) property set to an [MLImageConstraint](mlimageconstraint.md) instance configured to the image feature’s size and format

Image features that support additional image sizes provide a range of sizes, or a list of discrete sizes, in their image constraint’s [sizeConstraint](mlimageconstraint/sizeconstraint.md) property.

## Topics

### Accessing the constraints

- [pixelsWide](mlimageconstraint/pixelswide.md): The model’s default width for an image feature.
- [pixelsHigh](mlimageconstraint/pixelshigh.md): The model’s default height for an image feature.
- [pixelFormatType](mlimageconstraint/pixelformattype.md): The model’s pixel format for an image feature.

### Inspecting acceptable sizes

- [sizeConstraint](mlimageconstraint/sizeconstraint.md): Additional sizes this image feature supports.
- [MLImageSizeConstraint](mlimagesizeconstraint.md): A list or range of sizes that augment an image constraint’s default size.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating image feature values

- [featureValueWithPixelBuffer:](mlfeaturevalue/init%28pixelbuffer_%29.md): Creates a feature value that contains an image from a pixel buffer.
- [MLFeatureValueImageOption](mlfeaturevalue/imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.
