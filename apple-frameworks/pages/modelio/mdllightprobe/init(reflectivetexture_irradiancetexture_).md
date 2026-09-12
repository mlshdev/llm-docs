> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobe/init(reflectivetexture:irradiancetexture:)](https://developer.apple.com/documentation/modelio/mdllightprobe/init(reflectivetexture:irradiancetexture:))

# init(reflectiveTexture:irradianceTexture:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a light probe with the specified cube map textures.

## Declaration

```swift
init(reflectiveTexture: MDLTexture?, irradianceTexture: MDLTexture?)
```

## Parameters

- `reflectiveTexture`: A cube map texture that contains a rendering of a scene as seen from the light probe’s position.
- `irradianceTexture`: A cube map texture that contains samples of the total light arriving at the light probe’s position from every direction.

<a id="return-value"></a>

## Return Value

A new light probe object.

<a id="Discussion"></a>

## Discussion

You can derive an irradiance map from a reflective texture with methods on the [MDLTexture](../mdltexture.md) class, or when creating a light probe with the [init(textureSize:forLocation:lightsToConsider:objectsToConsider:reflectiveCubemap:irradianceCubemap:)](init%28texturesize_forlocation_lightstoconsider_objectstoconsider_reflectivecubemap_irradiancecubemap_%29.md) method.

# initWithReflectiveTexture:irradianceTexture: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a light probe with the specified cube map textures.

## Declaration

```objectivec
- (instancetype) initWithReflectiveTexture:(MDLTexture *) reflectiveTexture irradianceTexture:(MDLTexture *) irradianceTexture;
```

## Parameters

- `reflectiveTexture`: A cube map texture that contains a rendering of a scene as seen from the light probe’s position.
- `irradianceTexture`: A cube map texture that contains samples of the total light arriving at the light probe’s position from every direction.

<a id="return-value"></a>

## Return Value

A new light probe object.

<a id="Discussion"></a>

## Discussion

You can derive an irradiance map from a reflective texture with methods on the [MDLTexture](../mdltexture.md) class, or when creating a light probe with the [lightProbeWithTextureSize:forLocation:lightsToConsider:objectsToConsider:reflectiveCubemap:irradianceCubemap:](init%28texturesize_forlocation_lightstoconsider_objectstoconsider_reflectivecubemap_irradiancecubemap_%29.md) method.
