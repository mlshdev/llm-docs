> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewshouldbeginediting(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewshouldbeginediting(_:))

# textViewShouldBeginEditing(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether to begin editing in the specified text view.

## Declaration

```swift
optional func textViewShouldBeginEditing(_ textView: UITextView) -> Bool
```

## Parameters

- `textView`: The text view for which editing is about to begin.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an editing session should be initiated; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disallow editing.

<a id="Discussion"></a>

## Discussion

When the user performs an action that would normally initiate an editing session, the text view calls this method first to see if editing should actually proceed. In most circumstances, you would simply return [true](https://developer.apple.com/documentation/swift/true) from this method to allow editing to proceed.

Implementation of this method by the delegate is optional. If it is not present, editing proceeds as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Responding to editing notifications

- [textViewDidBeginEditing(\_:)](textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewShouldEndEditing(\_:)](textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
- [textViewDidEndEditing(\_:)](textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.

# textViewShouldBeginEditing: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the delegate whether to begin editing in the specified text view.

## Declaration

```objectivec
- (BOOL) textViewShouldBeginEditing:(UITextView *) textView;
```

## Parameters

- `textView`: The text view for which editing is about to begin.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an editing session should be initiated; otherwise, [false](https://developer.apple.com/documentation/swift/false) to disallow editing.

<a id="Discussion"></a>

## Discussion

When the user performs an action that would normally initiate an editing session, the text view calls this method first to see if editing should actually proceed. In most circumstances, you would simply return [true](https://developer.apple.com/documentation/swift/true) from this method to allow editing to proceed.

Implementation of this method by the delegate is optional. If it is not present, editing proceeds as if this method had returned [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Responding to editing notifications

- [textViewDidBeginEditing:](textviewdidbeginediting%28__%29.md): Tells the delegate when editing of the specified text view begins.
- [textViewShouldEndEditing:](textviewshouldendediting%28__%29.md): Asks the delegate whether to stop editing in the specified text view.
- [textViewDidEndEditing:](textviewdidendediting%28__%29.md): Tells the delegate when editing of the specified text view ends.
