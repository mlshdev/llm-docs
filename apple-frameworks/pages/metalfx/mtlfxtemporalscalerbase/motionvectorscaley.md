> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerbase/motionvectorscaley](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerbase/motionvectorscaley)

# motionVectorScaleY (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

The vertical scale factor the scaler applies to the input motion texture.

## Declaration

```swift
var motionVectorScaleY: Float { get set }
```

<a id="discussion"></a>

## Discussion

The scaler converts the horizontal component of each value in [motionTexture](motiontexture.md) into fragment (pixel) coordinates by multiplying it by this property’s value.

If you set this property’s value to `1.0`, this temporal scaler expects that each pixel’s motion vector points to that pixel’s location in the [colorTexture](colortexture.md) at the time of the last call to encode this scaler’s work. For example, in Metal’s standard device coordinates, where `(0,0)` represents the upper-left corner of the framebuffer, the motion vectors for an object that moves down and to the right in the [colorTexture](colortexture.md) by `10` pixels would be `(-10,-10)`.

# motionVectorScaleY (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

The vertical scale factor the scaler applies to the input motion texture.

## Declaration

```objectivec
@property (nonatomic) float motionVectorScaleY;
```

<a id="discussion"></a>

## Discussion

The scaler converts the horizontal component of each value in [motionTexture](motiontexture.md) into fragment (pixel) coordinates by multiplying it by this property’s value.

If you set this property’s value to `1.0`, this temporal scaler expects that each pixel’s motion vector points to that pixel’s location in the [colorTexture](colortexture.md) at the time of the last call to encode this scaler’s work. For example, in Metal’s standard device coordinates, where `(0,0)` represents the upper-left corner of the framebuffer, the motion vectors for an object that moves down and to the right in the [colorTexture](colortexture.md) by `10` pixels would be `(-10,-10)`.
