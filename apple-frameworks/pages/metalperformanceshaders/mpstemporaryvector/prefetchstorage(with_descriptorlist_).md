> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpstemporaryvector/prefetchstorage(with:descriptorlist:)

# prefetchStorage(with:descriptorList:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
class func prefetchStorage(with commandBuffer: any MTLCommandBuffer, descriptorList: [MPSVectorDescriptor])
```

# prefetchStorageWithCommandBuffer:descriptorList: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (void) prefetchStorageWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer descriptorList:(NSArray<MPSVectorDescriptor *> *) descriptorList;
```
