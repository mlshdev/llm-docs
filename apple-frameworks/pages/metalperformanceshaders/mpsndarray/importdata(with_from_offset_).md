> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarray/importdata(with:from:offset:)

# importData(with:from:offset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func importData(with cmdBuf: any MTLCommandBuffer, from images: [MPSImage], offset: MPSImageCoordinate)
```

# importDataWithCommandBuffer:fromImages:offset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) importDataWithCommandBuffer:(id<MTLCommandBuffer>) cmdBuf fromImages:(MPSImageBatch *) images offset:(MPSImageCoordinate) offset;
```
