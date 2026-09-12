> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/scaledfont(for:maximumpointsize:compatiblewith:)](https://developer.apple.com/documentation/uikit/uifontmetrics/scaledfont(for:maximumpointsize:compatiblewith:))

# scaledFont(for:maximumPointSize:compatibleWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

## Declaration

```swift
func scaledFont(for font: UIFont, maximumPointSize: CGFloat, compatibleWith traitCollection: UITraitCollection?) -> UIFont
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.
- `maximumPointSize`: The maximum point size allowed for the font. Use this value to constrain the font to the specified size when your interface cannot accommodate text that is any larger.
- `traitCollection`: The trait collection to use when determining compatibility. The returned font is appropriate for use in an interface that adopts the specified traits.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled appropriately for the specified settings.

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFont(for:)](scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFont(for:compatibleWith:)](scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFont(for:maximumPointSize:)](scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.

# scaledFontForFont:maximumPointSize:compatibleWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

## Declaration

```objectivec
- (UIFont *) scaledFontForFont:(UIFont *) font maximumPointSize:(CGFloat) maximumPointSize compatibleWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.
- `maximumPointSize`: The maximum point size allowed for the font. Use this value to constrain the font to the specified size when your interface cannot accommodate text that is any larger.
- `traitCollection`: The trait collection to use when determining compatibility. The returned font is appropriate for use in an interface that adopts the specified traits.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled appropriately for the specified settings.

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFontForFont:](scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFontForFont:compatibleWithTraitCollection:](scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFontForFont:maximumPointSize:](scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
