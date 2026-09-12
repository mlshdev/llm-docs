> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/outputindex](https://developer.apple.com/documentation/computegraph/output/outputindex)

# output::outputIndex

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the index of the current output element being processed.

## Declaration

```swift
uint output::outputIndex()
```

<a id="return-value"></a>

## Return Value

The zero-based index of the current output element.

<a id="discussion"></a>

## Discussion

This function provides the zero-based index of the output element within the current output range, useful for per-element computations and indexing operations. If sorting is active, this corresponds to the post-sorting ordering.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__outputIndex.svg)
