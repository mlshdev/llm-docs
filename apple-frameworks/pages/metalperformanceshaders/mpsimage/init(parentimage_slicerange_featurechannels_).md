> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/init(parentimage:slicerange:featurechannels:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/init(parentimage:slicerange:featurechannels:))

# init(parentImage:sliceRange:featureChannels:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
init(parentImage parent: MPSImage, sliceRange: NSRange, featureChannels: Int)
```

## See Also

### Initializers

- [init(device:imageDescriptor:)](init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [init(texture:featureChannels:)](init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.

# initWithParentImage:sliceRange:featureChannels: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithParentImage:(MPSImage *) parent sliceRange:(NSRange) sliceRange featureChannels:(NSUInteger) featureChannels;
```

## See Also

### Initializers

- [initWithDevice:imageDescriptor:](init%28device_imagedescriptor_%29.md): Initializes an empty image.
- [MPSImageDescriptor](../mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](../mpsimage.md).
- [initWithTexture:featureChannels:](init%28texture_featurechannels_%29.md): Initializes an image from a texture. The user-allocated texture has been created for a specific number of feature channels and number of images.
