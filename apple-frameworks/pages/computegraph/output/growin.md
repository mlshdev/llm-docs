> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/growin](https://developer.apple.com/documentation/computegraph/output/growin)

# output::growIn

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Applies a smooth grow-in animation to the rendered output.

## Declaration

```swift
void output::growIn()
```

<a id="discussion"></a>

## Discussion

This function scales the output size from 25% to 100% over the first 0.5 seconds of the element’s lifetime using a smooth interpolation. This creates a natural appearance effect where particles start small and grow to full size.

> **Deprecated**

> This node is not general purpose and will be moved Visual: ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__growIn.svg)
