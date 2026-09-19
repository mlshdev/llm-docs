> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/normaltexture

# normalTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The normal texture this scaler evaluates.

## Declaration

```swift
var normalTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [normalTextureUsage](normaltextureusage.md) requests and the pixel format that [normalTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/normaltextureformat.md) requests.

# normalTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The normal texture this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> normalTexture;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [normalTextureUsage](normaltextureusage.md) requests and the pixel format that [normalTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/normaltextureformat.md) requests.
