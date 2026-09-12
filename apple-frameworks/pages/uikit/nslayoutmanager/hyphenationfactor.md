> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/hyphenationfactor](https://developer.apple.com/documentation/uikit/nslayoutmanager/hyphenationfactor)

# hyphenationFactor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 7.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0)

The threshold controlling when hyphenation is done.

> Use [usesDefaultHyphenation](usesdefaulthyphenation.md) instead.

## Declaration

```swift
var hyphenationFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Whenever (width of the real contents of the line) / (the line fragment width) is below `factor`, hyphenation is attempted when laying out the line. Hyphenation slows down text layout and increases memory usage, so it should be used sparingly.

## See Also

### Properties

- [attributedString](../nslayoutmanager-attributedstring.md): The text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.
- [layoutOptions](../nslayoutmanager-layoutoptions.md): The layout manager’s current layout options.
- [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.

# hyphenationFactor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0)

The threshold controlling when hyphenation is done.

> Use [usesDefaultHyphenation](usesdefaulthyphenation.md) instead.

## Declaration

```objectivec
@property CGFloat hyphenationFactor;
```

<a id="Discussion"></a>

## Discussion

Whenever (width of the real contents of the line) / (the line fragment width) is below `factor`, hyphenation is attempted when laying out the line. Hyphenation slows down text layout and increases memory usage, so it should be used sparingly.

## See Also

### Properties

- [attributedString](../nslayoutmanager-attributedstring.md): The text storage object from which the `NSGlyphGenerator` object procures characters for glyph generation.
- [layoutOptions](../nslayoutmanager-layoutoptions.md): The layout manager’s current layout options.
- [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.
