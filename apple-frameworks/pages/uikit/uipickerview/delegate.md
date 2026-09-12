> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview/delegate](https://developer.apple.com/documentation/uikit/uipickerview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate for the picker view.

## Declaration

```swift
weak var delegate: (any UIPickerViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIPickerViewDelegate](../uipickerviewdelegate.md) protocol and implement the required methods to return the drawing rectangle for rows in each component. It also provides the content for each component’s row, either as a string or a view, and it typically responds to new selections or deselections.

## See Also

### Customizing the picker behavior

- [UIPickerViewDelegate](../uipickerviewdelegate.md): The interface for a picker view’s delegate.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate for the picker view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPickerViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIPickerViewDelegate](../uipickerviewdelegate.md) protocol and implement the required methods to return the drawing rectangle for rows in each component. It also provides the content for each component’s row, either as a string or a view, and it typically responds to new selections or deselections.

## See Also

### Customizing the picker behavior

- [UIPickerViewDelegate](../uipickerviewdelegate.md): The interface for a picker view’s delegate.
