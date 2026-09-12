> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/descender](https://developer.apple.com/documentation/uikit/uifont/descender)

# descender (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The bottom y-coordinate, offset from the baseline, of the font’s longest descender.

## Declaration

```swift
var descender: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The descender value is measured in points. This value may be positive or negative. For example, if the longest descender extends 2 points below the baseline, this method returns `-2.0` .

## See Also

### Getting Font Metrics

- [pointSize](pointsize.md): The font’s point size, or the effective vertical point size for a font with a nonstandard matrix.
- [ascender](ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [leading](leading.md): The font’s leading information.
- [capHeight](capheight.md): The font’s cap height information.
- [xHeight](xheight.md): The x-height of the font.
- [lineHeight](lineheight.md): The height, in points, of text lines.

# descender (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The bottom y-coordinate, offset from the baseline, of the font’s longest descender.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat descender;
```

<a id="Discussion"></a>

## Discussion

The descender value is measured in points. This value may be positive or negative. For example, if the longest descender extends 2 points below the baseline, this method returns `-2.0` .

## See Also

### Getting Font Metrics

- [pointSize](pointsize.md): The font’s point size, or the effective vertical point size for a font with a nonstandard matrix.
- [ascender](ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [leading](leading.md): The font’s leading information.
- [capHeight](capheight.md): The font’s cap height information.
- [xHeight](xheight.md): The x-height of the font.
- [lineHeight](lineheight.md): The height, in points, of text lines.
