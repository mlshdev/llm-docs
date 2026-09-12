> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_free_all_fn_t](https://developer.apple.com/documentation/accelerate/bnns_graph_free_all_fn_t)

# bnns_graph_free_all_fn_t (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The workspace and output deallocation function.

## Declaration

```swift
typealias bnns_graph_free_all_fn_t = (UnsafeMutableRawPointer?, Int) -> Void
```

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

BNNS calls this function on the destruction of a graph context and should free all memory associated to the `user_memory_context`.

If you’ve supplied the same `user_memory_context` to both [BNNSGraphContextSetWorkspaceAllocationCallback(\_:\_:\_:\_:\_:)](bnnsgraphcontextsetworkspaceallocationcallback%28__________%29.md) and [BNNSGraphContextSetOutputAllocationCallback(\_:\_:\_:\_:\_:)](bnnsgraphcontextsetoutputallocationcallback%28__________%29.md), BNNS calls this function once, during [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md).

## See Also

### Specifying a context’s allocation callbacks

- [BNNSGraphContextSetWorkspaceAllocationCallback(\_:\_:\_:\_:\_:)](bnnsgraphcontextsetworkspaceallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for internal workspace.
- [BNNSGraphContextSetOutputAllocationCallback(\_:\_:\_:\_:\_:)](bnnsgraphcontextsetoutputallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for function outputs.
- [bnns_graph_realloc_fn_t](bnns_graph_realloc_fn_t.md): The workspace and output allocation function.

# bnns_graph_free_all_fn_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The workspace and output deallocation function.

## Declaration

```objectivec
typedef void (*)(void *, unsigned long) bnns_graph_free_all_fn_t;
```

<a id="return-value"></a>

## Return Value

`0` on success, nonzero on failure.

<a id="Discussion"></a>

## Discussion

BNNS calls this function on the destruction of a graph context and should free all memory associated to the `user_memory_context`.

If you’ve supplied the same `user_memory_context` to both [BNNSGraphContextSetWorkspaceAllocationCallback](bnnsgraphcontextsetworkspaceallocationcallback%28__________%29.md) and [BNNSGraphContextSetOutputAllocationCallback](bnnsgraphcontextsetoutputallocationcallback%28__________%29.md), BNNS calls this function once, during [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md).

## See Also

### Specifying a context’s allocation callbacks

- [BNNSGraphContextSetWorkspaceAllocationCallback](bnnsgraphcontextsetworkspaceallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for internal workspace.
- [BNNSGraphContextSetOutputAllocationCallback](bnnsgraphcontextsetoutputallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for function outputs.
- [bnns_graph_realloc_fn_t](bnns_graph_realloc_fn_t.md): The workspace and output allocation function.
