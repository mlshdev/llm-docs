> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarray/exportdata(with:to:offset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/exportdata(with:to:offset:))

# exportData(with:to:offset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func exportData(with cmdBuf: any MTLCommandBuffer, to images: [MPSImage], offset: MPSImageCoordinate)
```

# exportDataWithCommandBuffer:toImages:offset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) exportDataWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf toImages:(MPSImageBatch *) images offset:(MPSImageCoordinate) offset;
```
