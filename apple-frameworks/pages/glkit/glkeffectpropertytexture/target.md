> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertytexture/target](https://developer.apple.com/documentation/glkit/glkeffectpropertytexture/target)

# target (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The kind of texture pointed to by the texture stage. See [GLKTextureTarget](../glktexturetarget.md).

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var target: GLKTextureTarget { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKTextureTarget.target2D](../glktexturetarget/target2d.md).

## See Also

### Configuring Texture Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether this texture is used to texture drawn primitives.
- [envMode](envmode.md): Deprecated. The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](../glktextureenvmode.md).
- [name](name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.

# target (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The kind of texture pointed to by the texture stage. See [GLKTextureTarget](../glktexturetarget.md).

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLKTextureTarget target;
```

<a id="Discussion"></a>

## Discussion

The default value is [GLKTextureTarget2D](../glktexturetarget/target2d.md).

## See Also

### Configuring Texture Properties

- [enabled](enabled.md): Deprecated. A Boolean value that indicates whether this texture is used to texture drawn primitives.
- [envMode](envmode.md): Deprecated. The mode the texture uses to compute its output fragment color. See [GLKTextureEnvMode](../glktextureenvmode.md).
- [name](name.md): Deprecated. The OpenGL name for the texture being sampled by this texture stage.
