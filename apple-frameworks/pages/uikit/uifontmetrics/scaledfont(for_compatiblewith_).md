> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/scaledfont(for:compatiblewith:)](https://developer.apple.com/documentation/uikit/uifontmetrics/scaledfont(for:compatiblewith:))

# scaledFont(for:compatibleWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a version of the specified font that adopts the current font metrics and supports the specified traits.

## Declaration

```swift
func scaledFont(for font: UIFont, compatibleWith traitCollection: UITraitCollection?) -> UIFont
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.
- `traitCollection`: The trait collection to use when determining compatibility. The returned font is appropriate for use in an interface that adopts the specified traits.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled to the current Dynamic Type setting.

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFont(for:)](scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFont(for:maximumPointSize:)](scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
- [scaledFont(for:maximumPointSize:compatibleWith:)](scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

# scaledFontForFont:compatibleWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a version of the specified font that adopts the current font metrics and supports the specified traits.

## Declaration

```objectivec
- (UIFont *) scaledFontForFont:(UIFont *) font compatibleWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.
- `traitCollection`: The trait collection to use when determining compatibility. The returned font is appropriate for use in an interface that adopts the specified traits.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled to the current Dynamic Type setting.

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFontForFont:](scaledfont%28for_%29.md): Returns a version of the specified font that adopts the current font metrics.
- [scaledFontForFont:maximumPointSize:](scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
- [scaledFontForFont:maximumPointSize:compatibleWithTraitCollection:](scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.
