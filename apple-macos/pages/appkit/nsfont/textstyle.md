> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/textstyle](https://developer.apple.com/documentation/appkit/nsfont/textstyle)

# NSFont.TextStyle (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 11.0+

Constants that specify the preferred text styles you use with fonts.

## Declaration

```swift
struct TextStyle
```

<a id="Discussion"></a>

## Discussion

Pass these constants to [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md) or [preferredFontDescriptor(forTextStyle:options:)](../nsfontdescriptor/preferredfontdescriptor%28fortextstyle_options_%29.md) to retrieve the corresponding font or font descriptor.

## Topics

### Constants

- [body](textstyle/body.md): The font you use for body text.
- [callout](textstyle/callout.md): The font you use for callouts.
- [caption1](textstyle/caption1.md): The font you use for standard captions.
- [caption2](textstyle/caption2.md): The font you use for alternate captions.
- [footnote](textstyle/footnote.md): The font you use in footnotes.
- [headline](textstyle/headline.md): The font you use for headings.
- [subheadline](textstyle/subheadline.md): The font you use for subheadings.
- [largeTitle](textstyle/largetitle.md): The font you use for large titles.
- [title1](textstyle/title1.md): The font you use for first-level hierarchical headings.
- [title2](textstyle/title2.md): The font you use for second-level hierarchical headings.
- [title3](textstyle/title3.md): The font you use for third-level hierarchical headings.

### Initializers

- [init(rawValue:)](textstyle/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating System Fonts

- [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.Weight](weight.md): System-defined font-weight values.
- [NSFont.TextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

# NSFontTextStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

Constants that specify the preferred text styles you use with fonts.

## Declaration

```objectivec
typedef NSString * NSFontTextStyle;
```

<a id="Discussion"></a>

## Discussion

Pass these constants to [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md) or [preferredFontDescriptorForTextStyle:options:](../nsfontdescriptor/preferredfontdescriptor%28fortextstyle_options_%29.md) to retrieve the corresponding font or font descriptor.

## Topics

### Constants

- [NSFontTextStyleBody](textstyle/body.md): The font you use for body text.
- [NSFontTextStyleCallout](textstyle/callout.md): The font you use for callouts.
- [NSFontTextStyleCaption1](textstyle/caption1.md): The font you use for standard captions.
- [NSFontTextStyleCaption2](textstyle/caption2.md): The font you use for alternate captions.
- [NSFontTextStyleFootnote](textstyle/footnote.md): The font you use in footnotes.
- [NSFontTextStyleHeadline](textstyle/headline.md): The font you use for headings.
- [NSFontTextStyleSubheadline](textstyle/subheadline.md): The font you use for subheadings.
- [NSFontTextStyleLargeTitle](textstyle/largetitle.md): The font you use for large titles.
- [NSFontTextStyleTitle1](textstyle/title1.md): The font you use for first-level hierarchical headings.
- [NSFontTextStyleTitle2](textstyle/title2.md): The font you use for second-level hierarchical headings.
- [NSFontTextStyleTitle3](textstyle/title3.md): The font you use for third-level hierarchical headings.

## See Also

### Creating System Fonts

- [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontWeight](weight.md): System-defined font-weight values.
- [NSFontTextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.
