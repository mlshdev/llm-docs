> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobe/reflectivetexture](https://developer.apple.com/documentation/modelio/mdllightprobe/reflectivetexture)

# reflectiveTexture (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A cube map texture that contains a rendering of a scene as seen from the light probe’s position.

## Declaration

```swift
var reflectiveTexture: MDLTexture? { get }
```

<a id="Discussion"></a>

## Discussion

A reflective texture is also known as an *environment map*. A renderer can use this texture to create reflections and specular highlights on surfaces with metallic materials.

## See Also

### Working with Textures

- [irradianceTexture](irradiancetexture.md): A cube map texture that contains samples of the total light arriving at the light probe’s position from every direction.

# reflectiveTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A cube map texture that contains a rendering of a scene as seen from the light probe’s position.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) MDLTexture * reflectiveTexture;
```

<a id="Discussion"></a>

## Discussion

A reflective texture is also known as an *environment map*. A renderer can use this texture to create reflections and specular highlights on surfaces with metallic materials.

## See Also

### Working with Textures

- [irradianceTexture](irradiancetexture.md): A cube map texture that contains samples of the total light arriving at the light probe’s position from every direction.
