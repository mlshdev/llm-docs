> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewdidbeginediting(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewdidbeginediting(_:))

# textViewDidBeginEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when editing of the specified text view begins.

## Declaration

```swift
optional func textViewDidBeginEditing(_ textView: UITextView)
```

## Parameters

- `textView`: The text view in which editing began.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A text view sends this message to its delegate immediately after the user initiates editing in a text view and before any changes are actually made. You can use this method to set up any editing-related data structures and generally prepare your delegate to receive future editing messages.

## See Also

### Responding to editing notifications

- [textViewShouldBeginEditing(\_:)](textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewShouldEndEditing(\_:)](textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
- [textViewDidEndEditing(\_:)](textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.

# textViewDidBeginEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when editing of the specified text view begins.

## Declaration

```objectivec
- (void) textViewDidBeginEditing:(UITextView *) textView;
```

## Parameters

- `textView`: The text view in which editing began.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A text view sends this message to its delegate immediately after the user initiates editing in a text view and before any changes are actually made. You can use this method to set up any editing-related data structures and generally prepare your delegate to receive future editing messages.

## See Also

### Responding to editing notifications

- [textViewShouldBeginEditing:](textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewShouldEndEditing:](textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
- [textViewDidEndEditing:](textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.
