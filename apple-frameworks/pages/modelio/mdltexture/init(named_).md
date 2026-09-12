> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/init(named:)](https://developer.apple.com/documentation/modelio/mdltexture/init(named:))

# init(named:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Loads the texture with the specified filename from the app’s main bundle.

## Declaration

```swift
convenience init?(named name: String)
```

## Parameters

- `name`: The name, including extension, of the image file to load as a texture.

<a id="return-value"></a>

## Return Value

A new texture object for the specified image file, or `nil` if no such file exists.

<a id="Discussion"></a>

## Discussion

Calling this method immediately loads image data from the specified file. To instead create a texture object referencing a file and defer loading image data, use the [MDLURLTexture](../mdlurltexture.md) class.

This method does not cache the texture objects it creates; calling this method again with the same `name` parameter as a previous call will load image data from the file again.

## See Also

### Loading Textures from a Bundle

- [init(named:bundle:)](init%28named_bundle_%29.md): Loads the texture with the specified filename from the specified bundle.
- [init(cubeWithImagesNamed:)](init%28cubewithimagesnamed_%29.md): Loads a cube texture from the specified image files in the app’s main bundle.
- [init(cubeWithImagesNamed:bundle:)](init%28cubewithimagesnamed_bundle_%29.md): Loads a cube texture from the specified image files in the specified bundle.

# textureNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Loads the texture with the specified filename from the app’s main bundle.

## Declaration

```objectivec
+ (instancetype) textureNamed:(NSString *) name;
```

## Parameters

- `name`: The name, including extension, of the image file to load as a texture.

<a id="return-value"></a>

## Return Value

A new texture object for the specified image file, or `nil` if no such file exists.

<a id="Discussion"></a>

## Discussion

Calling this method immediately loads image data from the specified file. To instead create a texture object referencing a file and defer loading image data, use the [MDLURLTexture](../mdlurltexture.md) class.

This method does not cache the texture objects it creates; calling this method again with the same `name` parameter as a previous call will load image data from the file again.

## See Also

### Loading Textures from a Bundle

- [textureNamed:bundle:](init%28named_bundle_%29.md): Loads the texture with the specified filename from the specified bundle.
- [textureCubeWithImagesNamed:](init%28cubewithimagesnamed_%29.md): Loads a cube texture from the specified image files in the app’s main bundle.
- [textureCubeWithImagesNamed:bundle:](init%28cubewithimagesnamed_bundle_%29.md): Loads a cube texture from the specified image files in the specified bundle.
