> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarray/importdata(with:from:sourcedatatype:offset:rowstrides:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/importdata(with:from:sourcedatatype:offset:rowstrides:))

# importData(with:from:sourceDataType:offset:rowStrides:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func importData(with cmdBuf: any MTLCommandBuffer, from buffer: any MTLBuffer, sourceDataType: MPSDataType, offset: Int, rowStrides: UnsafeMutablePointer<Int>?)
```

# importDataWithCommandBuffer:fromBuffer:sourceDataType:offset:rowStrides: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) importDataWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf fromBuffer:(id<MTLBuffer>) buffer sourceDataType:(MPSDataType) sourceDataType offset:(NSUInteger) offset rowStrides:(NSInteger *) rowStrides;
```
