> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/collisioncomponent/isstatic

# isStatic

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A Boolean value that indicates whether the collider is static.

## Declaration

```swift
var isStatic: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When an object is static the physics engine recognizes that the object isn’t moving, which typically improves performance.
