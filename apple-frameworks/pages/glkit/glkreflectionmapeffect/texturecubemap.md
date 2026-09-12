> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkreflectionmapeffect/texturecubemap](https://developer.apple.com/documentation/glkit/glkreflectionmapeffect/texturecubemap)

# textureCubeMap (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The texture map to apply in the reflection stage.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var textureCubeMap: GLKEffectPropertyTexture { get }
```

<a id="Discussion"></a>

## Discussion

Your application should create a complete texture cube map in its initialization code. Then, assign the name of this texture to the [textureCubeMap](texturecubemap.md) property.

```objc
reflectionMapObject.textureCubeMap.glName = texture_name;
```

## See Also

### Effect Properties

- [matrix](matrix.md): Deprecated. The reflection matrix to apply to the normals of the submitted vertices.

# textureCubeMap (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The texture map to apply in the reflection stage.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, readonly) GLKEffectPropertyTexture * textureCubeMap;
```

<a id="Discussion"></a>

## Discussion

Your application should create a complete texture cube map in its initialization code. Then, assign the name of this texture to the [textureCubeMap](texturecubemap.md) property.

```objc
reflectionMapObject.textureCubeMap.glName = texture_name;
```

## See Also

### Effect Properties

- [matrix](matrix.md): Deprecated. The reflection matrix to apply to the normals of the submitted vertices.
