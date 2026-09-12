> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/reactivemasktexture](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/reactivemasktexture)

# reactiveMaskTexture (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A reactive-mask texture input for this scaler to evaluate.

## Declaration

```swift
var reactiveMaskTexture: (any MTLTexture)? { get set }
```

<a id="discussion"></a>

## Discussion

This texture helps guide the denoiser when objects move quickly in a scene with inaccurate motion information, such as when they involve alpha blending. In these situations, you can get better results by guiding MetalFX whether to favor the current frame on a per-pixel basis with a reactive mask texture.

When providing this texture, you are responsible for ensuring each pixel is in the range `[0.0, 1.0]`, where a value:

- Equal to `0.0` tells MetalFX to follow its normal behavior for the corresponding pixel
- Equal to `1.0` tells MetalFX to ignore temporal history for the corresponding pixel
- In the range `(0.0, 1.0)` proportionally blends the effect for the corresponding pixel

# reactiveMaskTexture (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A reactive-mask texture input for this scaler to evaluate.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLTexture> reactiveMaskTexture;
```

<a id="discussion"></a>

## Discussion

This texture helps guide the denoiser when objects move quickly in a scene with inaccurate motion information, such as when they involve alpha blending. In these situations, you can get better results by guiding MetalFX whether to favor the current frame on a per-pixel basis with a reactive mask texture.

When providing this texture, you are responsible for ensuring each pixel is in the range `[0.0, 1.0]`, where a value:

- Equal to `0.0` tells MetalFX to follow its normal behavior for the corresponding pixel
- Equal to `1.0` tells MetalFX to ignore temporal history for the corresponding pixel
- In the range `(0.0, 1.0)` proportionally blends the effect for the corresponding pixel
