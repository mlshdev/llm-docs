> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshdeformer/mode-6ci1w

# mode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

specify which `deform` function will be called, default implementation is provided

## Declaration

```swift
var mode: MeshDeformerExecutionMode { get }
```

## Default Implementations

### MeshDeformer Implementations

- [mode](mode-61otn.md): defaults to `.gpu`
- [mode](mode-99czy.md): defaults to returning static mode
