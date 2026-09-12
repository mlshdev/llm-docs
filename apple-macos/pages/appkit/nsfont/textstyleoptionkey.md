> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/textstyleoptionkey](https://developer.apple.com/documentation/appkit/nsfont/textstyleoptionkey)

# NSFont.TextStyleOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 11.0+

The options that you apply when requesting the font or font descriptor of a preferred text style.

## Declaration

```swift
struct TextStyleOptionKey
```

<a id="Discussion"></a>

## Discussion

Pass a dictionary that contains any combination of these keys and their corresponding values to [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md) or [preferredFontDescriptor(forTextStyle:options:)](../nsfontdescriptor/preferredfontdescriptor%28fortextstyle_options_%29.md) to further configure the returned font or font descriptor.

## Topics

### Initializers

- [init(rawValue:)](textstyleoptionkey/init%28rawvalue_%29.md)

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
- [NSFont.TextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.

# NSFontTextStyleOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 11.0+

The options that you apply when requesting the font or font descriptor of a preferred text style.

## Declaration

```objectivec
typedef NSString * NSFontTextStyleOptionKey;
```

<a id="Discussion"></a>

## Discussion

Pass a dictionary that contains any combination of these keys and their corresponding values to [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md) or [preferredFontDescriptorForTextStyle:options:](../nsfontdescriptor/preferredfontdescriptor%28fortextstyle_options_%29.md) to further configure the returned font or font descriptor.

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
- [NSFontTextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
