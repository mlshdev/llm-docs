> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/outputopacity](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/outputopacity)

# outputOpacity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the shader also writes the computed alpha to the surface opacity output.

## Declaration

```swift
var outputOpacity: Bool { get set }
```

## See Also

### Configuring the output

- [outputChannel](outputchannel-swift.property.md): The surface output channel the shader writes to.
- [LowLevelMaterialResource.SimpleSurfaceDescriptor.OutputChannel](outputchannel-swift.enum.md): The output channel that the simple surface shader writes to.
