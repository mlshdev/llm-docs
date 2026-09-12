> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkbaseeffect/lightmodeltwosided](https://developer.apple.com/documentation/glkit/glkbaseeffect/lightmodeltwosided)

# lightModelTwoSided (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether lighting is calculated for both sides of a primitive.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var lightModelTwoSided: GLboolean { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `GL_TRUE` and the back face of a primitive is being rendered, the lighting values are calculated by negating the surface normals for the primitive. If the value is `GL_FALSE`, then the facing of the primitive is ignored when performing the lighting calculation. The default value is `GL_FALSE`.

Setting the value of this property to `GL_TRUE` may impact performance. Only use two-sided lighting when either side of a primitive could theoretically be visible to the camera.

## See Also

### Configuring Lights

- [lightingType](lightingtype.md): Deprecated. The strategy the effect uses to calculate light values at each fragment. See [GLKLightingType](../glklightingtype.md).
- [material](material.md): Deprecated. The material properties used when calculating the light values for a rendered primitive.
- [lightModelAmbientColor](lightmodelambientcolor.md): Deprecated. The ambient color applied to all primitives rendered by the effect.
- [light0](light0.md): Deprecated. The lighting properties for the first light in the scene.
- [light1](light1.md): Deprecated. The lighting properties for the second light in the scene.
- [light2](light2.md): Deprecated. The lighting properties for the third light in the scene.

# lightModelTwoSided (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether lighting is calculated for both sides of a primitive.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLboolean lightModelTwoSided;
```

<a id="Discussion"></a>

## Discussion

If the value is `GL_TRUE` and the back face of a primitive is being rendered, the lighting values are calculated by negating the surface normals for the primitive. If the value is `GL_FALSE`, then the facing of the primitive is ignored when performing the lighting calculation. The default value is `GL_FALSE`.

Setting the value of this property to `GL_TRUE` may impact performance. Only use two-sided lighting when either side of a primitive could theoretically be visible to the camera.

## See Also

### Configuring Lights

- [lightingType](lightingtype.md): Deprecated. The strategy the effect uses to calculate light values at each fragment. See [GLKLightingType](../glklightingtype.md).
- [material](material.md): Deprecated. The material properties used when calculating the light values for a rendered primitive.
- [lightModelAmbientColor](lightmodelambientcolor.md): Deprecated. The ambient color applied to all primitives rendered by the effect.
- [light0](light0.md): Deprecated. The lighting properties for the first light in the scene.
- [light1](light1.md): Deprecated. The lighting properties for the second light in the scene.
- [light2](light2.md): Deprecated. The lighting properties for the third light in the scene.
