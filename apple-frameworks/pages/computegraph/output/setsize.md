> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/setsize](https://developer.apple.com/documentation/computegraph/output/setsize)

# output::setSize

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the size of the rendered output.

## Declaration

```swift
void output::setSize(float2 size)
```

## Parameters

- `size`: The size to apply in X and Y dimensions.

<a id="discussion"></a>

## Discussion

This function directly sets the dimensions of the rendered particle output in world or screen space units. This affects only the rendered appearance and does not modify the particle itself.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setSize.svg)
