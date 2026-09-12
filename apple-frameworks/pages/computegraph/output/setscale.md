> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/setscale](https://developer.apple.com/documentation/computegraph/output/setscale)

# output::setScale

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the scale factor of the rendered output.

## Declaration

```swift
void output::setScale(float2 scale)
```

## Parameters

- `scale`: The scale factor to apply in X and Y dimensions.

<a id="discussion"></a>

## Discussion

This function applies a scale transformation to the rendered particle output, allowing independent control of horizontal and vertical scaling. This affects only the rendered appearance and does not modify the particle itself.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setScale.svg)
