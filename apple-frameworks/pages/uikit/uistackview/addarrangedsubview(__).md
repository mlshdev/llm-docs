> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/addarrangedsubview(_:)](https://developer.apple.com/documentation/uikit/uistackview/addarrangedsubview(_:))

# addArrangedSubview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Adds a view to the end of the arranged subviews array.

## Declaration

```swift
func addArrangedSubview(_ view: UIView)
```

## Parameters

- `view`: The view to add to the array of views arranged by the stack.

<a id="Discussion"></a>

## Discussion

The stack view ensures that the [arrangedSubviews](arrangedsubviews.md) array is always a subset of its [subviews](../uiview/subviews.md) array. This method automatically adds the provided view as a subview of the stack view, if it isn’t already. If the view is already a subview, this operation doesn’t alter the subview ordering.

## See Also

### Related Documentation

- [removeFromSuperview()](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [init(arrangedSubviews:)](init%28arrangedsubviews_%29.md): Returns a new stack view object that manages the provided views.

### Managing arranged subviews

- [arrangedSubviews](arrangedsubviews.md): The list of views arranged by the stack view.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.

# addArrangedSubview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Adds a view to the end of the arranged subviews array.

## Declaration

```objectivec
- (void) addArrangedSubview:(UIView *) view;
```

## Parameters

- `view`: The view to add to the array of views arranged by the stack.

<a id="Discussion"></a>

## Discussion

The stack view ensures that the [arrangedSubviews](arrangedsubviews.md) array is always a subset of its [subviews](../uiview/subviews.md) array. This method automatically adds the provided view as a subview of the stack view, if it isn’t already. If the view is already a subview, this operation doesn’t alter the subview ordering.

## See Also

### Related Documentation

- [removeFromSuperview](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [initWithArrangedSubviews:](init%28arrangedsubviews_%29.md): Returns a new stack view object that manages the provided views.

### Managing arranged subviews

- [arrangedSubviews](arrangedsubviews.md): The list of views arranged by the stack view.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
