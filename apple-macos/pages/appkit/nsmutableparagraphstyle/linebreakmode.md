> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/linebreakmode](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/linebreakmode)

# lineBreakMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The mode for breaking lines in the paragraph.

## Declaration

```swift
var lineBreakMode: NSLineBreakMode { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls how the text system lays out lines that don’t fit in its container, such as by truncating with an ellipsis (…) or clipping the text. This is different from [NSParagraphStyle.LineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.struct.md) , which controls where the system places line breaks in a paragraph.

## See Also

### Setting line-break information

- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

# lineBreakMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The mode for breaking lines in the paragraph.

## Declaration

```objectivec
@property NSLineBreakMode lineBreakMode;
```

<a id="Discussion"></a>

## Discussion

This property controls how the text system lays out lines that don’t fit in its container, such as by truncating with an ellipsis (…) or clipping the text. This is different from [NSLineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.struct.md) , which controls where the system places line breaks in a paragraph.

## See Also

### Setting line-break information

- [lineBreakStrategy](linebreakstrategy.md): The strategies that the text system may use to break lines while laying out the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.
