> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkbaseeffect/textureorder](https://developer.apple.com/documentation/glkit/glkbaseeffect/textureorder)

# textureOrder (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The order in which textures are applied to rendered primitives.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var textureOrder: [GLKEffectPropertyTexture]? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property should be an array whose contents are all [GLKEffectPropertyTexture](../glkeffectpropertytexture.md) objects provided by the effect. The order of these objects in the array determines the order in which the textures are applied in the shader. For example, to reverse the order that the textures are applied to a scene, your application would use the following code:

```objc
baseEffect.textureOrder = [NSArray arrayWithObjects: baseEffect.texture2d1, baseEffect.texture2d0, nil];
```

The default value is an array that executes the texture stages in increasing order, skipping any texture stages that are not enabled.

## See Also

### Configuring Textures

- [texture2d0](texture2d0.md): Deprecated. The properties for the first texture.
- [texture2d1](texture2d1.md): Deprecated. The properties for the second texture.

# textureOrder (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The order in which textures are applied to rendered primitives.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<GLKEffectPropertyTexture *> * textureOrder;
```

<a id="Discussion"></a>

## Discussion

The value of this property should be an array whose contents are all [GLKEffectPropertyTexture](../glkeffectpropertytexture.md) objects provided by the effect. The order of these objects in the array determines the order in which the textures are applied in the shader. For example, to reverse the order that the textures are applied to a scene, your application would use the following code:

```objc
baseEffect.textureOrder = [NSArray arrayWithObjects: baseEffect.texture2d1, baseEffect.texture2d0, nil];
```

The default value is an array that executes the texture stages in increasing order, skipping any texture stages that are not enabled.

## See Also

### Configuring Textures

- [texture2d0](texture2d0.md): Deprecated. The properties for the first texture.
- [texture2d1](texture2d1.md): Deprecated. The properties for the second texture.
