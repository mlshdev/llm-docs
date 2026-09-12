> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageaccumulator](https://developer.apple.com/documentation/coreimage/ciimageaccumulator)

# CIImageAccumulator (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

An object that manages feedback-based image processing for tasks such as painting or fluid simulation.

## Declaration

```swift
class CIImageAccumulator
```

<a id="overview"></a>

## Overview

The `CIImageAccumulator` class enables feedback-based image processing for such things as iterative painting operations or fluid dynamics simulations. You use `CIImageAccumulator` objects in conjunction with other Core Image classes, such as  [CIFilter](cifilter-swift.class.md), [CIImage](ciimage.md), [CIVector](civector.md), and [CIContext](cicontext.md), to take advantage of the built-in Core Image filters when processing images.

## Topics

### Initializing an Image Accumulator

- [init(extent:format:)](ciimageaccumulator/init%28extent_format_%29.md): Initializes an image accumulator with the specified extent and pixel format.
- [init(extent:format:colorSpace:)](ciimageaccumulator/init%28extent_format_colorspace_%29.md): Initializes an image accumulator with the specified extent, pixel format, and color space.

### Setting an Image

- [setImage(\_:)](ciimageaccumulator/setimage%28__%29.md): Sets the contents of the image accumulator to the contents of the specified image object.
- [setImage(\_:dirtyRect:)](ciimageaccumulator/setimage%28__dirtyrect_%29.md): Updates an image accumulator with a subregion of an image object.

### Obtaining Data From an Image Accumulator

- [extent](ciimageaccumulator/extent.md): The extent of the image associated with the image accumulator.
- [format](ciimageaccumulator/format.md): The pixel format of the image accumulator.
- [image()](ciimageaccumulator/image%28%29.md): Returns the current contents of the image accumulator.

### Resetting an Accumulator

- [clear()](ciimageaccumulator/clear%28%29.md): Resets the accumulator, discarding any pending updates and the current content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# CIImageAccumulator (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

An object that manages feedback-based image processing for tasks such as painting or fluid simulation.

## Declaration

```objectivec
@interface CIImageAccumulator : NSObject
```

<a id="overview"></a>

## Overview

The `CIImageAccumulator` class enables feedback-based image processing for such things as iterative painting operations or fluid dynamics simulations. You use `CIImageAccumulator` objects in conjunction with other Core Image classes, such as  [CIFilter](cifilter-swift.class.md), [CIImage](ciimage.md), [CIVector](civector.md), and [CIContext](cicontext.md), to take advantage of the built-in Core Image filters when processing images.

## Topics

### Creating an Image Accumulator

- [imageAccumulatorWithExtent:format:](ciimageaccumulator/imageaccumulatorwithextent_format_.md): Creates an image accumulator with the specified extent and pixel format.
- [imageAccumulatorWithExtent:format:colorSpace:](ciimageaccumulator/imageaccumulatorwithextent_format_colorspace_.md): Creates an image accumulator with the specified extent, pixel format, and color space.

### Initializing an Image Accumulator

- [initWithExtent:format:](ciimageaccumulator/init%28extent_format_%29.md): Initializes an image accumulator with the specified extent and pixel format.
- [initWithExtent:format:colorSpace:](ciimageaccumulator/init%28extent_format_colorspace_%29.md): Initializes an image accumulator with the specified extent, pixel format, and color space.

### Setting an Image

- [setImage:](ciimageaccumulator/setimage%28__%29.md): Sets the contents of the image accumulator to the contents of the specified image object.
- [setImage:dirtyRect:](ciimageaccumulator/setimage%28__dirtyrect_%29.md): Updates an image accumulator with a subregion of an image object.

### Obtaining Data From an Image Accumulator

- [extent](ciimageaccumulator/extent.md): The extent of the image associated with the image accumulator.
- [format](ciimageaccumulator/format.md): The pixel format of the image accumulator.
- [image](ciimageaccumulator/image%28%29.md): Returns the current contents of the image accumulator.

### Resetting an Accumulator

- [clear](ciimageaccumulator/clear%28%29.md): Resets the accumulator, discarding any pending updates and the current content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
