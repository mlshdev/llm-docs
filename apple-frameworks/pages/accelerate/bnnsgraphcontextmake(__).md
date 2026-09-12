> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextmake(_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextmake(_:))

# BNNSGraphContextMake(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an allocated and initialized graph context from the specified graph.

## Declaration

```swift
func BNNSGraphContextMake(_ graph: bnns_graph_t) -> bnns_graph_context_t
```

## Parameters

- `graph`: The compiled graph object.

<a id="return-value"></a>

## Return Value

A compiled graph context object. If the operation fails, the graph object’s [data](bnns_graph_context_t/data.md) property is `nil`.

<a id="Discussion"></a>

## Discussion

To prevent memory leaks, call [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md) when you’re finished using the graph context.

## See Also

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMakeStreaming(\_:\_:\_:\_:)](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
- [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.

# BNNSGraphContextMake (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an allocated and initialized graph context from the specified graph.

## Declaration

```objectivec
bnns_graph_context_t BNNSGraphContextMake(const bnns_graph_t graph);
```

## Parameters

- `graph`: The compiled graph object.

<a id="return-value"></a>

## Return Value

A compiled graph context object. If the operation fails, the graph object’s [data](bnns_graph_context_t/data.md) property is `nil`.

<a id="Discussion"></a>

## Discussion

To prevent memory leaks, call [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md) when you’re finished using the graph context.

## See Also

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMakeStreaming](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
- [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.
