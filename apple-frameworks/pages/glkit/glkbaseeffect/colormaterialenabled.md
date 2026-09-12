> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkbaseeffect/colormaterialenabled](https://developer.apple.com/documentation/glkit/glkbaseeffect/colormaterialenabled)

# colorMaterialEnabled (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether or not to use the color vertex attribute when calculating the light’s interaction with the material.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var colorMaterialEnabled: GLboolean { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is set to `GL_TRUE`, then the color attribute provided in the vertex data is used as the material’s color when performing any lighting calculations. If the value is set to `GL_FALSE` then the colors stored in the [material](material.md) property are used to light the primitive. The default value is `GL_FALSE`.

## See Also

### Configuring Color Information

- [useConstantColor](useconstantcolor.md): Deprecated. A Boolean value that indicates whether or not to use the constant color.
- [constantColor](constantcolor.md): Deprecated. A constant color, used when per-vertex color data is not provided.

# colorMaterialEnabled (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether or not to use the color vertex attribute when calculating the light’s interaction with the material.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLboolean colorMaterialEnabled;
```

<a id="Discussion"></a>

## Discussion

If the value is set to `GL_TRUE`, then the color attribute provided in the vertex data is used as the material’s color when performing any lighting calculations. If the value is set to `GL_FALSE` then the colors stored in the [material](material.md) property are used to light the primitive. The default value is `GL_FALSE`.

## See Also

### Configuring Color Information

- [useConstantColor](useconstantcolor.md): Deprecated. A Boolean value that indicates whether or not to use the constant color.
- [constantColor](constantcolor.md): Deprecated. A constant color, used when per-vertex color data is not provided.
