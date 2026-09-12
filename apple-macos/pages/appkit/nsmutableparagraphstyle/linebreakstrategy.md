> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/linebreakstrategy](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/linebreakstrategy)

# lineBreakStrategy (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The strategies that the text system may use to break lines while laying out the paragraph.

## Declaration

```swift
var lineBreakStrategy: NSParagraphStyle.LineBreakStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

Line-break strategies are collections of options the system uses to determine where to break lines in a paragraph. This is different from [lineBreakMode](../nsparagraphstyle/linebreakmode.md), which controls how to lay out lines of text that don’t fit in a container. The system ignores this property if the paragraph style’s [lineBreakMode](../nsparagraphstyle/linebreakmode.md) property specifies a mode that doesn’t support multiple lines, such as [NSLineBreakMode.byClipping](../nslinebreakmode/byclipping.md).

The default value is [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md).

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.

# lineBreakStrategy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The strategies that the text system may use to break lines while laying out the paragraph.

## Declaration

```objectivec
@property NSLineBreakStrategy lineBreakStrategy;
```

<a id="Discussion"></a>

## Discussion

Line-break strategies are collections of options the system uses to determine where to break lines in a paragraph. This is different from [lineBreakMode](../nsparagraphstyle/linebreakmode.md), which controls how to lay out lines of text that don’t fit in a container. The system ignores this property if the paragraph style’s [lineBreakMode](../nsparagraphstyle/linebreakmode.md) property specifies a mode that doesn’t support multiple lines, such as [NSLineBreakByClipping](../nslinebreakmode/byclipping.md).

The default value is [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md).

## See Also

### Setting line-break information

- [lineBreakMode](linebreakmode.md): The mode for breaking lines in the paragraph.
- [hyphenationFactor](hyphenationfactor.md): The paragraph’s threshold for hyphenation.
- [usesDefaultHyphenation](usesdefaulthyphenation.md)
- [tighteningFactorForTruncation](tighteningfactorfortruncation.md): The threshold for using tightening as an alternative to truncation.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that indicates whether the system tightens intercharacter spacing before truncating text.
