> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/specularalbedotexture](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/specularalbedotexture)

# specularAlbedoTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The specular albedo texture this scaler evaluates.

## Declaration

```swift
var specularAlbedoTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [specularAlbedoTextureUsage](specularalbedotextureusage.md) requests and the pixel format that [specularAlbedoTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/specularalbedotextureformat.md) requests.

# specularAlbedoTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The specular albedo texture this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> specularAlbedoTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [specularAlbedoTextureUsage](specularalbedotextureusage.md) requests and the pixel format that [specularAlbedoTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/specularalbedotextureformat.md) requests.
