> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_context_t](https://developer.apple.com/documentation/accelerate/bnns_graph_context_t)

# bnns_graph_context_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An object that wraps a compiled graph object.

## Declaration

```swift
struct bnns_graph_context_t
```

<a id="overview"></a>

## Overview

The [bnns_graph_context_t](bnns_graph_context_t.md) object wraps a [bnns_graph_t](bnns_graph_t.md) instance and adds mutable data storage. BNNS requires mutability to support dynamic shapes and other execution objects.

You must ensure that the underlying [bnns_graph_t](bnns_graph_t.md) instance remains valid throughout the lifetime of the context.

## Topics

### Initializing a context

- [init()](bnns_graph_context_t/init%28%29.md): Creates an empty graph context structure.
- [init(data:size:)](bnns_graph_context_t/init%28data_size_%29.md): Creates a graph context structure from the specified opaque graph context object.

### Specifying a context’s properties

- [data](bnns_graph_context_t/data.md): A pointer to the opaque graph context object.
- [size](bnns_graph_context_t/size.md): The size, in bytes, of the opaque graph context object.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Creating and destroying a context

- [BNNSGraphContextMake(\_:)](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextMakeStreaming(\_:\_:\_:\_:)](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
- [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.

# bnns_graph_context_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that wraps a compiled graph object.

## Declaration

```objectivec
typedef struct { ... } bnns_graph_context_t;
```

<a id="overview"></a>

## Overview

The [bnns_graph_context_t](bnns_graph_context_t.md) object wraps a [bnns_graph_t](bnns_graph_t.md) instance and adds mutable data storage. BNNS requires mutability to support dynamic shapes and other execution objects.

You must ensure that the underlying [bnns_graph_t](bnns_graph_t.md) instance remains valid throughout the lifetime of the context.

## Topics

### Specifying a context’s properties

- [data](bnns_graph_context_t/data.md): A pointer to the opaque graph context object.
- [size](bnns_graph_context_t/size.md): The size, in bytes, of the opaque graph context object.

## See Also

### Creating and destroying a context

- [BNNSGraphContextMake](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextMakeStreaming](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
- [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.
