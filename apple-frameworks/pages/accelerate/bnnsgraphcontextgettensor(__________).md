> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextgettensor(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextgettensor(_:_:_:_:_:))

# BNNSGraphContextGetTensor(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the properties of a tensor for the specified function argument.

## Declaration

```swift
func BNNSGraphContextGetTensor(_ context: bnns_graph_context_t, _ function: UnsafePointer<CChar>?, _ argument: UnsafePointer<CChar>, _ fill_known_dynamic_shapes: Bool, _ tensor: UnsafeMutablePointer<BNNSTensor>) -> Int32
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `argument`: The name of the input or output argument.
- `fill_known_dynamic_shapes`: A Boolean value that specifies whether the function should replace any dynamic shapes for the next execution of the context. BNNS derives these shapes either from the default shapes in the source model, or from a preceding calls to [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md) or [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md). If BNNS is unable to derive the shapes, the function sets the dimensions to `-1`.
- `tensor`: The tensor. On output, all fields apart from [data](bnnstensor/data.md) contain the properties for the specified function argument.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSTensorGetAllocationSize(\_:)](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphTensorFillStrides(\_:\_:\_:\_:)](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

# BNNSGraphContextGetTensor (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the properties of a tensor for the specified function argument.

## Declaration

```objectivec
int BNNSGraphContextGetTensor(bnns_graph_context_t context, const char *function, const char *argument, bool fill_known_dynamic_shapes, BNNSTensor *tensor);
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `argument`: The name of the input or output argument.
- `fill_known_dynamic_shapes`: A Boolean value that specifies whether the function should replace any dynamic shapes for the next execution of the context. BNNS derives these shapes either from the default shapes in the source model, or from a preceding calls to [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md) or [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md). If BNNS is unable to derive the shapes, the function sets the dimensions to `-1`.
- `tensor`: The tensor. On output, all fields apart from [data](bnnstensor/data.md) contain the properties for the specified function argument.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSTensorGetAllocationSize](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphTensorFillStrides](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.
