> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewdidchangeselection(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewdidchangeselection(_:))

# textViewDidChangeSelection(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the text selection changes in the specified text view.

## Declaration

```swift
optional func textViewDidChangeSelection(_ textView: UITextView)
```

## Parameters

- `textView`: The text view whose selection changed.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. You can use the [selectedRange](../uitextview/selectedrange.md) property of the text view to get the new selection.

# textViewDidChangeSelection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when the text selection changes in the specified text view.

## Declaration

```objectivec
- (void) textViewDidChangeSelection:(UITextView *) textView;
```

## Parameters

- `textView`: The text view whose selection changed.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. You can use the [selectedRange](../uitextview/selectedrange.md) property of the text view to get the new selection.
