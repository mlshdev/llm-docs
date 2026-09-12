> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/delegate](https://developer.apple.com/documentation/uikit/uitextview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text view’s delegate.

## Declaration

```swift
weak var delegate: (any UITextViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A text view delegate responds to editing-related messages from the text view. You can use the delegate to track changes to the text itself and to the current selection.

For information about the methods implemented by the delegate, see [UITextViewDelegate](../uitextviewdelegate.md).

## See Also

### Responding to text view changes

- [UITextViewDelegate](../uitextviewdelegate.md): The methods for receiving editing-related messages for text view objects.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text view’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITextViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A text view delegate responds to editing-related messages from the text view. You can use the delegate to track changes to the text itself and to the current selection.

For information about the methods implemented by the delegate, see [UITextViewDelegate](../uitextviewdelegate.md).

## See Also

### Responding to text view changes

- [UITextViewDelegate](../uitextviewdelegate.md): The methods for receiving editing-related messages for text view objects.
