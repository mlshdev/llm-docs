> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewdidendediting(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewdidendediting(_:))

# textViewDidEndEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when editing of the specified text view ends.

## Declaration

```swift
optional func textViewDidEndEditing(_ textView: UITextView)
```

## Parameters

- `textView`: The text view in which editing ended.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A text view sends this message to its delegate after it closes out any pending edits and resigns its first responder status. You can use this method to tear down any data structures or change any state information that you set when editing began.

## See Also

### Responding to editing notifications

- [textViewShouldBeginEditing(\_:)](textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewDidBeginEditing(\_:)](textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewShouldEndEditing(\_:)](textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.

# textViewDidEndEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when editing of the specified text view ends.

## Declaration

```objectivec
- (void) textViewDidEndEditing:(UITextView *) textView;
```

## Parameters

- `textView`: The text view in which editing ended.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A text view sends this message to its delegate after it closes out any pending edits and resigns its first responder status. You can use this method to tear down any data structures or change any state information that you set when editing began.

## See Also

### Responding to editing notifications

- [textViewShouldBeginEditing:](textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewDidBeginEditing:](textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewShouldEndEditing:](textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
