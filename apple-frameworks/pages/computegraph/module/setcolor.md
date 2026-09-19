> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/module/setcolor

# module::setColor

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the color of an element to the specified RGBA value.

## Declaration

```swift
void module::setColor(half4 color)
```

## Parameters

- `color`: The new color as a 4-component vector (red, green, blue, alpha)

<a id="discussion"></a>

## Discussion

Use this function to change the visual appearance of an element by assigning a new color with alpha channel.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__setColor.svg)
