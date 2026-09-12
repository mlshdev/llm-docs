> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobe/irradiancetexture](https://developer.apple.com/documentation/modelio/mdllightprobe/irradiancetexture)

# irradianceTexture (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A cube map texture that contains samples of the total light arriving at the light probe’s position from every direction.

## Declaration

```swift
var irradianceTexture: MDLTexture? { get }
```

<a id="Discussion"></a>

## Discussion

A renderer can use this texture to create diffuse lighting effects. You can derive an irradiance map from a reflective texture with methods on the [MDLTexture](../mdltexture.md) class, or when creating a light probe with the [init(textureSize:forLocation:lightsToConsider:objectsToConsider:reflectiveCubemap:irradianceCubemap:)](init%28texturesize_forlocation_lightstoconsider_objectstoconsider_reflectivecubemap_irradiancecubemap_%29.md) method.

For example, consider a light probe whose reflective texture is red in all directions above the probe’s location and blue in all directions below that point. A diffuse material on the side of such an object should appear purple, because the side of the object receives a blend of the red light from above and the blue light from below. Therefore, the irradiance texture for this light probe is red directly above, blue directly below, and contains gradations of purple on all sides.

## See Also

### Working with Textures

- [reflectiveTexture](reflectivetexture.md): A cube map texture that contains a rendering of a scene as seen from the light probe’s position.

# irradianceTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A cube map texture that contains samples of the total light arriving at the light probe’s position from every direction.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) MDLTexture * irradianceTexture;
```

<a id="Discussion"></a>

## Discussion

A renderer can use this texture to create diffuse lighting effects. You can derive an irradiance map from a reflective texture with methods on the [MDLTexture](../mdltexture.md) class, or when creating a light probe with the [lightProbeWithTextureSize:forLocation:lightsToConsider:objectsToConsider:reflectiveCubemap:irradianceCubemap:](init%28texturesize_forlocation_lightstoconsider_objectstoconsider_reflectivecubemap_irradiancecubemap_%29.md) method.

For example, consider a light probe whose reflective texture is red in all directions above the probe’s location and blue in all directions below that point. A diffuse material on the side of such an object should appear purple, because the side of the object receives a blend of the red light from above and the blue light from below. Therefore, the irradiance texture for this light probe is red directly above, blue directly below, and contains gradations of purple on all sides.

## See Also

### Working with Textures

- [reflectiveTexture](reflectivetexture.md): A cube map texture that contains a rendering of a scene as seen from the light probe’s position.
