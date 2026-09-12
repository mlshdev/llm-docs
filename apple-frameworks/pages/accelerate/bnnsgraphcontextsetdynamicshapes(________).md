> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextsetdynamicshapes(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextsetdynamicshapes(_:_:_:_:))

# BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.

## Declaration

```swift
func BNNSGraphContextSetDynamicShapes(_ context: bnns_graph_context_t, _ function: UnsafePointer<CChar>?, _ shapes_count: Int, _ shapes: UnsafeMutablePointer<bnns_graph_shape_t>) -> Int32
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `shapes_count`: The number of elements in the `shapes` array.
- `shapes`: An array of input and output shapes in the same order as you pass to [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md).

  On input, this function reads input shapes with a nonzero rank, and uses the constant or default value from the source model for input shapes with a zero rank. The function generates an error for shapes with a nonzero value that doesn’t match the source model.

  On output, the function sets output shapes with a nonzero rank to the upper bounds of the expected output shape. If the function can’t deduce the output shape because it depends on the input data values, the value of `shapes[idx].size[d]` is zero.

<a id="return-value"></a>

## Return Value

\- `0` on success if all tensor shapes were exactly determined. That is, the workspace size is exact.

<a id="discussion"></a>

## Discussion

- `1` on success if one or more tensor shapes are merely bounds, but no tensor is unbounded. That is, the workspace size is bounded.
- `2` on success if one or more tensor shapes are unbounded and BNNS will allocate workspace memory during execution.
- A negative value indicates an error.

<a id="Discussion"></a>

## Discussion

Don’t call this function while existing calls to [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md) are running.

For example, the following code sets the dynamic shapes for an example graph context, specifies the output shape, and updates the context’s required workspace size.

```swift
var inputShape: [UInt64] = [1024, 1, 1]
let rank = inputShape.count
var outputShape = [UInt64](repeating: 0, count: rank)

let result = outputShape.withUnsafeMutableBufferPointer { output in
    inputShape.withUnsafeMutableBufferPointer { input in
        
        var shapes = [
            bnns_graph_shape_t(rank: rank, shape: output.baseAddress!),
            bnns_graph_shape_t(rank:rank, shape: input.baseAddress!)
        ]
        
        return BNNSGraphContextSetDynamicShapes(context, nil,
                                                shapes.count, &shapes)
    }
}
    
// Prints "[1024, 1, 1]".
print(outputShape)
```

On return, the output shape contains the correct size for the input shape, and a subsequent call to [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md) returns the correct workspace size.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

# BNNSGraphContextSetDynamicShapes (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.

## Declaration

```objectivec
int BNNSGraphContextSetDynamicShapes(bnns_graph_context_t context, const char *function, size_t shapes_count, bnns_graph_shape_t *shapes);
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `shapes_count`: The number of elements in the `shapes` array.
- `shapes`: An array of input and output shapes in the same order as you pass to [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md).

  On input, this function reads input shapes with a nonzero rank, and uses the constant or default value from the source model for input shapes with a zero rank. The function generates an error for shapes with a nonzero value that doesn’t match the source model.

  On output, the function sets output shapes with a nonzero rank to the upper bounds of the expected output shape. If the function can’t deduce the output shape because it depends on the input data values, the value of `shapes[idx].size[d]` is zero.

<a id="return-value"></a>

## Return Value

\- `0` on success if all tensor shapes were exactly determined. That is, the workspace size is exact.

<a id="discussion"></a>

## Discussion

- `1` on success if one or more tensor shapes are merely bounds, but no tensor is unbounded. That is, the workspace size is bounded.
- `2` on success if one or more tensor shapes are unbounded and BNNS will allocate workspace memory during execution.
- A negative value indicates an error.

<a id="Discussion"></a>

## Discussion

Don’t call this function while existing calls to [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md) are running.

For example, the following code sets the dynamic shapes for an example graph context, specifies the output shape, and updates the context’s required workspace size.

```swift
var inputShape: [UInt64] = [1024, 1, 1]
let rank = inputShape.count
var outputShape = [UInt64](repeating: 0, count: rank)

let result = outputShape.withUnsafeMutableBufferPointer { output in
    inputShape.withUnsafeMutableBufferPointer { input in
        
        var shapes = [
            bnns_graph_shape_t(rank: rank, shape: output.baseAddress!),
            bnns_graph_shape_t(rank:rank, shape: input.baseAddress!)
        ]
        
        return BNNSGraphContextSetDynamicShapes(context, nil,
                                                shapes.count, &shapes)
    }
}
    
// Prints "[1024, 1, 1]".
print(outputShape)
```

On return, the output shape contains the correct size for the input shape, and a subsequent call to [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md) returns the correct workspace size.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
