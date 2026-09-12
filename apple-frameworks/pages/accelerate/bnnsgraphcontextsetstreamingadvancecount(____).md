> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextsetstreamingadvancecount(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextsetstreamingadvancecount(_:_:))

# BNNSGraphContextSetStreamingAdvanceCount(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Sets the streaming advancement amount for cases with dynamically shaped inputs.

## Declaration

```swift
func BNNSGraphContextSetStreamingAdvanceCount(_ context: bnns_graph_context_t, _ advance_count: Int) -> Int32
```

## Parameters

- `context`: The graph context.
- `advance_count`: An integer value that specifies the number of elements by which the function advances the internal state pointer.

<a id="discussion"></a>

## Discussion

BNNS can’t unambiguously determine the streaming advancement size for models you compile with the `BNNSOption` attribute `StateMode=Streaming` in an enabled state, where `slice_update` operations use an update parameter of dynamic shape. Call this function before calling [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md) to set the advancement size for each frame.

This function advances the internal state pointer by `advance_count` elements in the streaming dimension before returning from [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md).

> **Note**

> The BNNS streaming APIs do not support models that require different advancement amounts for different states.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.

# BNNSGraphContextSetStreamingAdvanceCount (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Sets the streaming advancement amount for cases with dynamically shaped inputs.

## Declaration

```objectivec
int BNNSGraphContextSetStreamingAdvanceCount(const bnns_graph_context_t context, size_t advance_count);
```

## Parameters

- `context`: The graph context.
- `advance_count`: An integer value that specifies the number of elements by which the function advances the internal state pointer.

<a id="discussion"></a>

## Discussion

BNNS can’t unambiguously determine the streaming advancement size for models you compile with the `BNNSOption` attribute `StateMode=Streaming` in an enabled state, where `slice_update` operations use an update parameter of dynamic shape. Call this function before calling [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md) to set the advancement size for each frame.

This function advances the internal state pointer by `advance_count` elements in the streaming dimension before returning from [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md).

> **Note**

> The BNNS streaming APIs do not support models that require different advancement amounts for different states.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
