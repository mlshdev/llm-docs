> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/init(device:imagedescriptor:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/init(device:imagedescriptor:))

# init(device:imageDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes an empty image.

## Declaration

```swift
convenience init(device: any MTLDevice, imageDescriptor: MPSImageDescriptor)
```

## Parameters

- `device`: The device on which the image will be used.
- `imageDescriptor`: The image descriptor.

<a id="return-value"></a>

## Return Value

A valid [MPSImage](../mpsimage.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

Storage for the image data is allocated lazily on the first use of the [MPSImage](../mpsimage.md) object, or when the [texture](texture.md) property is first read.

## See Also

### Initializers

- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [init(texture:featureChannels:)](init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
- [init(parentImage:sliceRange:featureChannels:)](init%28parentimage_slicerange_featurechannels_%29.md)

# initWithDevice:imageDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Initializes an empty image.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device imageDescriptor:(const MPSImageDescriptor *) imageDescriptor;
```

## Parameters

- `device`: The device on which the image will be used.
- `imageDescriptor`: The image descriptor.

<a id="return-value"></a>

## Return Value

A valid [MPSImage](../mpsimage.md) object or `nil`, if failure.

<a id="Discussion"></a>

## Discussion

Storage for the image data is allocated lazily on the first use of the [MPSImage](../mpsimage.md) object, or when the [texture](texture.md) property is first read.

## See Also

### Initializers

- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [initWithTexture:featureChannels:](init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
- [initWithParentImage:sliceRange:featureChannels:](init%28parentimage_slicerange_featurechannels_%29.md)
