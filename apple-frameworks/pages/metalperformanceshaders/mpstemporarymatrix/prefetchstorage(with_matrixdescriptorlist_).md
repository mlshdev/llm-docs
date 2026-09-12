> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporarymatrix/prefetchstorage(with:matrixdescriptorlist:)](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporarymatrix/prefetchstorage(with:matrixdescriptorlist:))

# prefetchStorage(with:matrixDescriptorList:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class func prefetchStorage(with commandBuffer: any MTLCommandBuffer, matrixDescriptorList descriptorList: [MPSMatrixDescriptor])
```

# prefetchStorageWithCommandBuffer:matrixDescriptorList: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (void) prefetchStorageWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer matrixDescriptorList:(NSArray<MPSMatrixDescriptor *> *) descriptorList;
```
