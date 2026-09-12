> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/motionvectorscalex](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/motionvectorscalex)

# motionVectorScaleX (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The horizontal scale factor the denoiser scaler applies to the input motion texture.

## Declaration

```swift
var motionVectorScaleX: Float { get set }
```

<a id="discussion"></a>

## Discussion

The scaler converts the horizontal component of each value in [motionTexture](motiontexture.md) into fragment (pixel) coordinates by multiplying it by this property’s value.

If you set this property’s value to `1.0`, this denoiser scaler expects that each pixel’s motion vector points to that pixel’s location in the [colorTexture](colortexture.md) at the time of the last call to encode this scaler’s work. For example, in Metal’s standard device coordinates, where `(0,0)` represents the upper-left corner of the framebuffer, the motion vectors for an object that moves down and to the right in the [colorTexture](colortexture.md) by `10` pixels would be `(-10,-10)`.

# motionVectorScaleX (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The horizontal scale factor the denoiser scaler applies to the input motion texture.

## Declaration

```objectivec
@property (nonatomic) float motionVectorScaleX;
```

<a id="discussion"></a>

## Discussion

The scaler converts the horizontal component of each value in [motionTexture](motiontexture.md) into fragment (pixel) coordinates by multiplying it by this property’s value.

If you set this property’s value to `1.0`, this denoiser scaler expects that each pixel’s motion vector points to that pixel’s location in the [colorTexture](colortexture.md) at the time of the last call to encode this scaler’s work. For example, in Metal’s standard device coordinates, where `(0,0)` represents the upper-left corner of the framebuffer, the motion vectors for an object that moves down and to the right in the [colorTexture](colortexture.md) by `10` pixels would be `(-10,-10)`.
