> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/force/add

# force::add

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Adds a constant force vector to the current element.

## Declaration

```swift
void force::add(float3 force)
```

## Parameters

- `force`: The 3D force vector to add to the element.

<a id="discussion"></a>

## Discussion

This function applies a specified force to the element by adding it to the force accumulator. Multiple forces can be combined by calling this function (or other force functions) multiple times during simulation.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/force__add.svg)
