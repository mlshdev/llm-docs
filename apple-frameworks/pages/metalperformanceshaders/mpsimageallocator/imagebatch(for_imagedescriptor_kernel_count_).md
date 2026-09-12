> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageallocator/imagebatch(for:imagedescriptor:kernel:count:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageallocator/imagebatch(for:imagedescriptor:kernel:count:))

# imageBatch(for:imageDescriptor:kernel:count:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
optional func imageBatch(for cmdBuf: any MTLCommandBuffer, imageDescriptor descriptor: MPSImageDescriptor, kernel: MPSKernel, count: Int) -> [MPSImage]
```

## See Also

### Instance Methods

- [image(for:imageDescriptor:kernel:)](image%28for_imagedescriptor_kernel_%29.md)

# imageBatchForCommandBuffer:imageDescriptor:kernel:count: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
- (MPSImageBatch *) imageBatchForCommandBuffer:(id<MTLCommandBuffer>) cmdBuf imageDescriptor:(MPSImageDescriptor *) descriptor kernel:(MPSKernel *) kernel count:(NSUInteger) count;
```

## See Also

### Instance Methods

- [imageForCommandBuffer:imageDescriptor:kernel:](image%28for_imagedescriptor_kernel_%29.md)
