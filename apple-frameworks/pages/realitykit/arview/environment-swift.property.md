> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/arview/environment-swift.property

# environment

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

The view’s background, lighting, and acoustic properties.

## Declaration

```swift
@MainActor @preconcurrency var environment: ARView.Environment { get set }
```

## See Also

### Providing environmental context

- [physicsOrigin](physicsorigin.md): The entity that defines the origin of the scene’s physics simulation.
- [audioListener](audiolistener.md): The entity that defines the listener position and orientation for spatial audio.
