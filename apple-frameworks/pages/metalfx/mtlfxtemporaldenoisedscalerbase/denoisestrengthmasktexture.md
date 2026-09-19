> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/denoisestrengthmasktexture

# denoiseStrengthMaskTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The denoise strength mask texture this scaler evaluates.

## Declaration

```swift
var denoiseStrengthMaskTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

Use this single-channel texture to mark, at a per-pixel level, areas that this denoiser ignores. To configure a pixel that the denoiser ignores, provide `1.0` as the value at that pixel’s corresponding location on this texture.

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [denoiseStrengthMaskTextureUsage](denoisestrengthmasktextureusage.md) requests and the pixel format that [denoiseStrengthMaskTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/denoisestrengthmasktextureformat.md) requests.

# denoiseStrengthMaskTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The denoise strength mask texture this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> denoiseStrengthMaskTexture;
```

<a id="discussion"></a>

## Discussion

Use this single-channel texture to mark, at a per-pixel level, areas that this denoiser ignores. To configure a pixel that the denoiser ignores, provide `1.0` as the value at that pixel’s corresponding location on this texture.

You are responsible for ensuring the usage and pixel format of the texture you assign to this property matches the texture usage [denoiseStrengthMaskTextureUsage](denoisestrengthmasktextureusage.md) requests and the pixel format that [denoiseStrengthMaskTextureFormat](../mtlfxtemporaldenoisedscalerdescriptor/denoisestrengthmasktextureformat.md) requests.
