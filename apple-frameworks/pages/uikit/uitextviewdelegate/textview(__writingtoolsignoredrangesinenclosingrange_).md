> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:writingtoolsignoredrangesinenclosingrange:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:writingtoolsignoredrangesinenclosingrange:))

# textView(\_:writingToolsIgnoredRangesInEnclosingRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Asks the delegate to specify any ranges of text you want the writing tools to ignore.

## Declaration

```swift
optional func textView(_ textView: UITextView, writingToolsIgnoredRangesInEnclosingRange enclosingRange: NSRange) -> [NSValue]
```

## Parameters

- `textView`: The text view with the active writing tools session.
- `enclosingRange`: The text range that the writing tools are examining. When computing the text ranges to ignore, skip any text that falls outside of this boundary.

<a id="return-value"></a>

## Return Value

One or more ranges of text you want the writing tools to ignore. Return an empty array to allow the modification of all the proposed text.

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to prevent the writing tools session from modifying portions of the current text. For example, you might prevent the writing tools session from modifying code or read-only text. The text view provides you with the overall range of text to consider, and you return one or more subranges you want the writing tools to ignore.

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin(\_:)](textviewwritingtoolswillbegin%28__%29.md): Tells the delegate that an interaction with the writing tools interface is about to begin.
- [textViewWritingToolsDidEnd(\_:)](textviewwritingtoolsdidend%28__%29.md): Tells the delegate that the current writing tools session ended.

# textView:writingToolsIgnoredRangesInEnclosingRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Asks the delegate to specify any ranges of text you want the writing tools to ignore.

## Declaration

```objectivec
- (NSArray<NSValue *> *) textView:(UITextView *) textView writingToolsIgnoredRangesInEnclosingRange:(NSRange) enclosingRange;
```

## Parameters

- `textView`: The text view with the active writing tools session.
- `enclosingRange`: The text range that the writing tools are examining. When computing the text ranges to ignore, skip any text that falls outside of this boundary.

<a id="return-value"></a>

## Return Value

One or more ranges of text you want the writing tools to ignore. Return an empty array to allow the modification of all the proposed text.

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to prevent the writing tools session from modifying portions of the current text. For example, you might prevent the writing tools session from modifying code or read-only text. The text view provides you with the overall range of text to consider, and you return one or more subranges you want the writing tools to ignore.

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin:](textviewwritingtoolswillbegin%28__%29.md): Tells the delegate that an interaction with the writing tools interface is about to begin.
- [textViewWritingToolsDidEnd:](textviewwritingtoolsdidend%28__%29.md): Tells the delegate that the current writing tools session ended.
