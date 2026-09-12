> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/output/setoutputposition](https://developer.apple.com/documentation/computegraph/output/setoutputposition)

# output::setOutputPosition

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the position of the rendered output.

## Declaration

```swift
void output::setOutputPosition(float3 position)
```

## Parameters

- `position`: The 3D position where the output should be rendered, in the graph’s local coordinate system.

<a id="discussion"></a>

## Discussion

This function customizes where the particle will be rendered in 3D space. This affects only the rendered appearance and does not modify the particle node’s actual position.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/output__setOutputPosition.svg)
