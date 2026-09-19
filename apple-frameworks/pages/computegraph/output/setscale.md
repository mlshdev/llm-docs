> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/output/setscale

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
