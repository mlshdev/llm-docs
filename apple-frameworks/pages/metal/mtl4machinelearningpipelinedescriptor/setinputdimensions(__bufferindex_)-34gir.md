> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinedescriptor/setinputdimensions(_:bufferindex:)-34gir](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinedescriptor/setinputdimensions(_:bufferindex:)-34gir)

# setInputDimensions(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the dimension of an input tensor at a buffer index.

## Declaration

```swift
func setInputDimensions(_ dimensions: MTLTensorExtents?, bufferIndex: Int)
```

## Parameters

- `dimensions`: The dimensions of the tensor.
- `bufferIndex`: Index of the tensor to modify.

<a id="discussion"></a>

## Discussion

When the compiled model declares the input as unranked (unknown rank), any concrete `dimensions` are accepted. Otherwise `dimensions.rank` must equal the model’s input rank, and each static (non `-1`) dimension must match.

# setInputDimensions:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the dimension of an input tensor at a buffer index.

## Declaration

```objectivec
- (void) setInputDimensions:(MTLTensorExtents *) dimensions atBufferIndex:(NSInteger) bufferIndex;
```

## Parameters

- `dimensions`: The dimensions of the tensor.
- `bufferIndex`: Index of the tensor to modify.

<a id="discussion"></a>

## Discussion

When the compiled model declares the input as unranked (unknown rank), any concrete `dimensions` are accepted. Otherwise `dimensions.rank` must equal the model’s input rank, and each static (non `-1`) dimension must match.
