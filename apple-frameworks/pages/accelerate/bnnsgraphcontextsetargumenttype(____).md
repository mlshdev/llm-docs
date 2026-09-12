> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextsetargumenttype(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextsetargumenttype(_:_:))

# BNNSGraphContextSetArgumentType(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies the argument type for a graph context.

## Declaration

```swift
func BNNSGraphContextSetArgumentType(_ context: bnns_graph_context_t, _ argument_type: BNNSGraphArgumentType) -> Int32
```

## Parameters

- `context`: The graph context.
- `argument_type`: A constant that specifies the argument type.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

Some arguments require dynamic strides. In this case, set the graph context’s argument type to [BNNSGraphArgumentTypeTensor](bnnsgraphargumenttypetensor.md) and pass the arguments to [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md) as [BNNSTensor](bnnstensor.md) structures.

The default argument type for a graph context is [BNNSGraphArgumentTypePointer](bnnsgraphargumenttypepointer.md).

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

# BNNSGraphContextSetArgumentType (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies the argument type for a graph context.

## Declaration

```objectivec
int BNNSGraphContextSetArgumentType(bnns_graph_context_t context, BNNSGraphArgumentType argument_type);
```

## Parameters

- `context`: The graph context.
- `argument_type`: A constant that specifies the argument type.

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

Some arguments require dynamic strides. In this case, set the graph context’s argument type to [BNNSGraphArgumentTypeTensor](bnnsgraphargumenttypetensor.md) and pass the arguments to [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md) as [BNNSTensor](bnnstensor.md) structures.

The default argument type for a graph context is [BNNSGraphArgumentTypePointer](bnnsgraphargumenttypepointer.md).

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
