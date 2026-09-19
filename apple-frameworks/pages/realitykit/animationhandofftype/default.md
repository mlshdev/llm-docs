> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationhandofftype/default

# default

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Provides the default behavior.

## Declaration

```swift
static var `default`: AnimationHandoffType { get }
```

<a id="discussion"></a>

## Discussion

If the `layerId` in the `playAnimation()` call is a non-zero value, the default behavior is a [compose](compose.md) handoff . If the `layerId` is `0,` then the default behavior is a `snapshotAndReplace(applyToAllLayers: true)` handoff.
