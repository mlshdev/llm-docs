> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setblendcolor(red:green:blue:alpha:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setblendcolor(red:green:blue:alpha:))

# setBlendColor(red:green:blue:alpha:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.

## Declaration

```swift
func setBlendColor(red: Float, green: Float, blue: Float, alpha: Float)
```

## Parameters

- `red`: A value for the red component for the blend color constant.
- `green`: A value for the green component for the blend color constant.
- `blue`: A value for the blue component for the blend color constant.
- `alpha`: A value for the alpha component for the blend color constant.

<a id="discussion"></a>

## Discussion

The alpha and color values apply to all the render pass’s attachments. The `red`, `green`, and `blue` color parameters apply to the [MTLBlendFactor.blendColor](../mtlblendfactor/blendcolor.md) and [MTLBlendFactor.oneMinusBlendColor](../mtlblendfactor/oneminusblendcolor.md) blend factors.

The `alpha` parameter applies to the [MTLBlendFactor.blendAlpha](../mtlblendfactor/blendalpha.md) and [MTLBlendFactor.oneMinusBlendAlpha](../mtlblendfactor/oneminusblendalpha.md) blend factors.

The render pipeline’s default blend color value is `0.0` for each parameter, which is equivalent to [MTLBlendFactor.zero](../mtlblendfactor/zero.md). For other blending factor values, see [MTLBlendFactor](../mtlblendfactor.md).

## See Also

### Configuring blend behavior

- [setColorAttachmentMap(\_:)](setcolorattachmentmap%28__%29.md): Sets the mapping from logical shader color output to physical render pass color attachments.

# setBlendColorRed:green:blue:alpha: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.

## Declaration

```objectivec
- (void) setBlendColorRed:(float) red green:(float) green blue:(float) blue alpha:(float) alpha;
```

## Parameters

- `red`: A value for the red component for the blend color constant.
- `green`: A value for the green component for the blend color constant.
- `blue`: A value for the blue component for the blend color constant.
- `alpha`: A value for the alpha component for the blend color constant.

<a id="discussion"></a>

## Discussion

The alpha and color values apply to all the render pass’s attachments. The `red`, `green`, and `blue` color parameters apply to the [MTLBlendFactorBlendColor](../mtlblendfactor/blendcolor.md) and [MTLBlendFactorOneMinusBlendColor](../mtlblendfactor/oneminusblendcolor.md) blend factors.

The `alpha` parameter applies to the [MTLBlendFactorBlendAlpha](../mtlblendfactor/blendalpha.md) and [MTLBlendFactorOneMinusBlendAlpha](../mtlblendfactor/oneminusblendalpha.md) blend factors.

The render pipeline’s default blend color value is `0.0` for each parameter, which is equivalent to [MTLBlendFactorZero](../mtlblendfactor/zero.md). For other blending factor values, see [MTLBlendFactor](../mtlblendfactor.md).

## See Also

### Configuring blend behavior

- [setColorAttachmentMap:](setcolorattachmentmap%28__%29.md): Sets the mapping from logical shader color output to physical render pass color attachments.
