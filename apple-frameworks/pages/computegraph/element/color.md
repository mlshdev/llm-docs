> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/element/color

# element::color

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the current color of the element.

## Declaration

```swift
half4 element::color()
```

<a id="return-value"></a>

## Return Value

The color as a 4-component vector (red, green, blue, alpha)

<a id="discussion"></a>

## Discussion

Use this function to read the element’s RGBA color values, including both the color channels and opacity.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/element__color.svg)
