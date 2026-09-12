> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/setuvtransform](https://developer.apple.com/documentation/computegraph/output/setuvtransform)

# output::setUVTransform

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the UV0 coordinate transformation for the rendered output.

## Declaration

```swift
void output::setUVTransform(float2 uvOffset, float2 uvScale)
```

## Parameters

- `uvOffset`: The offset to apply to UV0 coordinates.
- `uvScale`: The scale factor to apply to UV0 coordinates.

<a id="discussion"></a>

## Discussion

This function customizes how texture coordinates are applied to the rendered output by specifying an offset and scale. The UV transform affects texture mapping without modifying the underlying particle data.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setUVTransform.svg)
