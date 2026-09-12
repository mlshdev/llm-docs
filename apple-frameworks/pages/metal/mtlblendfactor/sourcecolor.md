> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblendfactor/sourcecolor](https://developer.apple.com/documentation/metal/mtlblendfactor/sourcecolor)

# MTLBlendFactor.sourceColor (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Blend factor of source values.

## Declaration

```swift
case sourceColor
```

<a id="discussion"></a>

## Discussion

`F(rgb) = Source.rgb`

`F(a) = Source.a`

## See Also

### Blend factors

- [MTLBlendFactor.zero](zero.md): Blend factor of zero.
- [MTLBlendFactor.one](one.md): Blend factor of one.
- [MTLBlendFactor.oneMinusSourceColor](oneminussourcecolor.md): Blend factor of one minus source values.
- [MTLBlendFactor.sourceAlpha](sourcealpha.md): Blend factor of source alpha.
- [MTLBlendFactor.oneMinusSourceAlpha](oneminussourcealpha.md): Blend factor of one minus source alpha.
- [MTLBlendFactor.destinationColor](destinationcolor.md): Blend factor of destination values.
- [MTLBlendFactor.oneMinusDestinationColor](oneminusdestinationcolor.md): Blend factor of one minus destination values.
- [MTLBlendFactor.destinationAlpha](destinationalpha.md): Blend factor of destination alpha.
- [MTLBlendFactor.oneMinusDestinationAlpha](oneminusdestinationalpha.md): Blend factor of one minus destination alpha.
- [MTLBlendFactor.sourceAlphaSaturated](sourcealphasaturated.md): Blend factor of the minimum of either source alpha or one minus destination alpha.
- [MTLBlendFactor.blendColor](blendcolor.md): A blend factor that applies the blend color’s red, green, and blue components.
- [MTLBlendFactor.oneMinusBlendColor](oneminusblendcolor.md): A blend factor that applies one minus the blend color’s red, green, and blue components.
- [MTLBlendFactor.blendAlpha](blendalpha.md): Blend factor of alpha value.
- [MTLBlendFactor.oneMinusBlendAlpha](oneminusblendalpha.md): Blend factor of one minus alpha value.
- [MTLBlendFactor.source1Color](source1color.md): Blend factor of source values. This option supports dual-source blending and reads from the second color output of the fragment function.

# MTLBlendFactorSourceColor (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Blend factor of source values.

## Declaration

```objectivec
MTLBlendFactorSourceColor
```

<a id="discussion"></a>

## Discussion

`F(rgb) = Source.rgb`

`F(a) = Source.a`

## See Also

### Blend factors

- [MTLBlendFactorZero](zero.md): Blend factor of zero.
- [MTLBlendFactorOne](one.md): Blend factor of one.
- [MTLBlendFactorOneMinusSourceColor](oneminussourcecolor.md): Blend factor of one minus source values.
- [MTLBlendFactorSourceAlpha](sourcealpha.md): Blend factor of source alpha.
- [MTLBlendFactorOneMinusSourceAlpha](oneminussourcealpha.md): Blend factor of one minus source alpha.
- [MTLBlendFactorDestinationColor](destinationcolor.md): Blend factor of destination values.
- [MTLBlendFactorOneMinusDestinationColor](oneminusdestinationcolor.md): Blend factor of one minus destination values.
- [MTLBlendFactorDestinationAlpha](destinationalpha.md): Blend factor of destination alpha.
- [MTLBlendFactorOneMinusDestinationAlpha](oneminusdestinationalpha.md): Blend factor of one minus destination alpha.
- [MTLBlendFactorSourceAlphaSaturated](sourcealphasaturated.md): Blend factor of the minimum of either source alpha or one minus destination alpha.
- [MTLBlendFactorBlendColor](blendcolor.md): A blend factor that applies the blend color’s red, green, and blue components.
- [MTLBlendFactorOneMinusBlendColor](oneminusblendcolor.md): A blend factor that applies one minus the blend color’s red, green, and blue components.
- [MTLBlendFactorBlendAlpha](blendalpha.md): Blend factor of alpha value.
- [MTLBlendFactorOneMinusBlendAlpha](oneminusblendalpha.md): Blend factor of one minus alpha value.
- [MTLBlendFactorSource1Color](source1color.md): Blend factor of source values. This option supports dual-source blending and reads from the second color output of the fragment function.
