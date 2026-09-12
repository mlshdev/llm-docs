> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinedescriptor/setinputdimensions(_:bufferindex:)-8fnq7](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinedescriptor/setinputdimensions(_:bufferindex:)-8fnq7)

# setInputDimensions(\_:bufferIndex:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the dimensions of multiple input tensors on a range of buffer bindings.

## Declaration

```swift
func setInputDimensions(_ dimensions: [MTLTensorExtents], bufferIndex: Int)
```

## Parameters

- `dimensions`: An array of tensor extents.
- `bufferIndex`: The index of the first input to modify. Subsequent array elements affect subsequent indices.
