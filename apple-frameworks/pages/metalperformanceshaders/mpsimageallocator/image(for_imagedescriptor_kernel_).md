> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageallocator/image(for:imagedescriptor:kernel:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageallocator/image(for:imagedescriptor:kernel:))

# image(for:imageDescriptor:kernel:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
func image(for cmdBuf: any MTLCommandBuffer, imageDescriptor descriptor: MPSImageDescriptor, kernel: MPSKernel) -> MPSImage
```

## See Also

### Instance Methods

- [imageBatch(for:imageDescriptor:kernel:count:)](imagebatch%28for_imagedescriptor_kernel_count_%29.md)

# imageForCommandBuffer:imageDescriptor:kernel: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
- (MPSImage *) imageForCommandBuffer:(id<MTLCommandBuffer>) cmdBuf imageDescriptor:(MPSImageDescriptor *) descriptor kernel:(MPSKernel *) kernel;
```

## See Also

### Instance Methods

- [imageBatchForCommandBuffer:imageDescriptor:kernel:count:](imagebatch%28for_imagedescriptor_kernel_count_%29.md)
