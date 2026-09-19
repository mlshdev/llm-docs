> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/viewpoint-swift.func

# viewpoint

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the current viewpoint, if one is provided.

## Declaration

```swift
Viewpoint viewpoint()
```

<a id="discussion"></a>

## Discussion

Depending on context, this may include direction, position, or both values. On visionOS, a `ParticleViewpoint` component needs to be added to the scene to automatically provide this value.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/viewpoint.svg)

> **Note**

> Reads from shared uniform Viewpoint
