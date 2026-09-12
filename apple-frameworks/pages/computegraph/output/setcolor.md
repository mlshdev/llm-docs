> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/setcolor](https://developer.apple.com/documentation/computegraph/output/setcolor)

# output::setColor

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the color of the rendered output.

## Declaration

```swift
void output::setColor(half4 color)
```

## Parameters

- `color`: The RGBA color value to apply, using half-precision components.

<a id="discussion"></a>

## Discussion

This function customizes the color applied to the rendered particle output, including the alpha channel. This affects only the rendered appearance and does not modify the particle itself.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setColor.svg)
