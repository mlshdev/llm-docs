> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextenablenanandinfchecks(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextenablenanandinfchecks(_:_:))

# BNNSGraphContextEnableNanAndInfChecks(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies that the context checks intermediate tensors for NaNs and infinities.

## Declaration

```swift
func BNNSGraphContextEnableNanAndInfChecks(_ context: bnns_graph_context_t, _ enable_check_for_nans_inf: Bool)
```

## Parameters

- `context`: The graph context.
- `enable_check_for_nans_inf`: If `true`, specifies that the context checks intermediate tensors for NaNs and infinities.

<a id="Discussion"></a>

## Discussion

Don’t enable this option for production code.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

# BNNSGraphContextEnableNanAndInfChecks (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies that the context checks intermediate tensors for NaNs and infinities.

## Declaration

```objectivec
void BNNSGraphContextEnableNanAndInfChecks(bnns_graph_context_t context, bool enable_check_for_nans_inf);
```

## Parameters

- `context`: The graph context.
- `enable_check_for_nans_inf`: If `true`, specifies that the context checks intermediate tensors for NaNs and infinities.

<a id="Discussion"></a>

## Discussion

Don’t enable this option for production code.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
