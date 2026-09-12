> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerbase/preexposure](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerbase/preexposure)

# preExposure (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A pre-exposure value for this scaler to evaluate.

## Declaration

```swift
var preExposure: Float { get set }
```

<a id="discussion"></a>

## Discussion

If the input color texture you assign to [colorTexture](colortexture.md) is pre-multiplied by fixed value, set this property to that same fixed value so MetalFX divides input color by it. This is not a common situation and you typically don’t need to assign a value to this property.

# preExposure (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A pre-exposure value for this scaler to evaluate.

## Declaration

```objectivec
@property (nonatomic) float preExposure;
```

<a id="discussion"></a>

## Discussion

If the input color texture you assign to [colorTexture](colortexture.md) is pre-multiplied by fixed value, set this property to that same fixed value so MetalFX divides input color by it. This is not a common situation and you typically don’t need to assign a value to this property.
