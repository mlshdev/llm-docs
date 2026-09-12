> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertytexture/envmode](https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/envmode)

# envMode (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](../glktextureenvmode.md).

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var envMode: GLKTextureEnvMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKTextureEnvMode.modulate](../glktextureenvmode/modulate.md).

## See Also

### Configuring Texture Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether this texture is used to texture drawn primitives.
- [name](name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
- [target](target.md): Deprecated. The kind of texture pointed to by the texture stage. See [GLKTextureTarget](../glktexturetarget.md).

# envMode (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](../glktextureenvmode.md).

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLKTextureEnvMode envMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKTextureEnvModeModulate](../glktextureenvmode/modulate.md).

## See Also

### Configuring Texture Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether this texture is used to texture drawn primitives.
- [name](name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
- [target](target.md): Deprecated. The kind of texture pointed to by the texture stage. See [GLKTextureTarget](../glktexturetarget.md).
