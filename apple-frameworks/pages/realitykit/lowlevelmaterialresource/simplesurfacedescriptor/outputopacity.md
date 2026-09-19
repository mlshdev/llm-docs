> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/outputopacity

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
