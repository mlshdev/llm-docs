> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/commandqueue

# commandQueue

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

If this scene uses a MTLCommandQueue for rendering, returns it.

## Declaration

```swift
@MainActor @preconcurrency var commandQueue: (any MTLCommandQueue)? { get }
```

<a id="discussion"></a>

## Discussion

You use this command queue for GPU workloads that need consistent ordering relative to RealityKit’s scene rendering.
