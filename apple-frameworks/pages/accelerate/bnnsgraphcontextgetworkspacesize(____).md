> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextgetworkspacesize(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextgetworkspacesize(_:_:))

# BNNSGraphContextGetWorkspaceSize(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the minimum size, in bytes, of the workspace that graph context execution requires.

## Declaration

```swift
func BNNSGraphContextGetWorkspaceSize(_ context: bnns_graph_context_t, _ function: UnsafePointer<CChar>?) -> Int
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.

<a id="return-value"></a>

## Return Value

The minimum size, in bytes, for the workspace, or `SIZE_T_MAX` if the query fails.

<a id="Discussion"></a>

## Discussion

Call this function to obtain the minimum size of the workspace that the BNNSGraphContextExecute function requires. If you call either [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md) or [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md), call this function afterwards to obtain the new workspace size.

Note that the workspace size may not be proportional with the dynamic size. That is, smaller input and output tensors may require a larger workspace.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

# BNNSGraphContextGetWorkspaceSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the minimum size, in bytes, of the workspace that graph context execution requires.

## Declaration

```objectivec
size_t BNNSGraphContextGetWorkspaceSize(bnns_graph_context_t context, const char *function);
```

## Parameters

- `context`: The graph context.
- `function`: The function. Specify as `nil` if the graph only contains one function.

<a id="return-value"></a>

## Return Value

The minimum size, in bytes, for the workspace, or `SIZE_T_MAX` if the query fails.

<a id="Discussion"></a>

## Discussion

Call this function to obtain the minimum size of the workspace that the BNNSGraphContextExecute function requires. If you call either [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md) or [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md), call this function afterwards to obtain the new workspace size.

Note that the workspace size may not be proportional with the dynamic size. That is, smaller input and output tensors may require a larger workspace.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
