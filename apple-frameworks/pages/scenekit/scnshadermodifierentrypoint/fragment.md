> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadermodifierentrypoint/fragment](https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypoint/fragment)

# fragment (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Use this entry point to change the color of a fragment after all other shading has been performed.

## Declaration

```swift
static let fragment: SCNShaderModifierEntryPoint
```

<a id="Discussion"></a>

## Discussion

Shader modifiers for this entry point execute in the fragment processing stage.

The fragment entry point defines the following structure:

```objc
struct SCNShaderOutput {
   vec4 color;
} _output;
```

Your shader modifier reads from this structure and writes a new color to the same structure to produce the final output color for each rendered fragment.

This shader modifier inverts the output color:

```objc
_output.color.rgb = vec3(1.0) - _output.color.rgb;
```

## See Also

### Type Properties

- [geometry](geometry.md): Use this entry point to deform a geometry’s surface or alter its vertex attributes.
- [lightingModel](lightingmodel.md): Use this entry point to provide a custom lighting equation.
- [surface](surface.md): Use this entry point to modify the surface properties of a material before lighting is computed.

# SCNShaderModifierEntryPointFragment (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Use this entry point to change the color of a fragment after all other shading has been performed.

## Declaration

```objectivec
extern SCNShaderModifierEntryPoint const SCNShaderModifierEntryPointFragment;
```

<a id="Discussion"></a>

## Discussion

Shader modifiers for this entry point execute in the fragment processing stage.

The fragment entry point defines the following structure:

```objc
struct SCNShaderOutput {
   vec4 color;
} _output;
```

Your shader modifier reads from this structure and writes a new color to the same structure to produce the final output color for each rendered fragment.

This shader modifier inverts the output color:

```objc
_output.color.rgb = vec3(1.0) - _output.color.rgb;
```

## See Also

### Type Properties

- [SCNShaderModifierEntryPointGeometry](geometry.md): Use this entry point to deform a geometry’s surface or alter its vertex attributes.
- [SCNShaderModifierEntryPointLightingModel](lightingmodel.md): Use this entry point to provide a custom lighting equation.
- [SCNShaderModifierEntryPointSurface](surface.md): Use this entry point to modify the surface properties of a material before lighting is computed.
