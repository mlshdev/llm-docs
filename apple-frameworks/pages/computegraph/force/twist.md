> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/force/twist](https://developer.apple.com/documentation/computegraph/force/twist)

# force::twist

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Applies a twisting force around a vertical axis through a specified origin point.

## Declaration

```swift
void force::twist(float3 origin, float strength, float attraction)
```

## Parameters

- `origin`: The 3D point in world space around which the twist force is centered.
- `strength`: The magnitude of the tangential (rotational) force. Higher values create stronger rotation.
- `attraction`: The magnitude of the radial force. Positive values attract elements toward the origin, while negative values repel elements away from the origin.

<a id="discussion"></a>

## Discussion

This function creates a vortex-like effect by applying two force components: a tangential force that causes rotation around the origin, and an optional attractive or repulsive force toward or away from the origin. The twist occurs around a vertical (Y-axis) through the specified origin point.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/force__twist.svg)
