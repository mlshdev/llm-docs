> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct/pushout](https://developer.apple.com/documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct/pushout)

# pushOut (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.

## Declaration

```swift
static var pushOut: NSParagraphStyle.LineBreakStrategy { get }
```

<a id="Discussion"></a>

## Discussion

To avoid an orphan word on the last line of a paragraph before a page break, the text system may extend individual lines by one or more words. Typically, the text system only pushes out the last line by one word.

## See Also

### Getting the line-break styles

- [hangulWordPriority](hangulwordpriority.md): The text system prohibits breaking between Hangul characters.
- [standard](standard.md): The text system uses the same configuration of line-break strategies that it uses for standard UI labels.

# NSLineBreakStrategyPushOut (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.

## Declaration

```objectivec
NSLineBreakStrategyPushOut
```

<a id="Discussion"></a>

## Discussion

To avoid an orphan word on the last line of a paragraph before a page break, the text system may extend individual lines by one or more words. Typically, the text system only pushes out the last line by one word.

## See Also

### Getting the line-break styles

- [NSLineBreakStrategyHangulWordPriority](hangulwordpriority.md): The text system prohibits breaking between Hangul characters.
- [NSLineBreakStrategyStandard](standard.md): The text system uses the same configuration of line-break strategies that it uses for standard UI labels.
- [NSLineBreakStrategyNone](../../nslinebreakstrategy/nslinebreakstrategynone.md): The text system doesn’t use any line-break strategies.
