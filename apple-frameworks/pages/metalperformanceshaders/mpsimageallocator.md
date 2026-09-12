> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageallocator](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageallocator)

# MPSImageAllocator (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
protocol MPSImageAllocator : NSSecureCoding, NSObjectProtocol
```

## Topics

### Instance Methods

- [image(for:imageDescriptor:kernel:)](mpsimageallocator/image%28for_imagedescriptor_kernel_%29.md)
- [imageBatch(for:imageDescriptor:kernel:count:)](mpsimageallocator/imagebatch%28for_imagedescriptor_kernel_count_%29.md)

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Methods to Get an Image Allocator

- [defaultAllocator()](mpsimage/defaultallocator%28%29.md)

# MPSImageAllocator (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
@protocol MPSImageAllocator <NSObject, NSSecureCoding>
```

## Topics

### Instance Methods

- [imageForCommandBuffer:imageDescriptor:kernel:](mpsimageallocator/image%28for_imagedescriptor_kernel_%29.md)
- [imageBatchForCommandBuffer:imageDescriptor:kernel:count:](mpsimageallocator/imagebatch%28for_imagedescriptor_kernel_count_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Methods to Get an Image Allocator

- [defaultAllocator](mpsimage/defaultallocator%28%29.md)
