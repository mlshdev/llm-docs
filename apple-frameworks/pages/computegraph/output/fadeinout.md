> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/fadeinout](https://developer.apple.com/documentation/computegraph/output/fadeinout)

# output::fadeInOut

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Applies a smooth fade-in and fade-out animation to the rendered output.

## Declaration

```swift
void output::fadeInOut()
```

<a id="discussion"></a>

## Discussion

This function modulates the output alpha to create a fade-in effect over the first 0.5 seconds of the element’s lifetime and a fade-out effect over the last 0.5 seconds before the element expires. The two fades are multiplied together with the existing alpha, producing a smooth lifecycle transition.

> **Deprecated**

> This node is not general purpose and will be moved Visual: ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__fadeInOut.svg)
