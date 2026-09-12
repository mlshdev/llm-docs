> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/linebreakstrategy-swift.struct/hangulwordpriority](https://developer.apple.com/documentation/uikit/nsparagraphstyle/linebreakstrategy-swift.struct/hangulwordpriority)

# hangulWordPriority (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

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

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

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
