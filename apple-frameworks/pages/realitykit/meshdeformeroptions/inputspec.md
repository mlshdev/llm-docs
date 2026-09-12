> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformeroptions/inputspec](https://developer.apple.com/documentation/realitykit/meshdeformeroptions/inputspec)

# inputSpec

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The expected vertex buffer input spec for the deformer type.

## Declaration

```swift
let inputSpec: MeshDeformerVertexOptions
```

<a id="discussion"></a>

## Discussion

This is used to determine dependencies lower in the deformation stack that may re-trigger this deformation.

## See Also

### Specifying vertex data

- [outputSpec](outputspec.md): The expected vertex buffer output spec for the deformer type.
