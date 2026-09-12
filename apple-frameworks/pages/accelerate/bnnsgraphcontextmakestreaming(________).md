> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcontextmakestreaming(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcontextmakestreaming(_:_:_:_:))

# BNNSGraphContextMakeStreaming(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an allocated and initialized graph context with streaming support from the specified graph.

## Declaration

```swift
func BNNSGraphContextMakeStreaming(_ graph: bnns_graph_t, _ function: UnsafePointer<CChar>?, _ initial_states_count: Int, _ initial_states: UnsafePointer<BNNSTensor>?) -> bnns_graph_context_t
```

## Parameters

- `graph`: The compiled graph object.
- `function`: The function that the new context initializes the state for. Specify as `nil` if the graph only contains one function.
- `initial_states_count`: The number of elements in the `initial_states_count` array.
- `initial_states`: An array of [BNNSTensor](bnnstensor.md) structures that describe the data that the context uses to initialize each state. The context uses `initial_states[i]` to intialize the state with the name `initial_state[i]->name`.

<a id="return-value"></a>

## Return Value

A compiled graph context object. If the operation fails, the graph object’s [data](bnns_graph_context_t/data.md) property is `nil`.

<a id="Discussion"></a>

## Discussion

In addition to the work that [BNNSGraphContextMake(\_:)](bnnsgraphcontextmake%28__%29.md) performs, this call allocates ring-buffer backed memory for all [Core ML](../coreml.md) state arguments of the given function.

If your model runs on a stream of data, such as processing audio data, it may benefit from working on one frame at a time. You can express this functionality through a model that uses Core ML’s concept of states. In this case, BNNS stores information that the model needs from a previous frame in the state that dilations on convolution layers may require.

If your model uses the pattern below, use this function to specify that BNNS uses an optimized mode that allocates and manages ring buffers for states. Doing so eliminates memory copies associated with the approach.

```c
output_state = concat(input_state, tensorX)
```

BNNS advances the ring buffer by the size of `tensorX` in the concatenation dimension after the function executes.

To use a context with streaming support, your function must include an attribute dictionary named `BNNSOptions` that includes the entry `{ ‘StateMode’: ‘Streaming’ }`. This specifies that the [BNNSGraphCompileFromFile(\_:\_:\_:)](bnnsgraphcompilefromfile%28______%29.md) function encodes additional metadata into the graph that describes the streaming rate.

Calls to [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md) that use contexts this function creates ignore any user-provided pointers for input and output arguments. Instead, context execution uses the internal ring buffer and updates any nonnull input and output arguments to point to the same ring-buffer backed memory. On return, an analysis of the compiled program for use in the next frame determines the distance by which the operation advances the ring buffer.

To prevent memory leaks, call [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md) when you’re finished using the graph context.

## See Also

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMake(\_:)](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.

# BNNSGraphContextMakeStreaming (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns an allocated and initialized graph context with streaming support from the specified graph.

## Declaration

```objectivec
bnns_graph_context_t BNNSGraphContextMakeStreaming(bnns_graph_t graph, const char *function, size_t initial_states_count, const BNNSTensor *initial_states);
```

## Parameters

- `graph`: The compiled graph object.
- `function`: The function that the new context initializes the state for. Specify as `nil` if the graph only contains one function.
- `initial_states_count`: The number of elements in the `initial_states_count` array.
- `initial_states`: An array of [BNNSTensor](bnnstensor.md) structures that describe the data that the context uses to initialize each state. The context uses `initial_states[i]` to intialize the state with the name `initial_state[i]->name`.

<a id="return-value"></a>

## Return Value

A compiled graph context object. If the operation fails, the graph object’s [data](bnns_graph_context_t/data.md) property is `nil`.

<a id="Discussion"></a>

## Discussion

In addition to the work that [BNNSGraphContextMake](bnnsgraphcontextmake%28__%29.md) performs, this call allocates ring-buffer backed memory for all [Core ML](../coreml.md) state arguments of the given function.

If your model runs on a stream of data, such as processing audio data, it may benefit from working on one frame at a time. You can express this functionality through a model that uses Core ML’s concept of states. In this case, BNNS stores information that the model needs from a previous frame in the state that dilations on convolution layers may require.

If your model uses the pattern below, use this function to specify that BNNS uses an optimized mode that allocates and manages ring buffers for states. Doing so eliminates memory copies associated with the approach.

```c
output_state = concat(input_state, tensorX)
```

BNNS advances the ring buffer by the size of `tensorX` in the concatenation dimension after the function executes.

To use a context with streaming support, your function must include an attribute dictionary named `BNNSOptions` that includes the entry `{ ‘StateMode’: ‘Streaming’ }`. This specifies that the [BNNSGraphCompileFromFile](bnnsgraphcompilefromfile%28______%29.md) function encodes additional metadata into the graph that describes the streaming rate.

Calls to [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md) that use contexts this function creates ignore any user-provided pointers for input and output arguments. Instead, context execution uses the internal ring buffer and updates any nonnull input and output arguments to point to the same ring-buffer backed memory. On return, an analysis of the compiled program for use in the next frame determines the distance by which the operation advances the ring buffer.

To prevent memory leaks, call [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md) when you’re finished using the graph context.

## See Also

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMake](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.
