> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkbaseeffect/useconstantcolor](https://developer.apple.com/documentation/glkit/glkbaseeffect/useconstantcolor)

# useConstantColor (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether or not to use the constant color.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var useConstantColor: GLboolean { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is set to `GL_TRUE`, then the value stored in the [constantColor](constantcolor.md) property is used as the color value for each vertex. If the value is set to `GL_FALSE`, then your application is expected to enable the [GLKVertexAttrib.color](../glkvertexattrib/color.md) attribute and provide per-vertex color data. The default value is `GL_FALSE`.

## See Also

### Configuring Color Information

- [colorMaterialEnabled](colormaterialenabled.md): Deprecated. A Boolean value that indicates whether or not to use the color vertex attribute when calculating the light’s interaction with the material.
- [constantColor](constantcolor.md): Deprecated. A constant color, used when per-vertex color data is not provided.

# useConstantColor (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether or not to use the constant color.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLboolean useConstantColor;
```

<a id="Discussion"></a>

## Discussion

If the value is set to `GL_TRUE`, then the value stored in the [constantColor](constantcolor.md) property is used as the color value for each vertex. If the value is set to `GL_FALSE`, then your application is expected to enable the [GLKVertexAttribColor](../glkvertexattrib/color.md) attribute and provide per-vertex color data. The default value is `GL_FALSE`.

## See Also

### Configuring Color Information

- [colorMaterialEnabled](colormaterialenabled.md): Deprecated. A Boolean value that indicates whether or not to use the color vertex attribute when calculating the light’s interaction with the material.
- [constantColor](constantcolor.md): Deprecated. A constant color, used when per-vertex color data is not provided.
