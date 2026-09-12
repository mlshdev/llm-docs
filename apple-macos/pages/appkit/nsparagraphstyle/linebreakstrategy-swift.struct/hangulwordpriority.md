> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct/hangulwordpriority](https://developer.apple.com/documentation/appkit/nsparagraphstyle/linebreakstrategy-swift.struct/hangulwordpriority)

# hangulWordPriority (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The text system prohibits breaking between Hangul characters.

## Declaration

```swift
static var hangulWordPriority: NSParagraphStyle.LineBreakStrategy { get }
```

<a id="Discussion"></a>

## Discussion

To avoid breaking between Hangul characters, this strategy is preferred for typesetting modern Korean documents that display UI strings.

## See Also

### Getting the line-break styles

- [pushOut](pushout.md): The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.
- [standard](standard.md): The text system uses the same configuration of line-break strategies that it uses for standard UI labels.

# NSLineBreakStrategyHangulWordPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

The text system prohibits breaking between Hangul characters.

## Declaration

```objectivec
NSLineBreakStrategyHangulWordPriority
```

<a id="Discussion"></a>

## Discussion

To avoid breaking between Hangul characters, this strategy is preferred for typesetting modern Korean documents that display UI strings.

## See Also

### Getting the line-break styles

- [NSLineBreakStrategyPushOut](pushout.md): The text system pushes out individual lines to avoid an orphan word on the last line of the paragraph.
- [NSLineBreakStrategyStandard](standard.md): The text system uses the same configuration of line-break strategies that it uses for standard UI labels.
- [NSLineBreakStrategyNone](../../nslinebreakstrategy/nslinebreakstrategynone.md): The text system doesn’t use any line-break strategies.
