> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/scaledfont(for:maximumpointsize:)](https://developer.apple.com/documentation/uikit/uifontmetrics/scaledfont(for:maximumpointsize:))

# scaledFont(for:maximumPointSize:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.

## Declaration

```swift
func scaledFont(for font: UIFont, maximumPointSize: CGFloat) -> UIFont
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.
- `maximumPointSize`: The maximum point size allowed for the font. Use this value to constrain the font to the specified size when your interface cannot accommodate text that is any larger.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled appropriately for the specified settings.

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFont(for:)](scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFont(for:compatibleWith:)](scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFont(for:maximumPointSize:compatibleWith:)](scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

# scaledFontForFont:maximumPointSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.

## Declaration

```objectivec
- (UIFont *) scaledFontForFont:(UIFont *) font maximumPointSize:(CGFloat) maximumPointSize;
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.
- `maximumPointSize`: The maximum point size allowed for the font. Use this value to constrain the font to the specified size when your interface cannot accommodate text that is any larger.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled appropriately for the specified settings.

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFontForFont:](scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFontForFont:compatibleWithTraitCollection:](scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFontForFont:maximumPointSize:compatibleWithTraitCollection:](scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.
