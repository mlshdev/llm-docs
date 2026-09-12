> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextsetbatchsize(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextsetbatchsize(_:_:_:))

# BNNSGraphContextSetBatchSize(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the batch size for a graph.

## Declaration

```swift
func BNNSGraphContextSetBatchSize(_ context: bnns_graph_context_t, _ function: UnsafePointer<CChar>?, _ batch_size: UInt64) -> Int32
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `batch_size`: The batch size.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

This function provides a special case of [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md) where the only dynamic size is the first index of the tensors and that size is equal for all tensors. This function provides a simpler API because you only need to pass the common first dimension as the `batch_size` parameter.

If your graph contains other dynamic strides, use [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md) instead. This function doesn’t set dynamic strides.

Don’t call this function while existing calls to [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md) are running.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

# BNNSGraphContextSetBatchSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the batch size for a graph.

## Declaration

```objectivec
int BNNSGraphContextSetBatchSize(bnns_graph_context_t context, const char *function, uint64_t batch_size);
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.
- `batch_size`: The batch size.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

This function provides a special case of [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md) where the only dynamic size is the first index of the tensors and that size is equal for all tensors. This function provides a simpler API because you only need to pass the common first dimension as the `batch_size` parameter.

If your graph contains other dynamic strides, use [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md) instead. This function doesn’t set dynamic strides.

Don’t call this function while existing calls to [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md) are running.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
