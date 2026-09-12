> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformer/type-nxsx](https://developer.apple.com/documentation/realitykit/meshdeformer/type-nxsx)

# type

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

provide a unique identifier for type of deformer, default implementation provided

## Declaration

```swift
var type: String { get }
```

## Default Implementations

### MeshDeformer Implementations

- [type](type-8vjw9.md): default implementation provided, returns `Self.type`

## See Also

### Identifying the deformer

- [type](type-swift.type.property.md): Provide a unique identifier for type of deformer. There can only be one `deform` function associated with each type String. However, each `deform` can vary greatly based on run time options and input.
