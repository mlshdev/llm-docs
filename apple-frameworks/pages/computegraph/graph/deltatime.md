> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/graph/deltatime

# graph::deltaTime

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the time elapsed since the last frame.

## Declaration

```swift
float graph::deltaTime()
```

<a id="return-value"></a>

## Return Value

The delta time in seconds

<a id="discussion"></a>

## Discussion

Delta time represents the duration between the current frame and the previous frame, allowing for frame-rate independent animations and simulations.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/graph__deltaTime.svg)
