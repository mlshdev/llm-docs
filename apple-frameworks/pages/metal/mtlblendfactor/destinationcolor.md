> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendfactor/destinationcolor](https://developer.apple.com/documentation/metal/mtlblendfactor/destinationcolor)

# MTLBlendFactor.destinationColor (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Blend factor of destination values.

## Declaration

```swift
case destinationColor
```

<a id="discussion"></a>

## Discussion

`F(rgb) = Dest.rgb`

`F(a) = Dest.a`

## See Also

### Blend factors

- [MTLBlendFactor.zero](zero.md): Blend factor of zero.
- [MTLBlendFactor.one](one.md): Blend factor of one.
- [MTLBlendFactor.sourceColor](sourcecolor.md): Blend factor of source values.
- [MTLBlendFactor.oneMinusSourceColor](oneminussourcecolor.md): Blend factor of one minus source values.
- [MTLBlendFactor.sourceAlpha](sourcealpha.md): Blend factor of source alpha.
- [MTLBlendFactor.oneMinusSourceAlpha](oneminussourcealpha.md): Blend factor of one minus source alpha.
- [MTLBlendFactor.oneMinusDestinationColor](oneminusdestinationcolor.md): Blend factor of one minus destination values.
- [MTLBlendFactor.destinationAlpha](destinationalpha.md): Blend factor of destination alpha.
- [MTLBlendFactor.oneMinusDestinationAlpha](oneminusdestinationalpha.md): Blend factor of one minus destination alpha.
- [MTLBlendFactor.sourceAlphaSaturated](sourcealphasaturated.md): Blend factor of the minimum of either source alpha or one minus destination alpha.
- [MTLBlendFactor.blendColor](blendcolor.md): A blend factor that applies the blend color’s red, green, and blue components.
- [MTLBlendFactor.oneMinusBlendColor](oneminusblendcolor.md): A blend factor that applies one minus the blend color’s red, green, and blue components.
- [MTLBlendFactor.blendAlpha](blendalpha.md): Blend factor of alpha value.
- [MTLBlendFactor.oneMinusBlendAlpha](oneminusblendalpha.md): Blend factor of one minus alpha value.
- [MTLBlendFactor.source1Color](source1color.md): Blend factor of source values. This option supports dual-source blending and reads from the second color output of the fragment function.

# MTLBlendFactorDestinationColor (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Blend factor of destination values.

## Declaration

```objectivec
MTLBlendFactorDestinationColor
```

<a id="discussion"></a>

## Discussion

`F(rgb) = Dest.rgb`

`F(a) = Dest.a`

## See Also

### Blend factors

- [MTLBlendFactorZero](zero.md): Blend factor of zero.
- [MTLBlendFactorOne](one.md): Blend factor of one.
- [MTLBlendFactorSourceColor](sourcecolor.md): Blend factor of source values.
- [MTLBlendFactorOneMinusSourceColor](oneminussourcecolor.md): Blend factor of one minus source values.
- [MTLBlendFactorSourceAlpha](sourcealpha.md): Blend factor of source alpha.
- [MTLBlendFactorOneMinusSourceAlpha](oneminussourcealpha.md): Blend factor of one minus source alpha.
- [MTLBlendFactorOneMinusDestinationColor](oneminusdestinationcolor.md): Blend factor of one minus destination values.
- [MTLBlendFactorDestinationAlpha](destinationalpha.md): Blend factor of destination alpha.
- [MTLBlendFactorOneMinusDestinationAlpha](oneminusdestinationalpha.md): Blend factor of one minus destination alpha.
- [MTLBlendFactorSourceAlphaSaturated](sourcealphasaturated.md): Blend factor of the minimum of either source alpha or one minus destination alpha.
- [MTLBlendFactorBlendColor](blendcolor.md): A blend factor that applies the blend color’s red, green, and blue components.
- [MTLBlendFactorOneMinusBlendColor](oneminusblendcolor.md): A blend factor that applies one minus the blend color’s red, green, and blue components.
- [MTLBlendFactorBlendAlpha](blendalpha.md): Blend factor of alpha value.
- [MTLBlendFactorOneMinusBlendAlpha](oneminusblendalpha.md): Blend factor of one minus alpha value.
- [MTLBlendFactorSource1Color](source1color.md): Blend factor of source values. This option supports dual-source blending and reads from the second color output of the fragment function.
