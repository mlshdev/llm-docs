> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/diffusealbedotexture](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/diffusealbedotexture)

# diffuseAlbedoTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The diffuse albedo texture this scaler evaluates.

## Declaration

```swift
var diffuseAlbedoTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [diffuseAlbedoTextureUsage](diffusealbedotextureusage.md) requests and the pixel format that [diffuseAlbedoTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/diffusealbedotextureformat.md) requests.

# diffuseAlbedoTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The diffuse albedo texture this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> diffuseAlbedoTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [diffuseAlbedoTextureUsage](diffusealbedotextureusage.md) requests and the pixel format that [diffuseAlbedoTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/diffusealbedotextureformat.md) requests.
