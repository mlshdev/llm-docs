> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial](https://developer.apple.com/documentation/realitykit/shadergraphmaterial)

# ShaderGraphMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A material that comes from a shader graph in a Reality Composer Pro project, or a MaterialX shader.

## Declaration

```swift
struct ShaderGraphMaterial
```

<a id="overview"></a>

## Overview

Use ShaderGraphMaterial when retrieving a shaders you build in Reality Composer Pro’s shader graph. The following code demonstrates retrieving the first material from an entity loaded from a Reality Composer Proj project and sets a new value for one of its named parameters:

```swift
if var modelComponent = entity.modelComponent {
    modelComponent.materials = modelComponent.materials.map {
        guard var material = $0 as? ShaderGraphMaterial else { return $0 }
        if material.parameterNames.contains(myMaterialParameterName) {
            do {
                try material.setParameter(name: myMaterialParameterName,
                                          value: .float(isPowered ? 1.0 : 0.0))
            } catch {
                // Handle error.
            }
        }
        return material
    }
    entity.modelComponent = modelComponent
}
```

In addition to creating instances of `ShaderGraphMaterial` from Reality Composer Pro’s shader graph, you can also create them directly from Material X shaders.

You can also load shader graph materials directly from `.reality` files:

```swift
let shader = try! await ShaderGraphMaterial(named: "/Root/Glass", from: "Scene.usda")
```

For more information on using custom parameters in a `ShaderGraphMaterial`,  see doc://documentation.apple.com/documentation/visionos/implementing-adjustable-material-in-visionos.

Create dynamic materials without Metal.

## Topics

### Shader Graph fundamentals

- [Reality Composer Pro](https://developer.apple.com/documentation/realitycomposerpro): Build, design, and orchestrate 3D content for your RealityKit apps.
- [Material](material.md): A type that describes the material aspects of a mesh, like color and texture.
- [MaterialParameterTypes](materialparametertypes.md): A set of types that material parameters can use.

### Accessing the program

- [program](shadergraphmaterial/program-swift.property.md)
- [ShaderGraphMaterial.Program](shadergraphmaterial/program-swift.struct.md)

### Initializers

- [init(materialXLabel:data:)](shadergraphmaterial/init%28materialxlabel_data_%29.md): Loads a ShaderGraphMaterial from MaterialX data.
- [init(named:from:)](shadergraphmaterial/init%28named_from_%29.md): Loads a ShaderGraphMaterial from a named material within a USD file.
- [init(named:from:in:)](shadergraphmaterial/init%28named_from_in_%29.md): Loads a ShaderGraphMaterial from a bundle.
- [init(program:)](shadergraphmaterial/init%28program_%29.md): Create a ShaderGraphMaterial with an already initialized Program. Use this method when you want to preload a library of shaders and create instances of them quickly and synchronously via ShaderGraphMaterials at runtime.

### Instance Properties

- [faceCulling](shadergraphmaterial/faceculling-swift.property.md): A process in which the system specifies polygons to remove before rendering a mesh using this material.
- [parameterNames](shadergraphmaterial/parameternames.md)
- [readsDepth](shadergraphmaterial/readsdepth.md): A boolean value that determines whether this material performs the depth test by reading RealityKit’s depth buffer.
- [triangleFillMode](shadergraphmaterial/trianglefillmode-swift.property.md): The object that controls how RealityKit draws triangles.
- [writesDepth](shadergraphmaterial/writesdepth.md): A boolean value that determines whether this material writes its depth into RealityKit’s depth buffer.

### Instance Methods

- [getParameter(handle:)](shadergraphmaterial/getparameter%28handle_%29.md)
- [getParameter(name:)](shadergraphmaterial/getparameter%28name_%29.md)
- [setParameter(handle:value:)](shadergraphmaterial/setparameter%28handle_value_%29.md)
- [setParameter(name:value:)](shadergraphmaterial/setparameter%28name_value_%29.md)

### Type Aliases

- [ShaderGraphMaterial.FaceCulling](shadergraphmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [ShaderGraphMaterial.TriangleFillMode](shadergraphmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.

### Type Methods

- [parameterHandle(name:)](shadergraphmaterial/parameterhandle%28name_%29.md)

### Enumerations

- [ShaderGraphMaterial.Error](shadergraphmaterial/error.md)
- [ShaderGraphMaterial.LoadError](shadergraphmaterial/loaderror.md)

## Relationships

### Conforms To

- [Material](material.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shaders

- [Implementing adjustable material](../visionos/implementing-adjustable-material-in-visionos.md): Update the adjustable parameters of a 3D model in visionOS.
- [Displaying a stereoscopic image](../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [ShaderGraphMaterial.FaceCulling](shadergraphmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [ShaderGraphMaterial.TriangleFillMode](shadergraphmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.
- [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md): Write Metal shader functions to implement custom rendering effects.
- [CustomMaterial](custommaterial.md): A material that works with custom Metal shader functions.
- [CustomMaterial.SurfaceShader](custommaterial/surfaceshader.md): The custom material’s surface shader function.
- [CustomMaterial.GeometryModifier](custommaterial/geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [MaterialFunction](materialfunction.md): The abstract superclass for objects representing compute functions for RealityKit custom materials .
- [CustomMaterial.Program](custommaterial/program-swift.class.md): An object that represents the backing shader compilation required for custom materials.
- [CustomMaterial.Program.Descriptor](custommaterial/program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs
- [CustomShaderStage](customshaderstage.md)
