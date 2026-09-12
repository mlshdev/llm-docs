> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/preferredfont(fortextstyle:options:)](https://developer.apple.com/documentation/appkit/nsfont/preferredfont(fortextstyle:options:))

# preferredFont(forTextStyle:options:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns the font associated with the text style.

## Declaration

```swift
class func preferredFont(forTextStyle style: NSFont.TextStyle, options: [NSFont.TextStyleOptionKey : Any] = [:]) -> NSFont
```

## Parameters

- `style`: The text style for which to return a font. See [NSFont.TextStyle](textstyle.md) for available values.
- `options`: A dictionary you use to further configure the returned font. See [NSFont.TextStyleOptionKey](textstyleoptionkey.md) for a list of valid keys. Pass an empty dictionary to use the default configuration.

<a id="return-value"></a>

## Return Value

The font associated with the text style.

<a id="discussion"></a>

## Discussion

> **Related sessions from WWDC23**

>  Session 10058: [What’s new with text and text interactions](https://developer.apple.com/videos/play/wwdc2023/10058/)

<a id="Discussion"></a>

## Discussion

A font’s metrics, such as [ascender](ascender.md), [descender](descender.md), and [leading](leading.md), can differ across devices for the same text style and point size. AppKit reserves extra vertical space to accommodate scripts like Thai and Hindi whenever someone includes one of those languages in their preferred languages, even if your text doesn’t use that script.

To take advantage of this behavior, create a font explicitly with this method and assign it to a text element. Don’t clip these text elements: ascenders and descenders for languages like Thai and Hindi often protrude beyond the expected line height. This typically isn’t a problem, since layouts usually leave extra space around neighboring elements, but clipping the view clips that text.

## See Also

### Creating System Fonts

- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.Weight](weight.md): System-defined font-weight values.
- [NSFont.TextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFont.TextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

# preferredFontForTextStyle:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns the font associated with the text style.

## Declaration

```objectivec
+ (NSFont *) preferredFontForTextStyle:(NSFontTextStyle) style options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `style`: The text style for which to return a font. See [NSFontTextStyle](textstyle.md) for available values.
- `options`: A dictionary you use to further configure the returned font. See [NSFontTextStyleOptionKey](textstyleoptionkey.md) for a list of valid keys. Pass an empty dictionary to use the default configuration.

<a id="return-value"></a>

## Return Value

The font associated with the text style.

<a id="discussion"></a>

## Discussion

> **Related sessions from WWDC23**

>  Session 10058: [What’s new with text and text interactions](https://developer.apple.com/videos/play/wwdc2023/10058/)

<a id="Discussion"></a>

## Discussion

A font’s metrics, such as [ascender](ascender.md), [descender](descender.md), and [leading](leading.md), can differ across devices for the same text style and point size. AppKit reserves extra vertical space to accommodate scripts like Thai and Hindi whenever someone includes one of those languages in their preferred languages, even if your text doesn’t use that script.

To take advantage of this behavior, create a font explicitly with this method and assign it to a text element. Don’t clip these text elements: ascenders and descenders for languages like Thai and Hindi often protrude beyond the expected line height. This typically isn’t a problem, since layouts usually leave extra space around neighboring elements, but clipping the view clips that text.

## See Also

### Creating System Fonts

- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontWeight](weight.md): System-defined font-weight values.
- [NSFontTextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFontTextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.
