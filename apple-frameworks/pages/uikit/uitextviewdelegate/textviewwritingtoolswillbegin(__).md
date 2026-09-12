> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewwritingtoolswillbegin(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewwritingtoolswillbegin(_:))

# textViewWritingToolsWillBegin(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Tells the delegate that an interaction with the writing tools interface is about to begin.

## Declaration

```swift
optional func textViewWritingToolsWillBegin(_ textView: UITextView)
```

## Parameters

- `textView`: The text view that is about to begin a writing tools session.

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to take any necessary steps to prepare your app for writing tools interactions. During the course of a writing tools session, the writing tools UI suggests changes to the text view’s text. It also allows the person to toggle between the original and replacement text before choosing one. To avoid issues while these changes occur, save any current data to disk and and disable features that might modify your view’s text storage while the session is active. For example, disable iCloud synchronization until the session ends. Reenable those features when the session ends.

The text view calls this method when the person requests the writing tools interface, but before the interface makes any changes to your content. Because the session isn’t active yet, the [isWritingToolsActive](../uitextview/iswritingtoolsactive.md) property of the text view is [false](https://developer.apple.com/documentation/swift/false) while this method executes. The value of that property resolves to [true](https://developer.apple.com/documentation/swift/true) only after the method returns.

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsDidEnd(\_:)](textviewwritingtoolsdidend%28__%29.md): Tells the delegate that the current writing tools session ended.
- [textView(\_:writingToolsIgnoredRangesInEnclosingRange:)](textview%28__writingtoolsignoredrangesinenclosingrange_%29.md): Asks the delegate to specify any ranges of text you want the writing tools to ignore.

# textViewWritingToolsWillBegin: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Tells the delegate that an interaction with the writing tools interface is about to begin.

## Declaration

```objectivec
- (void) textViewWritingToolsWillBegin:(UITextView *) textView;
```

## Parameters

- `textView`: The text view that is about to begin a writing tools session.

## Mentioned In

- [Customizing Writing Tools behavior for UIKit views](../customizing-writing-tools-behavior-for-system-views.md)

<a id="Discussion"></a>

## Discussion

Use this method to take any necessary steps to prepare your app for writing tools interactions. During the course of a writing tools session, the writing tools UI suggests changes to the text view’s text. It also allows the person to toggle between the original and replacement text before choosing one. To avoid issues while these changes occur, save any current data to disk and and disable features that might modify your view’s text storage while the session is active. For example, disable iCloud synchronization until the session ends. Reenable those features when the session ends.

The text view calls this method when the person requests the writing tools interface, but before the interface makes any changes to your content. Because the session isn’t active yet, the [writingToolsActive](../uitextview/iswritingtoolsactive.md) property of the text view is [false](https://developer.apple.com/documentation/swift/false) while this method executes. The value of that property resolves to [true](https://developer.apple.com/documentation/swift/true) only after the method returns.

## See Also

### Responding to writing tools interactions

- [textViewWritingToolsDidEnd:](textviewwritingtoolsdidend%28__%29.md): Tells the delegate that the current writing tools session ended.
- [textView:writingToolsIgnoredRangesInEnclosingRange:](textview%28__writingtoolsignoredrangesinenclosingrange_%29.md): Asks the delegate to specify any ranges of text you want the writing tools to ignore.
