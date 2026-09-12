> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewwritingtoolsdidend(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewwritingtoolsdidend(_:))

# textViewWritingToolsDidEnd(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Tells the delegate that the current writing tools session ended.

## Declaration

```swift
optional func textViewWritingToolsDidEnd(_ textView: UITextView)
```

## Parameters

- `textView`: The text view that ended a writing tools session.

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to undo any actions you took at the start of a writing tools session to modify your app’s behavior.  The text view calls this method after the writing session finishes. At this point, the text view contains the final text the person chose.

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin(\_:)](textviewwritingtoolswillbegin%28__%29.md): Tells the delegate that an interaction with the writing tools interface is about to begin.
- [textView(\_:writingToolsIgnoredRangesInEnclosingRange:)](textview%28__writingtoolsignoredrangesinenclosingrange_%29.md): Asks the delegate to specify any ranges of text you want the writing tools to ignore.

# textViewWritingToolsDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Tells the delegate that the current writing tools session ended.

## Declaration

```objectivec
- (void) textViewWritingToolsDidEnd:(UITextView *) textView;
```

## Parameters

- `textView`: The text view that ended a writing tools session.

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to undo any actions you took at the start of a writing tools session to modify your app’s behavior.  The text view calls this method after the writing session finishes. At this point, the text view contains the final text the person chose.

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsWillBegin:](textviewwritingtoolswillbegin%28__%29.md): Tells the delegate that an interaction with the writing tools interface is about to begin.
- [textView:writingToolsIgnoredRangesInEnclosingRange:](textview%28__writingtoolsignoredrangesinenclosingrange_%29.md): Asks the delegate to specify any ranges of text you want the writing tools to ignore.
