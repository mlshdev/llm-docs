> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/exportdata(with:to:destinationdatatype:offset:rowstrides:)

# exportData(with:to:destinationDataType:offset:rowStrides:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func exportData(with cmdBuf: any MTLCommandBuffer, to buffer: any MTLBuffer, destinationDataType: MPSDataType, offset: Int, rowStrides: UnsafeMutablePointer<Int>?)
```

# exportDataWithCommandBuffer:toBuffer:destinationDataType:offset:rowStrides: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) exportDataWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf toBuffer:(id<MTLBuffer>) buffer destinationDataType:(MPSDataType) destinationDataType offset:(NSUInteger) offset rowStrides:(NSInteger *) rowStrides;
```
