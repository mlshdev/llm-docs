> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/monospacedsystemfont(ofsize:weight:)](https://developer.apple.com/documentation/uikit/uifont/monospacedsystemfont(ofsize:weight:))

# monospacedSystemFont(ofSize:weight:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the fixed-width font for standard interface text in the specified size.

## Declaration

```swift
class func monospacedSystemFont(ofSize fontSize: CGFloat, weight: UIFont.Weight) -> UIFont
```

## Parameters

- `fontSize`: The size (in points) for the font. This value must be greater than `0.0`.
- `weight`: The weight of the font, specified as a font weight constant. For a list of possible values, see [UIFont.Weight](weight.md). Avoid passing an arbitrary floating-point number for `weight`, because a font might not include a variant for every weight.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

This method provides the same font as the [monospaced](../uifontdescriptor/systemdesign/monospaced.md) system font descriptor. For design guidance, see [Typography](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/) in the Human Interface Guidelines.

> **Note**

>  To display text in the standard system font, but with fixed-width digits, use [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md) instead.

## See Also

### Creating System Fonts

- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFont.Weight](weight.md): Constants that represent standard typeface styles.
- [systemFont(ofSize:weight:width:)](systemfont%28ofsize_weight_width_%29.md)
- [UIFont.Width](width.md)
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFont(ofSize:)](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.

# monospacedSystemFontOfSize:weight: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the fixed-width font for standard interface text in the specified size.

## Declaration

```objectivec
+ (UIFont *) monospacedSystemFontOfSize:(CGFloat) fontSize weight:(UIFontWeight) weight;
```

## Parameters

- `fontSize`: The size (in points) for the font. This value must be greater than `0.0`.
- `weight`: The weight of the font, specified as a font weight constant. For a list of possible values, see [UIFontWeight](weight.md). Avoid passing an arbitrary floating-point number for `weight`, because a font might not include a variant for every weight.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

This method provides the same font as the [UIFontDescriptorSystemDesignMonospaced](../uifontdescriptor/systemdesign/monospaced.md) system font descriptor. For design guidance, see [Typography](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/) in the Human Interface Guidelines.

> **Note**

>  To display text in the standard system font, but with fixed-width digits, use [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md) instead.

## See Also

### Creating System Fonts

- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFontWeight](weight.md): Constants that represent standard typeface styles.
- [systemFontOfSize:weight:width:](systemfont%28ofsize_weight_width_%29.md)
- [UIFontWidth](width.md)
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFontOfSize:](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.
