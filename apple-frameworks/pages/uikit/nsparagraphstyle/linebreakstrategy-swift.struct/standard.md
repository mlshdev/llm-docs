> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/linebreakstrategy-swift.struct/standard](https://developer.apple.com/documentation/uikit/nsparagraphstyle/linebreakstrategy-swift.struct/standard)

# standard (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

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

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

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
