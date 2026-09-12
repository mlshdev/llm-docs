> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/streamingadvancecount](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/streamingadvancecount)

# streamingAdvanceCount

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets streaming advancement amount for cases with dynamically shaped inputs.

## Declaration

```swift
var streamingAdvanceCount: Int { get set }
```

## Parameters

- `context`: The graph context.
- `advance_count`: An integer value that specifies the number of elements that the function advances the internal state pointer.

<a id="discussion"></a>

## Discussion

For models compiled with the `BNNSOption` attribute `StateMode=Streaming` enabled, where `slice_update` operations use an update parameter of dynamic shape, BNNS can’t unambigiously determine the streaming advancement size. In this case, call this function before calling [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](../../bnnsgraphcontextexecute%28____________%29.md) to set the advancement size for each frame.

This function advances the internal state pointer by `advance_count` elements in the streaming dimension before returning from [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](../../bnnsgraphcontextexecute%28____________%29.md).

> **Note**

> The BNNS streaming APIs do not support models that require different advancement amounts for different states.
