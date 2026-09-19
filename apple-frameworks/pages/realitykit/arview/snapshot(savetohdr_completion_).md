> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/arview/snapshot(savetohdr:completion:)

# snapshot(saveToHDR:completion:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Takes a screenshot.

## Declaration

```swift
@MainActor @preconcurrency func snapshot(saveToHDR: Bool, completion: @escaping (ARView.Image?) -> Void)
```
