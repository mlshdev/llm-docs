> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/monospaceddigitsystemfont(ofsize:weight:)](https://developer.apple.com/documentation/uikit/uifont/monospaceddigitsystemfont(ofsize:weight:))

# monospacedDigitSystemFont(ofSize:weight:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the standard system font with all digits of consistent width.

## Declaration

```swift
class func monospacedDigitSystemFont(ofSize fontSize: CGFloat, weight: UIFont.Weight) -> UIFont
```

## Parameters

- `fontSize`: The size (in points) for the font. This value must be greater than `0.0`.
- `weight`: The weight of the font, specified as a font weight constant. For a list of possible values, see [UIFont.Weight](weight.md). Avoid passing an arbitrary floating-point number for `weight`, because a font might not include a variant for every weight.

<a id="return-value"></a>

## Return Value

A font object of the specified size and weight, with variable-width text and fixed-width digits.

<a id="Discussion"></a>

## Discussion

The system font uses proportional spacing. When displaying numerical data, you can use this method to retrieve a monospace font for displaying that data. With a monospaced font, each digit occupies the same amount of space, which makes it easier to read numbers that are stacked vertically.

> **Note**

>  This method returns the same font as [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md), but with modified digits. If you want all characters to be fixed-width, use [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md) instead.

## See Also

### Creating System Fonts

- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFont.Weight](weight.md): Constants that represent standard typeface styles.
- [systemFont(ofSize:weight:width:)](systemfont%28ofsize_weight_width_%29.md)
- [UIFont.Width](width.md)
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFont(ofSize:)](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.

# monospacedDigitSystemFontOfSize:weight: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the standard system font with all digits of consistent width.

## Declaration

```objectivec
+ (UIFont *) monospacedDigitSystemFontOfSize:(CGFloat) fontSize weight:(UIFontWeight) weight;
```

## Parameters

- `fontSize`: The size (in points) for the font. This value must be greater than `0.0`.
- `weight`: The weight of the font, specified as a font weight constant. For a list of possible values, see [UIFontWeight](weight.md). Avoid passing an arbitrary floating-point number for `weight`, because a font might not include a variant for every weight.

<a id="return-value"></a>

## Return Value

A font object of the specified size and weight, with variable-width text and fixed-width digits.

<a id="Discussion"></a>

## Discussion

The system font uses proportional spacing. When displaying numerical data, you can use this method to retrieve a monospace font for displaying that data. With a monospaced font, each digit occupies the same amount of space, which makes it easier to read numbers that are stacked vertically.

> **Note**

>  This method returns the same font as [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md), but with modified digits. If you want all characters to be fixed-width, use [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md) instead.

## See Also

### Creating System Fonts

- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFontWeight](weight.md): Constants that represent standard typeface styles.
- [systemFontOfSize:weight:width:](systemfont%28ofsize_weight_width_%29.md)
- [UIFontWidth](width.md)
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFontOfSize:](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
