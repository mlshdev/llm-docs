> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tighteningfactorfortruncation)

# tighteningFactorForTruncation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The threshold for using tightening as an alternative to truncation.

## Declaration

```swift
var tighteningFactorForTruncation: Float { get }
```

<a id="Discussion"></a>

## Discussion

When the line break mode specifies truncation, the text system attempts to tighten character spacing as an alternative to truncation. Provided that the ratio of the text width to the line fragment width doesn’t exceed `1.0` \+ the system sets the tightening factor to this property. Otherwise, the system truncates the text at a location determined by the line break mode.

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSParagraphStyle.LineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# tighteningFactorForTruncation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The threshold for using tightening as an alternative to truncation.

## Declaration

```objectivec
@property (readonly) float tighteningFactorForTruncation;
```

<a id="Discussion"></a>

## Discussion

When the line break mode specifies truncation, the text system attempts to tighten character spacing as an alternative to truncation. Provided that the ratio of the text width to the line fragment width doesn’t exceed `1.0` \+ the system sets the tightening factor to this property. Otherwise, the system truncates the text at a location determined by the line break mode.

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSLineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
