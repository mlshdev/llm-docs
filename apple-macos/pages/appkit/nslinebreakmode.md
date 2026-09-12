> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslinebreakmode](https://developer.apple.com/documentation/appkit/nslinebreakmode)

# NSLineBreakMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Constants that specify what happens when a line is too long for a container.

## Declaration

```swift
enum NSLineBreakMode
```

## Topics

### Constants

- [NSLineBreakMode.byWordWrapping](nslinebreakmode/bywordwrapping.md): The value that indicates wrapping occurs at word boundaries, unless the word doesn’t fit on a single line.
- [NSLineBreakMode.byCharWrapping](nslinebreakmode/bycharwrapping.md): The value that indicates wrapping occurs before the first character that doesn’t fit.
- [NSLineBreakMode.byClipping](nslinebreakmode/byclipping.md): The value that indicates lines don’t extend past the edge of the text container.
- [NSLineBreakMode.byTruncatingHead](nslinebreakmode/bytruncatinghead.md): The value that indicates that a line displays so that the end fits in the container and an ellipsis glyph indicates the missing text at the beginning of the line.
- [NSLineBreakMode.byTruncatingTail](nslinebreakmode/bytruncatingtail.md): The value that indicates a line displays so that the beginning fits in the container and an ellipsis glyph indicates the missing text at the end of the line.
- [NSLineBreakMode.byTruncatingMiddle](nslinebreakmode/bytruncatingmiddle.md): The value that indicates that a line displays so that the beginning and end fit in the container and an ellipsis glyph indicates the missing text in the middle.

### Initializers

- [init(rawValue:)](nslinebreakmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting line-break information

- [lineBreakMode](nsparagraphstyle/linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [lineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSParagraphStyle.LineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](nsparagraphstyle/hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](nsparagraphstyle/usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](nsparagraphstyle/tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](nsparagraphstyle/allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# NSLineBreakMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Constants that specify what happens when a line is too long for a container.

## Declaration

```objectivec
enum NSLineBreakMode : NSUInteger;
```

## Topics

### Constants

- [NSLineBreakByWordWrapping](nslinebreakmode/bywordwrapping.md): The value that indicates wrapping occurs at word boundaries, unless the word doesn’t fit on a single line.
- [NSLineBreakByCharWrapping](nslinebreakmode/bycharwrapping.md): The value that indicates wrapping occurs before the first character that doesn’t fit.
- [NSLineBreakByClipping](nslinebreakmode/byclipping.md): The value that indicates lines don’t extend past the edge of the text container.
- [NSLineBreakByTruncatingHead](nslinebreakmode/bytruncatinghead.md): The value that indicates that a line displays so that the end fits in the container and an ellipsis glyph indicates the missing text at the beginning of the line.
- [NSLineBreakByTruncatingTail](nslinebreakmode/bytruncatingtail.md): The value that indicates a line displays so that the beginning fits in the container and an ellipsis glyph indicates the missing text at the end of the line.
- [NSLineBreakByTruncatingMiddle](nslinebreakmode/bytruncatingmiddle.md): The value that indicates that a line displays so that the beginning and end fit in the container and an ellipsis glyph indicates the missing text in the middle.

## See Also

### Getting line-break information

- [lineBreakMode](nsparagraphstyle/linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [lineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSLineBreakStrategy](nsparagraphstyle/linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](nsparagraphstyle/hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](nsparagraphstyle/usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](nsparagraphstyle/tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](nsparagraphstyle/allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
