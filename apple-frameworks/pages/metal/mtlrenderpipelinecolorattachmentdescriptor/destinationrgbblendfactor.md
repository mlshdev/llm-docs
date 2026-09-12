> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/destinationrgbblendfactor](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/destinationrgbblendfactor)

# destinationRGBBlendFactor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The destination blend factor (DBF) used by the RGB blend operation.

## Declaration

```swift
var destinationRGBBlendFactor: MTLBlendFactor { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLBlendFactor.zero](../mtlblendfactor/zero.md).

## See Also

### Configuring blend factors

- [destinationAlphaBlendFactor](destinationalphablendfactor.md): The destination blend factor (DBF) used by the alpha blend operation.
- [sourceAlphaBlendFactor](sourcealphablendfactor.md): The source blend factor (SBF) used by the alpha blend operation.
- [sourceRGBBlendFactor](sourcergbblendfactor.md): The source blend factor (SBF) used by the RGB blend operation.
- [MTLBlendFactor](../mtlblendfactor.md): The source and destination blend factors are often needed to complete specification of a blend operation. In most cases, the blend factor for both RGB values (*F(rgb)*) and alpha values (*F(a)*) are similar to one another, but in some cases, such as `MTLBlendFactorSourceAlphaSaturated`, the blend factor is slightly different. Four blend factors (`MTLBlendFactorBlendColor`, `MTLBlendFactorOneMinusBlendColor`, `MTLBlendFactorBlendAlpha`, and `MTLBlendFactorOneMinusBlendAlpha`) refer to a constant blend color value that is set by the [setBlendColor(red:green:blue:alpha:)](../mtlrendercommandencoder/setblendcolor%28red_green_blue_alpha_%29.md) method of `MTLRenderCommandEncoder`.

# destinationRGBBlendFactor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The destination blend factor (DBF) used by the RGB blend operation.

## Declaration

```objectivec
@property (nonatomic) MTLBlendFactor destinationRGBBlendFactor;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLBlendFactorZero](../mtlblendfactor/zero.md).

## See Also

### Configuring blend factors

- [destinationAlphaBlendFactor](destinationalphablendfactor.md): The destination blend factor (DBF) used by the alpha blend operation.
- [sourceAlphaBlendFactor](sourcealphablendfactor.md): The source blend factor (SBF) used by the alpha blend operation.
- [sourceRGBBlendFactor](sourcergbblendfactor.md): The source blend factor (SBF) used by the RGB blend operation.
- [MTLBlendFactor](../mtlblendfactor.md): The source and destination blend factors are often needed to complete specification of a blend operation. In most cases, the blend factor for both RGB values (*F(rgb)*) and alpha values (*F(a)*) are similar to one another, but in some cases, such as `MTLBlendFactorSourceAlphaSaturated`, the blend factor is slightly different. Four blend factors (`MTLBlendFactorBlendColor`, `MTLBlendFactorOneMinusBlendColor`, `MTLBlendFactorBlendAlpha`, and `MTLBlendFactorOneMinusBlendAlpha`) refer to a constant blend color value that is set by the [setBlendColorRed:green:blue:alpha:](../mtlrendercommandencoder/setblendcolor%28red_green_blue_alpha_%29.md) method of `MTLRenderCommandEncoder`.
