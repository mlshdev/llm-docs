> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/systemfont(ofsize:)](https://developer.apple.com/documentation/uikit/uifont/systemfont(ofsize:))

# systemFont(ofSize:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font object for standard interface items in the specified size.

## Declaration

```swift
class func systemFont(ofSize fontSize: CGFloat) -> UIFont
```

## Parameters

- `fontSize`: The size (in points) to which the font is scaled. This value must be greater than 0.0.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

Instead of using this method to get a font, it’s often more appropriate to use [preferredFont(forTextStyle:)](preferredfont%28fortextstyle_%29.md) because that method respects the user’s selected content size category.

## See Also

### Creating System Fonts

- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFont.Weight](weight.md): Constants that represent standard typeface styles.
- [systemFont(ofSize:weight:width:)](systemfont%28ofsize_weight_width_%29.md)
- [UIFont.Width](width.md)
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFont(ofSize:)](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.

# systemFontOfSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the font object for standard interface items in the specified size.

## Declaration

```objectivec
+ (UIFont *) systemFontOfSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The size (in points) to which the font is scaled. This value must be greater than 0.0.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

Instead of using this method to get a font, it’s often more appropriate to use [preferredFontForTextStyle:](preferredfont%28fortextstyle_%29.md) because that method respects the user’s selected content size category.

## See Also

### Creating System Fonts

- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the font object for standard interface items in the specified size and weight.
- [UIFontWeight](weight.md): Constants that represent standard typeface styles.
- [systemFontOfSize:weight:width:](systemfont%28ofsize_weight_width_%29.md)
- [UIFontWidth](width.md)
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in boldface type in the specified size.
- [italicSystemFontOfSize:](italicsystemfont%28ofsize_%29.md): Returns the font object for standard interface items in italic type in the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns the fixed-width font for standard interface text in the specified size.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns the standard system font with all digits of consistent width.
