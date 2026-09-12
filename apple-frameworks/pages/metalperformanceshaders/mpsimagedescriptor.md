> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagedescriptor](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagedescriptor)

# MPSImageDescriptor (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of the attributes used to create an [MPSImage](mpsimage.md).

## Declaration

```swift
class MPSImageDescriptor
```

<a id="overview"></a>

## Overview

You use an [MPSImageDescriptor](mpsimagedescriptor.md) to describe and create the properties of an [MPSImage](mpsimage.md) such as its size, pixel format and CPU cache mode.

## Topics

### Methods

- [init(channelFormat:width:height:featureChannels:)](mpsimagedescriptor/init%28channelformat_width_height_featurechannels_%29.md): Creates an image descriptor for a single image.
- [init(channelFormat:width:height:featureChannels:numberOfImages:usage:)](mpsimagedescriptor/init%28channelformat_width_height_featurechannels_numberofimages_usage_%29.md): Creates an image descriptor for an image container with options to set texture usage and batch size (number of images).

### Properties

- [width](mpsimagedescriptor/width.md): The width of the image.
- [height](mpsimagedescriptor/height.md): The height of the image.
- [featureChannels](mpsimagedescriptor/featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](mpsimagedescriptor/numberofimages.md): The number of images for batch processing.
- [pixelFormat](mpsimagedescriptor/pixelformat.md): The pixel format for the underlying texture.
- [channelFormat](mpsimagedescriptor/channelformat.md): The storage format to use for each channel in the image.
- [cpuCacheMode](mpsimagedescriptor/cpucachemode.md): The CPU cache mode of the underlying texture.
- [storageMode](mpsimagedescriptor/storagemode.md): The storage mode of underlying texture.
- [usage](mpsimagedescriptor/usage.md): Options to specify the intended usage of the underlying texture.

### Instance Methods

- [copy(with:)](mpsimagedescriptor/copy%28with_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Initializers

- [init(device:imageDescriptor:)](mpsimage/init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [init(texture:featureChannels:)](mpsimage/init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
- [init(parentImage:sliceRange:featureChannels:)](mpsimage/init%28parentimage_slicerange_featurechannels_%29.md)

# MPSImageDescriptor (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A description of the attributes used to create an [MPSImage](mpsimage.md).

## Declaration

```objectivec
@interface MPSImageDescriptor : NSObject
```

<a id="overview"></a>

## Overview

You use an [MPSImageDescriptor](mpsimagedescriptor.md) to describe and create the properties of an [MPSImage](mpsimage.md) such as its size, pixel format and CPU cache mode.

## Topics

### Methods

- [imageDescriptorWithChannelFormat:width:height:featureChannels:](mpsimagedescriptor/init%28channelformat_width_height_featurechannels_%29.md): Creates an image descriptor for a single image.
- [imageDescriptorWithChannelFormat:width:height:featureChannels:numberOfImages:usage:](mpsimagedescriptor/init%28channelformat_width_height_featurechannels_numberofimages_usage_%29.md): Creates an image descriptor for an image container with options to set texture usage and batch size (number of images).

### Properties

- [width](mpsimagedescriptor/width.md): The width of the image.
- [height](mpsimagedescriptor/height.md): The height of the image.
- [featureChannels](mpsimagedescriptor/featurechannels.md): The number of feature channels per pixel.
- [numberOfImages](mpsimagedescriptor/numberofimages.md): The number of images for batch processing.
- [pixelFormat](mpsimagedescriptor/pixelformat.md): The pixel format for the underlying texture.
- [channelFormat](mpsimagedescriptor/channelformat.md): The storage format to use for each channel in the image.
- [cpuCacheMode](mpsimagedescriptor/cpucachemode.md): The CPU cache mode of the underlying texture.
- [storageMode](mpsimagedescriptor/storagemode.md): The storage mode of underlying texture.
- [usage](mpsimagedescriptor/usage.md): Options to specify the intended usage of the underlying texture.

### Instance Methods

- [copyWithZone:](mpsimagedescriptor/copy%28with_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Initializers

- [initWithDevice:imageDescriptor:](mpsimage/init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [initWithTexture:featureChannels:](mpsimage/init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
- [initWithParentImage:sliceRange:featureChannels:](mpsimage/init%28parentimage_slicerange_featurechannels_%29.md)
