> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/program-swift.class/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/custommaterial/program-swift.class/descriptor-swift.struct)

# CustomMaterial.Program.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

An object that specifies all parameters necessary to initialize `CustomMaterial` programs

## Declaration

```swift
struct Descriptor
```

## Topics

### Initializers

- [init()](descriptor-swift.struct/init%28%29.md)

### Instance Properties

- [blendMode](descriptor-swift.struct/blendmode.md): Modes that describe how materials using the created `CustomMaterial.Program` will be blended with content behind them.
- [lightingModel](descriptor-swift.struct/lightingmodel.md): Modes that describe how materials using created `CustomMaterial.Program` will interact with light within the RealityKit scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shaders

- [Implementing adjustable material](../../../visionos/implementing-adjustable-material-in-visionos.md): Update the adjustable parameters of a 3D model in visionOS.
- [Displaying a stereoscopic image](../../../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [ShaderGraphMaterial](../../shadergraphmaterial.md): A material that comes from a shader graph in a Reality Composer Pro project, or a MaterialX shader.
- [ShaderGraphMaterial.FaceCulling](../../shadergraphmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [ShaderGraphMaterial.TriangleFillMode](../../shadergraphmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.
- [Modifying RealityKit rendering using custom materials](../../modifying-realitykit-rendering-using-custom-materials.md): Write Metal shader functions to implement custom rendering effects.
- [CustomMaterial](../../custommaterial.md): A material that works with custom Metal shader functions.
- [CustomMaterial.SurfaceShader](../surfaceshader.md): The custom material’s surface shader function.
- [CustomMaterial.GeometryModifier](../geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [MaterialFunction](../../materialfunction.md): The abstract superclass for objects representing compute functions for RealityKit custom materials .
- [CustomMaterial.Program](../program-swift.class.md): An object that represents the backing shader compilation required for custom materials.
- [CustomShaderStage](../../customshaderstage.md)
