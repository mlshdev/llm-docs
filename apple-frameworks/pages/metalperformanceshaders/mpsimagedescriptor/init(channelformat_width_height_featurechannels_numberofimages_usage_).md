> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagedescriptor/init(channelformat:width:height:featurechannels:numberofimages:usage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagedescriptor/init(channelformat:width:height:featurechannels:numberofimages:usage:))

# init(channelFormat:width:height:featureChannels:numberOfImages:usage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates an image descriptor for an image container with options to set texture usage and batch size (number of images).

## Declaration

```swift
convenience init(channelFormat: MPSImageFeatureChannelFormat, width: Int, height: Int, featureChannels: Int, numberOfImages: Int, usage: MTLTextureUsage)
```

## Parameters

- `channelFormat`: The storage format to use for each channel in the image.
- `width`: The width of the image.
- `height`: The height of the image.
- `featureChannels`: The number of feature channels per pixel.
- `numberOfImages`: The number of images for batch processing.
- `usage`: The intended usage of the underlying texture.

<a id="return-value"></a>

## Return Value

A valid [MPSImageDescriptor](../mpsimagedescriptor.md) object.

## See Also

### Methods

- [init(channelFormat:width:height:featureChannels:)](init%28channelformat_width_height_featurechannels_%29.md): Creates an image descriptor for a single image.

# imageDescriptorWithChannelFormat:width:height:featureChannels:numberOfImages:usage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates an image descriptor for an image container with options to set texture usage and batch size (number of images).

## Declaration

```objectivec
+ (instancetype) imageDescriptorWithChannelFormat:(MPSImageFeatureChannelFormat) channelFormat width:(NSUInteger) width height:(NSUInteger) height featureChannels:(NSUInteger) featureChannels numberOfImages:(NSUInteger) numberOfImages usage:(MTLTextureUsage) usage;
```

## Parameters

- `channelFormat`: The storage format to use for each channel in the image.
- `width`: The width of the image.
- `height`: The height of the image.
- `featureChannels`: The number of feature channels per pixel.
- `numberOfImages`: The number of images for batch processing.
- `usage`: The intended usage of the underlying texture.

<a id="return-value"></a>

## Return Value

A valid [MPSImageDescriptor](../mpsimagedescriptor.md) object.

## See Also

### Methods

- [imageDescriptorWithChannelFormat:width:height:featureChannels:](init%28channelformat_width_height_featurechannels_%29.md): Creates an image descriptor for a single image.
