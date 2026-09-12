> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/systemfont(ofsize:weight:)](https://developer.apple.com/documentation/uikit/uifont/systemfont(ofsize:weight:))

# systemFont(ofSize:weight:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font object for standard interface items in the specified size and weight.

## Declaration

```swift
class func systemFont(ofSize fontSize: CGFloat, weight: UIFont.Weight) -> UIFont
```

## Parameters

- `fontSize`: The size (in points) to which the font is scaled. This value must be greater than 0.0.
- `weight`: The weight of the font, specified as a font weight constant. For a list of possible values, see “Font Weights” in [UIFontDescriptor](../uifontdescriptor.md). Avoid passing an arbitrary floating-point number for `weight`, because a font might not include a variant for every weight.

<a id="return-value"></a>

## Return Value

A font object of the specified size and weight.

<a id="Discussion"></a>

## Discussion

Instead of using this method to get a font, it’s often more appropriate to use [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md) because that method respects the user’s selected content size category.

## See Also

### Creating System Fonts

- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [UIFont.Weight](weight.md): Constants that represent standard typeface styles.
- [systemFont(ofSize:weight:width:)](systemfont%28ofsize_weight_width_%29.md)
- [UIFont.Width](width.md)
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFont(ofSize:)](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.

# systemFontOfSize:weight: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font object for standard interface items in the specified size and weight.

## Declaration

```objectivec
+ (UIFont *) systemFontOfSize:(CGFloat) fontSize weight:(UIFontWeight) weight;
```

## Parameters

- `fontSize`: The size (in points) to which the font is scaled. This value must be greater than 0.0.
- `weight`: The weight of the font, specified as a font weight constant. For a list of possible values, see “Font Weights” in [UIFontDescriptor](../uifontdescriptor.md). Avoid passing an arbitrary floating-point number for `weight`, because a font might not include a variant for every weight.

<a id="return-value"></a>

## Return Value

A font object of the specified size and weight.

<a id="Discussion"></a>

## Discussion

Instead of using this method to get a font, it’s often more appropriate to use [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md) because that method respects the user’s selected content size category.

## See Also

### Creating System Fonts

- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the font object for standard interface items in the specified size.
- [UIFontWeight](weight.md): Constants that represent standard typeface styles.
- [systemFontOfSize:weight:width:](systemfont%28ofsize_weight_width_%29.md)
- [UIFontWidth](width.md)
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFontOfSize:](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.
