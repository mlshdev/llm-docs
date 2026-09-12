> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.property](https://developer.apple.com/documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.property)

# lineBreakStrategy (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The strategy for breaking lines while laying out paragraphs.

## Declaration

```swift
var lineBreakStrategy: NSParagraphStyle.LineBreakStrategy { get }
```

<a id="Discussion"></a>

## Discussion

Line-break strategies are collections of options the system uses to determine where to break lines in a paragraph. This is different from [lineBreakMode](linebreakmode.md), which controls how to lay out lines of text that don’t fit in a container. The system ignores this property if the paragraph style’s [lineBreakMode](linebreakmode.md) property specifies a mode that doesn’t support multiple lines, such as [NSLineBreakMode.byClipping](../nslinebreakmode/byclipping.md).

The default value is [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md).

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [NSParagraphStyle.LineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.

# lineBreakStrategy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The strategy for breaking lines while laying out paragraphs.

## Declaration

```objectivec
@property (readonly) NSLineBreakStrategy lineBreakStrategy;
```

<a id="Discussion"></a>

## Discussion

Line-break strategies are collections of options the system uses to determine where to break lines in a paragraph. This is different from [lineBreakMode](linebreakmode.md), which controls how to lay out lines of text that don’t fit in a container. The system ignores this property if the paragraph style’s [lineBreakMode](linebreakmode.md) property specifies a mode that doesn’t support multiple lines, such as [NSLineBreakByClipping](../nslinebreakmode/byclipping.md).

The default value is [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md).

## See Also

### Getting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph that don’t fit within a container.
- [NSLineBreakMode](../nslinebreakmode.md): Constants that specify what happens when a line is too long for a container.
- [NSLineBreakStrategy](linebreakstrategy-swift.struct.md): Constants that specify how the text system breaks lines while laying out paragraphs.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md): A Boolean value that indicates whether the paragraph style uses the system hyphenation settings.
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens character spacing before truncating text.
