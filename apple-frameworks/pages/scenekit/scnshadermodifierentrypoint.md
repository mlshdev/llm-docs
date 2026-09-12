> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadermodifierentrypoint](https://developer.apple.com/documentation/scenekit/scnshadermodifierentrypoint)

# SCNShaderModifierEntryPoint (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Keys for the [shaderModifiers](scnshadable/shadermodifiers.md) dictionary, each corresponding to an entry point in SceneKit’s shader programs where you can attach a custom GPU shader code snippet.

## Declaration

```swift
struct SCNShaderModifierEntryPoint
```

<a id="Discussion"></a>

## Discussion

For details on shader modifiers, see [Use Shader Modifiers to Extend SceneKit Shading](scnshadable.md#Use-Shader-Modifiers-to-Extend-SceneKit-Shading) in the protocol overview.

SceneKit inserts your shader modifiers into its shader program in the order shown here, so you can use the structures defined by earlier entry points in later entry points. For example, a snippet associated with the [fragment](scnshadermodifierentrypoint/fragment.md) entry point can read from the `_surface` structure defined by the [surface](scnshadermodifierentrypoint/surface.md) entry point.

## Topics

### Type Properties

- [fragment](scnshadermodifierentrypoint/fragment.md): Use this entry point to change the color of a fragment after all other shading has been performed.
- [geometry](scnshadermodifierentrypoint/geometry.md): Use this entry point to deform a geometry’s surface or alter its vertex attributes.
- [lightingModel](scnshadermodifierentrypoint/lightingmodel.md): Use this entry point to provide a custom lighting equation.
- [surface](scnshadermodifierentrypoint/surface.md): Use this entry point to modify the surface properties of a material before lighting is computed.

### Initializers

- [init(rawValue:)](scnshadermodifierentrypoint/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [SCNBindingBlock](scnbindingblock.md): The signature for a block called for binding or unbinding a GLSL symbol in a custom program.

# SCNShaderModifierEntryPoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Keys for the [shaderModifiers](scnshadable/shadermodifiers.md) dictionary, each corresponding to an entry point in SceneKit’s shader programs where you can attach a custom GPU shader code snippet.

## Declaration

```objectivec
typedef NSString * SCNShaderModifierEntryPoint;
```

<a id="Discussion"></a>

## Discussion

For details on shader modifiers, see [Use Shader Modifiers to Extend SceneKit Shading](scnshadable.md#Use-Shader-Modifiers-to-Extend-SceneKit-Shading) in the protocol overview.

SceneKit inserts your shader modifiers into its shader program in the order shown here, so you can use the structures defined by earlier entry points in later entry points. For example, a snippet associated with the [SCNShaderModifierEntryPointFragment](scnshadermodifierentrypoint/fragment.md) entry point can read from the `_surface` structure defined by the [SCNShaderModifierEntryPointSurface](scnshadermodifierentrypoint/surface.md) entry point.

## Topics

### Type Properties

- [SCNShaderModifierEntryPointFragment](scnshadermodifierentrypoint/fragment.md): Use this entry point to change the color of a fragment after all other shading has been performed.
- [SCNShaderModifierEntryPointGeometry](scnshadermodifierentrypoint/geometry.md): Use this entry point to deform a geometry’s surface or alter its vertex attributes.
- [SCNShaderModifierEntryPointLightingModel](scnshadermodifierentrypoint/lightingmodel.md): Use this entry point to provide a custom lighting equation.
- [SCNShaderModifierEntryPointSurface](scnshadermodifierentrypoint/surface.md): Use this entry point to modify the surface properties of a material before lighting is computed.

## See Also

### Constants

- [SCNBindingBlock](scnbindingblock.md): The signature for a block called for binding or unbinding a GLSL symbol in a custom program.
