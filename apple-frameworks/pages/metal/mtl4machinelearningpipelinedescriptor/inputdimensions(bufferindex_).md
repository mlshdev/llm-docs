> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinedescriptor/inputdimensions(bufferindex:)](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinedescriptor/inputdimensions(bufferindex:))

# inputDimensions(bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the dimensions of the input tensor at `bufferIndex` if set, `nil` otherwise.

## Declaration

```swift
func inputDimensions(bufferIndex: Int) -> MTLTensorExtents?
```

# inputDimensionsAtBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the dimensions of the input tensor at `bufferIndex` if set, `nil` otherwise.

## Declaration

```objectivec
- (MTLTensorExtents *) inputDimensionsAtBufferIndex:(NSInteger) bufferIndex;
```
