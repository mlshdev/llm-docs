> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/init(usetintcolor:usetexture:outputchannel:outputopacity:)](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/init(usetintcolor:usetexture:outputchannel:outputopacity:))

# init(useTintColor:useTexture:outputChannel:outputOpacity:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor for the specified combination of inputs and outputs.

## Declaration

```swift
init(useTintColor: Bool, useTexture: Bool, outputChannel: LowLevelMaterialResource.SimpleSurfaceDescriptor.OutputChannel, outputOpacity: Bool)
```

## Parameters

- `useTintColor`: If `true`, the shader reads a tint color from the argument table and multiplies it with the surface output.
- `useTexture`: If `true`, the shader samples a texture from the argument table and multiplies it with the surface output.
- `outputChannel`: The surface output channel the shader writes to.
- `outputOpacity`: If `true`, the shader also writes the computed alpha to the surface opacity output.
