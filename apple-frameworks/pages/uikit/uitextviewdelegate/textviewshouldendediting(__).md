> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewshouldendediting(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewshouldendediting(_:))

# textViewShouldEndEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether to stop editing in the specified text view.

## Declaration

```swift
optional func textViewShouldEndEditing(_ textView: UITextView) -> Bool
```

## Parameters

- `textView`: The text view for which editing is about to end.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should stop; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the editing session should continue

<a id="Discussion"></a>

## Discussion

This method is called when the text view is asked to resign the first responder status. This might occur when the user tries to change the editing focus to another control. Before the focus actually changes, however, the text view calls this method to give your delegate a chance to decide whether it should.

Normally, you would return [true](https://developer.apple.com/documentation/swift/true) from this method to allow the text view to resign the first responder status. You might return [false](https://developer.apple.com/documentation/swift/false), however, in cases where your delegate wants to validate the contents of the text view. By returning [false](https://developer.apple.com/documentation/swift/false), you could prevent the user from switching to another control until the text view contained a valid value.

Be aware that this method provides only a recommendation about whether editing should end. Even if you return [false](https://developer.apple.com/documentation/swift/false) from this method, it is possible that editing might still end. For example, this might happen when the text view is forced to resign the first responder status by being removed from its parent view or window.

Implementation of this method by the delegate is optional. If it is not present, the first responder status is resigned as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Responding to editing notifications

- [textViewShouldBeginEditing(\_:)](textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewDidBeginEditing(\_:)](textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewDidEndEditing(\_:)](textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.

# textViewShouldEndEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether to stop editing in the specified text view.

## Declaration

```objectivec
- (BOOL) textViewShouldEndEditing:(UITextView *) textView;
```

## Parameters

- `textView`: The text view for which editing is about to end.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if editing should stop; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the editing session should continue

<a id="Discussion"></a>

## Discussion

This method is called when the text view is asked to resign the first responder status. This might occur when the user tries to change the editing focus to another control. Before the focus actually changes, however, the text view calls this method to give your delegate a chance to decide whether it should.

Normally, you would return [true](https://developer.apple.com/documentation/swift/true) from this method to allow the text view to resign the first responder status. You might return [false](https://developer.apple.com/documentation/swift/false), however, in cases where your delegate wants to validate the contents of the text view. By returning [false](https://developer.apple.com/documentation/swift/false), you could prevent the user from switching to another control until the text view contained a valid value.

Be aware that this method provides only a recommendation about whether editing should end. Even if you return [false](https://developer.apple.com/documentation/swift/false) from this method, it is possible that editing might still end. For example, this might happen when the text view is forced to resign the first responder status by being removed from its parent view or window.

Implementation of this method by the delegate is optional. If it is not present, the first responder status is resigned as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Responding to editing notifications

- [textViewShouldBeginEditing:](textviewshouldbeginediting%28__%29.md): Asks the delegate whether to begin editing in the specified text view.
- [textViewDidBeginEditing:](textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewDidEndEditing:](textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.
