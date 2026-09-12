> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkskyboxeffect/texturecubemap](https://developer.apple.com/documentation/glkit/glkskyboxeffect/texturecubemap)

# textureCubeMap (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The texture to apply to the skybox.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var textureCubeMap: GLKEffectPropertyTexture { get }
```

<a id="Discussion"></a>

## Discussion

Your application should create a complete texture cube map in its initialization code. Then, assign the name of this texture to the [textureCubeMap](texturecubemap.md) property of the skybox object.

```objc
skyboxEffect.textureCubeMap.glName = texture_name;
```

## See Also

### Configuring the Skybox

- [center](center.md): Deprecated. The center of the skybox.
- [xSize](xsize.md): Deprecated. The width of the skybox.
- [ySize](ysize.md): Deprecated. The height of the skybox.
- [zSize](zsize.md): Deprecated. The depth of the skybox.

# textureCubeMap (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The texture to apply to the skybox.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, readonly) GLKEffectPropertyTexture * textureCubeMap;
```

<a id="Discussion"></a>

## Discussion

Your application should create a complete texture cube map in its initialization code. Then, assign the name of this texture to the [textureCubeMap](texturecubemap.md) property of the skybox object.

```objc
skyboxEffect.textureCubeMap.glName = texture_name;
```

## See Also

### Configuring the Skybox

- [center](center.md): Deprecated. The center of the skybox.
- [xSize](xsize.md): Deprecated. The width of the skybox.
- [ySize](ysize.md): Deprecated. The height of the skybox.
- [zSize](zsize.md): Deprecated. The depth of the skybox.
