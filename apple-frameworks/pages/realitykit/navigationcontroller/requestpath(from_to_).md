> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/navigationcontroller/requestpath(from:to:)

# requestPath(from:to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Requests a pathfind from a given position to the target position.

## Declaration

```swift
func requestPath(from startPosition: SIMD3<Float>, to targetPosition: SIMD3<Float>)
```

## See Also

### Requesting pathfinding

- [requestPath(to:)](requestpath%28to_%29.md): Requests a pathfind from the owning entity’s position to the target position.
- [stopPathfind()](stoppathfind%28%29.md): Cancels any in-progress pathfinds.
