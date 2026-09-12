> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue](https://developer.apple.com/documentation/coreml/mlfeaturevalue)

# MLFeatureValue (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A generic wrapper around an underlying value and the value’s type.

## Declaration

```swift
class MLFeatureValue
```

<a id="overview"></a>

## Overview

A Core ML *feature value* wraps an underlying value and bundles it with that value’s type, which is one of the types that [MLFeatureType](mlfeaturetype.md) defines. Apps typically access feature values indirectly by using the methods in the wrapper class Xcode automatically generates for Core ML model files.

If your app accesses an [MLModel](mlmodel.md) directly, it must create and consume [MLFeatureProvider](mlfeatureprovider.md) instances. For each prediction, Core ML accepts a feature provider for its inputs, and generates a separate feature provider for its outputs. The input feature provider contains one `MLFeatureValue` instance per input, and the output feature provider contains one per output. See [MLFeatureDescription](mlfeaturedescription.md) for more information about the model input and output features.

## Topics

### Creating a feature value

- [init(\_:)](mlfeaturevalue/init%28__%29.md): Creates a feature value from a sendable feature value.

### Creating numeric feature values

- [init(int64:)](mlfeaturevalue/init%28int64_%29.md): Creates a feature value that contains an integer.
- [init(double:)](mlfeaturevalue/init%28double_%29.md): Creates a feature value that contains a double.

### Creating string feature values

- [init(string:)](mlfeaturevalue/init%28string_%29.md): Creates a feature value that contains a string.

### Creating multidimensional feature values

- [init(multiArray:)](mlfeaturevalue/init%28multiarray_%29.md): Creates a feature value that contains a multidimensional array.
- [init(shapedArray:)](mlfeaturevalue/init%28shapedarray_%29.md): Creates a feature value that contains a shaped array.

### Creating collection feature values

- [init(dictionary:)](mlfeaturevalue/init%28dictionary_%29.md): Creates a feature value that contains a dictionary of numbers.
- [init(sequence:)](mlfeaturevalue/init%28sequence_%29.md): Creates a feature value that contains a sequence.

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
- [MLImageConstraint](mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [MLFeatureValue.ImageOption](mlfeaturevalue/imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.

### Creating undefined feature values

- [init(undefined:)](mlfeaturevalue/init%28undefined_%29.md): Creates a feature value with a type that represents an undefined or missing value.

### Accessing the feature’s type

- [type](mlfeaturevalue/type.md): The type of the feature value.

### Accessing the feature’s value

- [isUndefined](mlfeaturevalue/isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](mlfeaturevalue/int64value.md): The underlying integer of the feature value.
- [doubleValue](mlfeaturevalue/doublevalue.md): The underlying double of the feature value.
- [stringValue](mlfeaturevalue/stringvalue.md): The underlying string of the feature value.
- [imageBufferValue](mlfeaturevalue/imagebuffervalue.md): The underlying image of the feature value as a pixel buffer.
- [shapedArrayValue(of:)](mlfeaturevalue/shapedarrayvalue%28of_%29.md): Returns the underlying shaped array of the feature value.
- [multiArrayValue](mlfeaturevalue/multiarrayvalue.md): The underlying multiarray of the feature value.
- [sequenceValue](mlfeaturevalue/sequencevalue.md): The underlying sequence of the feature value.
- [dictionaryValue](mlfeaturevalue/dictionaryvalue.md): The underlying dictionary of the feature value.

### Comparing feature values

- [isEqual(to:)](mlfeaturevalue/isequal%28to_%29.md): Returns a Boolean value that indicates whether a feature value is equal to another.

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLShapedArray](mlshapedarray.md): A machine learning collection type that stores scalar values in a multidimensional array.
- [MLShapedArrayProtocol](mlshapedarrayprotocol.md): An interface that defines a shaped array type.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.

### Initializers

- [init(cgImage:constraint:options:)](mlfeaturevalue/init%28cgimage_constraint_options_%29-30mu4.md): Construct image feature value from CGImage, using the size and type information required by feature description (orientation is assumed to be kCGImagePropertyOrientationUp)
- [init(cgImage:orientation:constraint:options:)](mlfeaturevalue/init%28cgimage_orientation_constraint_options_%29-1djlw.md): Construct image feature value from CGImage w/ specified orientation, using the size and type information required by feature description
- [init(cgImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28cgimage_orientation_pixelswide_pixelshigh_pixelformattype_options_%29-8i6j0.md): Construct image feature value from CGImage w/ specified orientation
- [init(cgImage:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-1pdp4.md): Construct image feature value from CGImage (orientation is assumed to be kCGImagePropertyOrientationUp)
- [init(coder:)](mlfeaturevalue/init%28coder_%29.md)
- [init(imageAt:constraint:options:)](mlfeaturevalue/init%28imageat_constraint_options_%29.md): Construct image feature value from an image on disk, using a model specified image constraint. Orientation is read from Exif if avaiable
- [init(imageAt:orientation:constraint:options:)](mlfeaturevalue/init%28imageat_orientation_constraint_options_%29.md): Construct image feature value from an image on disk using a model specified image constraint. The passed in orientation supersedes any in the file
- [init(imageAt:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28imageat_orientation_pixelswide_pixelshigh_pixelformattype_options_%29.md): Construct image feature value from an image on disk. The passed in orientation supersedes any in the file
- [init(imageAt:pixelsWide:pixelsHigh:pixelFormatType:options:)](mlfeaturevalue/init%28imageat_pixelswide_pixelshigh_pixelformattype_options_%29.md): Construct image feature value from an image on disk. Orientation is read from Exif if avaiable

### Default Implementations

- [MLFeatureValue Implementations](mlfeaturevalue/mlfeaturevalue-implementations.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLSendableFeatureValue](mlsendablefeaturevalue.md): A sendable feature value.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.

# MLFeatureValue (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A generic wrapper around an underlying value and the value’s type.

## Declaration

```objectivec
@interface MLFeatureValue : NSObject
```

<a id="overview"></a>

## Overview

A Core ML *feature value* wraps an underlying value and bundles it with that value’s type, which is one of the types that [MLFeatureType](mlfeaturetype.md) defines. Apps typically access feature values indirectly by using the methods in the wrapper class Xcode automatically generates for Core ML model files.

If your app accesses an [MLModel](mlmodel.md) directly, it must create and consume [MLFeatureProvider](mlfeatureprovider.md) instances. For each prediction, Core ML accepts a feature provider for its inputs, and generates a separate feature provider for its outputs. The input feature provider contains one `MLFeatureValue` instance per input, and the output feature provider contains one per output. See [MLFeatureDescription](mlfeaturedescription.md) for more information about the model input and output features.

## Topics

### Creating numeric feature values

- [featureValueWithInt64:](mlfeaturevalue/init%28int64_%29.md): Creates a feature value that contains an integer.
- [featureValueWithDouble:](mlfeaturevalue/init%28double_%29.md): Creates a feature value that contains a double.

### Creating string feature values

- [featureValueWithString:](mlfeaturevalue/init%28string_%29.md): Creates a feature value that contains a string.

### Creating multidimensional feature values

- [featureValueWithMultiArray:](mlfeaturevalue/init%28multiarray_%29.md): Creates a feature value that contains a multidimensional array.

### Creating collection feature values

- [featureValueWithDictionary:error:](mlfeaturevalue/init%28dictionary_%29.md): Creates a feature value that contains a dictionary of numbers.
- [featureValueWithSequence:](mlfeaturevalue/init%28sequence_%29.md): Creates a feature value that contains a sequence.

### Creating image feature values

- [featureValueWithPixelBuffer:](mlfeaturevalue/init%28pixelbuffer_%29.md): Creates a feature value that contains an image from a pixel buffer.
- [MLImageConstraint](mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [MLFeatureValueImageOption](mlfeaturevalue/imageoption.md): The initializer options you use to crop and scale an image when creating an image feature value.

### Creating undefined feature values

- [undefinedFeatureValueWithType:](mlfeaturevalue/init%28undefined_%29.md): Creates a feature value with a type that represents an undefined or missing value.

### Accessing the feature’s type

- [type](mlfeaturevalue/type.md): The type of the feature value.

### Accessing the feature’s value

- [undefined](mlfeaturevalue/isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](mlfeaturevalue/int64value.md): The underlying integer of the feature value.
- [doubleValue](mlfeaturevalue/doublevalue.md): The underlying double of the feature value.
- [stringValue](mlfeaturevalue/stringvalue.md): The underlying string of the feature value.
- [imageBufferValue](mlfeaturevalue/imagebuffervalue.md): The underlying image of the feature value as a pixel buffer.
- [multiArrayValue](mlfeaturevalue/multiarrayvalue.md): The underlying multiarray of the feature value.
- [sequenceValue](mlfeaturevalue/sequencevalue.md): The underlying sequence of the feature value.
- [dictionaryValue](mlfeaturevalue/dictionaryvalue.md): The underlying dictionary of the feature value.

### Comparing feature values

- [isEqualToFeatureValue:](mlfeaturevalue/isequal%28to_%29.md): Returns a Boolean value that indicates whether a feature value is equal to another.

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.

### Type Methods

- [featureValueWithCGImage:constraint:options:error:](mlfeaturevalue/init%28cgimage_constraint_options_%29-30mu4.md): Construct image feature value from CGImage, using the size and type information required by feature description (orientation is assumed to be kCGImagePropertyOrientationUp)
- [featureValueWithCGImage:orientation:constraint:options:error:](mlfeaturevalue/init%28cgimage_orientation_constraint_options_%29-1djlw.md): Construct image feature value from CGImage w/ specified orientation, using the size and type information required by feature description
- [featureValueWithCGImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:error:](mlfeaturevalue/init%28cgimage_orientation_pixelswide_pixelshigh_pixelformattype_options_%29-8i6j0.md): Construct image feature value from CGImage w/ specified orientation
- [featureValueWithCGImage:pixelsWide:pixelsHigh:pixelFormatType:options:error:](mlfeaturevalue/init%28cgimage_pixelswide_pixelshigh_pixelformattype_options_%29-1pdp4.md): Construct image feature value from CGImage (orientation is assumed to be kCGImagePropertyOrientationUp)
- [featureValueWithImageAtURL:constraint:options:error:](mlfeaturevalue/init%28imageat_constraint_options_%29.md): Construct image feature value from an image on disk, using a model specified image constraint. Orientation is read from Exif if avaiable
- [featureValueWithImageAtURL:orientation:constraint:options:error:](mlfeaturevalue/init%28imageat_orientation_constraint_options_%29.md): Construct image feature value from an image on disk using a model specified image constraint. The passed in orientation supersedes any in the file
- [featureValueWithImageAtURL:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:error:](mlfeaturevalue/init%28imageat_orientation_pixelswide_pixelshigh_pixelformattype_options_%29.md): Construct image feature value from an image on disk. The passed in orientation supersedes any in the file
- [featureValueWithImageAtURL:pixelsWide:pixelsHigh:pixelFormatType:options:error:](mlfeaturevalue/init%28imageat_pixelswide_pixelshigh_pixelformattype_options_%29.md): Construct image feature value from an image on disk. Orientation is read from Exif if avaiable

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Model inputs and outputs

- [Making Predictions with a Sequence of Inputs](making-predictions-with-a-sequence-of-inputs.md): Integrate a recurrent neural network model to process sequences of inputs.
- [MLFeatureProvider](mlfeatureprovider.md): An interface that represents a collection of values for either a model’s input or its output.
- [MLDictionaryFeatureProvider](mldictionaryfeatureprovider.md): A convenience wrapper for the given dictionary of data.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLArrayBatchProvider](mlarraybatchprovider.md): A convenience wrapper for batches of feature providers.
- [MLModelAsset](mlmodelasset.md): An abstraction of a compiled Core ML model asset.
