> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/linebreakmode](https://developer.apple.com/documentation/appkit/nsparagraphstyle/linebreakmode)

# lineBreakMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The mode for breaking lines in the paragraph that don’t fit within a container.

## Declaration

```swift
var lineBreakMode: NSLineBreakMode { get }
```

<a id="Discussion"></a>

## Discussion

This property controls how the text system lays out lines that don’t fit in its container, such as by truncating with an ellipsis (…) or clipping the text. This is different from [NSParagraphStyle.LineBreakStrategy](linebreakstrategy-swift.struct.md), which controls where the system places line breaks in a paragraph.

## See Also

### Getting line-break information

- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSParagraphStyle.LineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# lineBreakMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The mode for breaking lines in the paragraph that don’t fit within a container.

## Declaration

```objectivec
@property (readonly) NSLineBreakMode lineBreakMode;
```

<a id="Discussion"></a>

## Discussion

This property controls how the text system lays out lines that don’t fit in its container, such as by truncating with an ellipsis (…) or clipping the text. This is different from [NSLineBreakStrategy](linebreakstrategy-swift.struct.md), which controls where the system places line breaks in a paragraph.

## See Also

### Getting line-break information

- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [lineBreakStrategy](linebreakstrategy-swift.property.md): The strategy for breaking lines while laying out paragraphs.
- [NSLineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
