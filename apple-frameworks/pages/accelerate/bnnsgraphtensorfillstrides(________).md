> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphtensorfillstrides(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphtensorfillstrides(_:_:_:_:))

# BNNSGraphTensorFillStrides(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

## Declaration

```swift
func BNNSGraphTensorFillStrides(_ graph: bnns_graph_t, _ function: UnsafePointer<CChar>?, _ argument: UnsafePointer<CChar>, _ tensor: UnsafeMutablePointer<BNNSTensor>) -> Int32
```

## Parameters

- `graph`: The compiled graph object.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `argument`: The name of the input or output argument.
- `tensor`: The tensor. On output, the first [rank](bnnstensor/rank.md) elements contain the strides that BNNS requires.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

Call this function to fill the strides of a buffer according to the specification of the compiled graph’s model.

This function requires that you specify the tensor’s sizes. That is, they aren’t less than zero.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSTensorGetAllocationSize(\_:)](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphContextGetTensor(\_:\_:\_:\_:\_:)](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.

# BNNSGraphTensorFillStrides (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

## Declaration

```objectivec
int BNNSGraphTensorFillStrides(bnns_graph_t graph, const char *function, const char *argument, BNNSTensor *tensor);
```

## Parameters

- `graph`: The compiled graph object.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `argument`: The name of the input or output argument.
- `tensor`: The tensor. On output, the first [rank](bnnstensor/rank.md) elements contain the strides that BNNS requires.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

Call this function to fill the strides of a buffer according to the specification of the compiled graph’s model.

This function requires that you specify the tensor’s sizes. That is, they aren’t less than zero.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSTensorGetAllocationSize](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphContextGetTensor](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
