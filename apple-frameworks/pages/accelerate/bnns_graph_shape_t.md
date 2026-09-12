> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_shape_t](https://developer.apple.com/documentation/accelerate/bnns_graph_shape_t)

# bnns_graph_shape_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The specification of the shape of an argument.

## Declaration

```swift
struct bnns_graph_shape_t
```

<a id="overview"></a>

## Overview

Use a [bnns_graph_shape_t](bnns_graph_shape_t.md) structure to pass the rank and dimensions of tensors to the [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md) function.

## Topics

### Initializing a graph shape

- [init()](bnns_graph_shape_t/init%28%29.md): Creates an empty shape structure.
- [init(rank:shape:)](bnns_graph_shape_t/init%28rank_shape_%29.md): Creates a shape structure with the specified rank and dimensions.

### Specifying a shape’s properties

- [rank](bnns_graph_shape_t/rank.md): The rank of the shape.
- [shape](bnns_graph_shape_t/shape.md): An array of unsigned-integer elements that specify the size of the shape.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

# bnns_graph_shape_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The specification of the shape of an argument.

## Declaration

```objectivec
typedef struct { ... } bnns_graph_shape_t;
```

<a id="overview"></a>

## Overview

Use a [bnns_graph_shape_t](bnns_graph_shape_t.md) structure to pass the rank and dimensions of tensors to the [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md) function.

## Topics

### Specifying a shape’s properties

- [rank](bnns_graph_shape_t/rank.md): The rank of the shape.
- [shape](bnns_graph_shape_t/shape.md): An array of unsigned-integer elements that specify the size of the shape.

## See Also

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
