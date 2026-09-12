> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/module/setalpha](https://developer.apple.com/documentation/computegraph/module/setalpha)

# module::setAlpha

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the alpha (opacity) value of an element.

## Declaration

```swift
void module::setAlpha(half alpha)
```

## Parameters

- `alpha`: The alpha value, where 0.0 is fully transparent and 1.0 is fully opaque

<a id="discussion"></a>

## Discussion

Use this function to control the transparency of an element without modifying its RGB color components.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__setAlpha.svg)
