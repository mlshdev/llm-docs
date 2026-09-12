> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct/standard](https://developer.apple.com/documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct/standard)

# standard (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The text system uses the same configuration of line-break strategies that it uses for standard UI labels.

## Declaration

```swift
static var standard: NSParagraphStyle.LineBreakStrategy { get }
```

<a id="Discussion"></a>

## Discussion

This strategy optimizes for displaying shorter strings that are common in UI labels. This strategy may be unsuitable for large amounts of text.

## See Also

### Getting the line-break styles

- [pushOut](pushout.md): The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.
- [hangulWordPriority](hangulwordpriority.md): The text system prohibits breaking between Hangul characters.

# NSLineBreakStrategyStandard (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

The text system uses the same configuration of line-break strategies that it uses for standard UI labels.

## Declaration

```objectivec
NSLineBreakStrategyStandard
```

<a id="Discussion"></a>

## Discussion

This strategy optimizes for displaying shorter strings that are common in UI labels. This strategy may be unsuitable for large amounts of text.

## See Also

### Getting the line-break styles

- [NSLineBreakStrategyPushOut](pushout.md): The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.
- [NSLineBreakStrategyHangulWordPriority](hangulwordpriority.md): The text system prohibits breaking between Hangul characters.
- [NSLineBreakStrategyNone](../../nslinebreakstrategy/nslinebreakstrategynone.md): The text system doesn’t use any line-break strategies.
