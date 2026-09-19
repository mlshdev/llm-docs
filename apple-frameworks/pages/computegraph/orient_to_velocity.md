> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/orient_to_velocity

# orient_to_velocity

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Orient the particle by setting its `axisY` to the velocity’s current direction.

## Declaration

```swift
void orient_to_velocity()
```

<a id="discussion"></a>

## Discussion

Adding this node will cause a `float3 axisY` attribute to be added, if one doesn’t already exist.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/orient_to_velocity.svg)

> **Note**

> Reads from element state `float3 velocity`, if it exists

> **Note**

> Writes to element state `float3 axisY`
