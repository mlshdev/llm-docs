> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextdestroy(_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextdestroy(_:))

# BNNSGraphContextDestroy(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Destroys the specified graph context.

## Declaration

```swift
func BNNSGraphContextDestroy(_ context: bnns_graph_context_t)
```

## Parameters

- `context`: The graph context.

## See Also

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMake(\_:)](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextMakeStreaming(\_:\_:\_:\_:)](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.

# BNNSGraphContextDestroy (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Destroys the specified graph context.

## Declaration

```objectivec
void BNNSGraphContextDestroy(bnns_graph_context_t context);
```

## Parameters

- `context`: The graph context.

## See Also

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMake](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextMakeStreaming](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
