> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/output/outputposition

# output::outputPosition

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the position of the rendered output.

## Declaration

```swift
float3 output::outputPosition()
```

<a id="return-value"></a>

## Return Value

The 3D position of the rendered output in the graph’s local coordinate system.

<a id="discussion"></a>

## Discussion

This function retrieves the 3D position where the particle will be rendered, which may differ from the particle node’s actual position if output transformations have been applied.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__outputPosition.svg)
