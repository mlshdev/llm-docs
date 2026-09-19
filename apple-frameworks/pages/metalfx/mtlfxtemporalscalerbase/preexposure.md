> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerbase/preexposure

# preExposure (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

A pre-exposure value this scaler evaluates.

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
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

A pre-exposure value this scaler evaluates.

## Declaration

```objectivec
@property (nonatomic) float preExposure;
```

<a id="discussion"></a>

## Discussion

If the input color texture you assign to [colorTexture](colortexture.md) is pre-multiplied by fixed value, set this property to that same fixed value so MetalFX divides input color by it. This is not a common situation and you typically don’t need to assign a value to this property.
