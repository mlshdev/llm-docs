> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/output/setopacity

# output::setOpacity

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the opacity of the rendered output.

## Declaration

```swift
void output::setOpacity(half opacity)
```

## Parameters

- `opacity`: The opacity value (0.0 = fully transparent, 1.0 = fully opaque).

<a id="discussion"></a>

## Discussion

This function customizes the alpha component of the rendered particle output, controlling its transparency. This affects only the rendered appearance and does not modify the particle node itself.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setOpacity.svg)
