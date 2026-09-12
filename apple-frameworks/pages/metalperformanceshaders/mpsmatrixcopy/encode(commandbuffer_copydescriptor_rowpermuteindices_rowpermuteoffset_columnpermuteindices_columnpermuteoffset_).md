> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixcopy/encode(commandbuffer:copydescriptor:rowpermuteindices:rowpermuteoffset:columnpermuteindices:columnpermuteoffset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixcopy/encode(commandbuffer:copydescriptor:rowpermuteindices:rowpermuteoffset:columnpermuteindices:columnpermuteoffset:))

# encode(commandBuffer:copyDescriptor:rowPermuteIndices:rowPermuteOffset:columnPermuteIndices:columnPermuteOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, copyDescriptor: MPSMatrixCopyDescriptor, rowPermuteIndices: MPSVector?, rowPermuteOffset: Int, columnPermuteIndices: MPSVector?, columnPermuteOffset: Int)
```

# encodeToCommandBuffer:copyDescriptor:rowPermuteIndices:rowPermuteOffset:columnPermuteIndices:columnPermuteOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer copyDescriptor:(MPSMatrixCopyDescriptor *) copyDescriptor rowPermuteIndices:(MPSVector *) rowPermuteIndices rowPermuteOffset:(NSUInteger) rowPermuteOffset columnPermuteIndices:(MPSVector *) columnPermuteIndices columnPermuteOffset:(NSUInteger) columnPermuteOffset;
```
