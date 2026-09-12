> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontmetrics/scaledfont(for:)](https://developer.apple.com/documentation/uikit/uifontmetrics/scaledfont(for:))

# scaledFont(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a version of the specified font that adopts the current font metrics.

## Declaration

```swift
func scaledFont(for font: UIFont) -> UIFont
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled to the current Dynamic Type setting.

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFont(for:compatibleWith:)](scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFont(for:maximumPointSize:)](scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
- [scaledFont(for:maximumPointSize:compatibleWith:)](scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.

# scaledFontForFont: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a version of the specified font that adopts the current font metrics.

## Declaration

```objectivec
- (UIFont *) scaledFontForFont:(UIFont *) font;
```

## Parameters

- `font`: The base font to use when applying the style information. Set the size of your font to the standard Dynamic Type size that you use for the corresponding content. Do not specify a font that has already been scaled; doing so results in an exception.

<a id="return-value"></a>

## Return Value

A version of the specified font with the appropriate style information applied to it, and scaled to the current Dynamic Type setting.

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

## See Also

### Creating Scaled Fonts

- [Scaling fonts automatically](../scaling-fonts-automatically.md): Scale text in your interface automatically using Dynamic Type.
- [scaledFontForFont:compatibleWithTraitCollection:](scaledfont%28for_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and supports the specified traits.
- [scaledFontForFont:maximumPointSize:](scaledfont%28for_maximumpointsize_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified maximum size.
- [scaledFontForFont:maximumPointSize:compatibleWithTraitCollection:](scaledfont%28for_maximumpointsize_compatiblewith_%29.md): Returns a version of the specified font that adopts the current font metrics and is constrained to the specified traits and size.
