> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/denoisestrengthmasktextureformat

# denoiseStrengthMaskTextureFormat (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 27.1+

The pixel format of the input denoise strength mask texture for the scaler you create with this descriptor.

## Declaration

```swift
var denoiseStrengthMaskTextureFormat: MTLPixelFormat { get set }
```

<a id="discussion"></a>

## Discussion

You typically set this to a single-channel texture format.

# denoiseStrengthMaskTextureFormat (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 27.1+

The pixel format of the input denoise strength mask texture for the scaler you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLPixelFormat denoiseStrengthMaskTextureFormat;
```

<a id="discussion"></a>

## Discussion

You typically set this to a single-channel texture format.
