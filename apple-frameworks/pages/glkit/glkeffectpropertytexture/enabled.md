> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertytexture/enabled](https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/enabled)

# enabled (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether this texture is used to texture drawn primitives.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var enabled: GLboolean { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `GL_TRUE`, then the texture is applied to the primitive. If the value is `GL_FALSE`, the texture is skipped. The default value is `GL_TRUE`.

## See Also

### Configuring Texture Properties

- [envMode](envmode.md): Deprecated. The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](../glktextureenvmode.md).
- [name](name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
- [target](target.md): Deprecated. The kind of texture pointed to by the texture stage. See [GLKTextureTarget](../glktexturetarget.md).

# enabled (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether this texture is used to texture drawn primitives.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLboolean enabled;
```

<a id="Discussion"></a>

## Discussion

If the value is `GL_TRUE`, then the texture is applied to the primitive. If the value is `GL_FALSE`, the texture is skipped. The default value is `GL_TRUE`.

## See Also

### Configuring Texture Properties

- [envMode](envmode.md): Deprecated. The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](../glktextureenvmode.md).
- [name](name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
- [target](target.md): Deprecated. The kind of texture pointed to by the texture stage. See [GLKTextureTarget](../glktexturetarget.md).
