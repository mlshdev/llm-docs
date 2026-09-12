> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadermodifierentrypoint/geometry](https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypoint/geometry)

# geometry (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Use this entry point to deform a geometry’s surface or alter its vertex attributes.

## Declaration

```swift
static let geometry: SCNShaderModifierEntryPoint
```

<a id="Discussion"></a>

## Discussion

Shader modifiers for this entry point execute in the vertex processing stage.

The geometry entry point declares the following structure:

```objc
struct SCNShaderGeometry {
   vec3 position;
   vec3 normal;
   vec4 tangent;
   vec2 texcoords[kSCNTexcoordCount];
} _geometry;
```

Your shader modifier reads from this structure and writes new values to the same structure to alter the geometric properties of each vertex in a geometry.

The `position`, `normal`, and `tangent` fields are expressed in model space. You can use SceneKit’s uniforms (such as `u_modelViewTransform`) to operate in a different coordinate space, but you must convert back to model space before writing results.

The `kSCNTexcoordCount` variable is a constant integer corresponding to the geometry’s number of texture coordinate sources. Each set of coordinates in the `texcoords` field contains raw values from the geometry—SceneKit applies the [contentsTransform](../scnmaterialproperty/contentstransform.md) transformation (if any) after the geometry shader modifier completes.

The below shader modifier produces an animated sinusoidal deformation:

```objc
uniform float Amplitude = 0.1;
 
_geometry.position +=
    _geometry.normal *
    (Amplitude*_geometry.position.y*_geometry.position.x) *
    sin(1.0 * u_time);
```

## See Also

### Type Properties

- [fragment](fragment.md): Use this entry point to change the color of a fragment after all other shading has been performed.
- [lightingModel](lightingmodel.md): Use this entry point to provide a custom lighting equation.
- [surface](surface.md): Use this entry point to modify the surface properties of a material before lighting is computed.

# SCNShaderModifierEntryPointGeometry (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Use this entry point to deform a geometry’s surface or alter its vertex attributes.

## Declaration

```objectivec
extern SCNShaderModifierEntryPoint const SCNShaderModifierEntryPointGeometry;
```

<a id="Discussion"></a>

## Discussion

Shader modifiers for this entry point execute in the vertex processing stage.

The geometry entry point declares the following structure:

```objc
struct SCNShaderGeometry {
   vec3 position;
   vec3 normal;
   vec4 tangent;
   vec2 texcoords[kSCNTexcoordCount];
} _geometry;
```

Your shader modifier reads from this structure and writes new values to the same structure to alter the geometric properties of each vertex in a geometry.

The `position`, `normal`, and `tangent` fields are expressed in model space. You can use SceneKit’s uniforms (such as `u_modelViewTransform`) to operate in a different coordinate space, but you must convert back to model space before writing results.

The `kSCNTexcoordCount` variable is a constant integer corresponding to the geometry’s number of texture coordinate sources. Each set of coordinates in the `texcoords` field contains raw values from the geometry—SceneKit applies the [contentsTransform](../scnmaterialproperty/contentstransform.md) transformation (if any) after the geometry shader modifier completes.

The below shader modifier produces an animated sinusoidal deformation:

```objc
uniform float Amplitude = 0.1;
 
_geometry.position +=
    _geometry.normal *
    (Amplitude*_geometry.position.y*_geometry.position.x) *
    sin(1.0 * u_time);
```

## See Also

### Type Properties

- [SCNShaderModifierEntryPointFragment](fragment.md): Use this entry point to change the color of a fragment after all other shading has been performed.
- [SCNShaderModifierEntryPointLightingModel](lightingmodel.md): Use this entry point to provide a custom lighting equation.
- [SCNShaderModifierEntryPointSurface](surface.md): Use this entry point to modify the surface properties of a material before lighting is computed.
