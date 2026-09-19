> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/module/addvelocity

# module::addVelocity

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Adds a velocity delta to the element’s current velocity.

## Declaration

```swift
void module::addVelocity(float3 velocity)
```

## Parameters

- `velocity`: The velocity vector to add to the current velocity

<a id="discussion"></a>

## Discussion

Use this function to incrementally adjust an element’s velocity by adding a velocity vector to its existing value.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/module__addVelocity.svg)
