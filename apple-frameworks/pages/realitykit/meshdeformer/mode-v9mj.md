> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformer/mode-v9mj](https://developer.apple.com/documentation/realitykit/meshdeformer/mode-v9mj)

# mode

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

specify which `deform` function will be called, default implementation is provided

## Declaration

```swift
static var mode: MeshDeformerExecutionMode { get }
```

## Default Implementations

### MeshDeformer Implementations

- [mode](mode-61otn.md): defaults to `.gpu`
- [mode](mode-99czy.md): defaults to returning static mode
