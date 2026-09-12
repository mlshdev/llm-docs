> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/removearrangedsubview(_:)](https://developer.apple.com/documentation/uikit/uistackview/removearrangedsubview(_:))

# removeArrangedSubview(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Removes the provided view from the stack’s array of arranged subviews.

## Declaration

```swift
func removeArrangedSubview(_ view: UIView)
```

## Parameters

- `view`: The view to be removed from the array of views arranged by the stack.

<a id="Discussion"></a>

## Discussion

This method removes the provided view from the stack’s [arrangedSubviews](arrangedsubviews.md) array. The stack view no longer manages the view’s position and size. However, this method doesn’t remove the provided view from the stack’s [subviews](../uiview/subviews.md) array; therefore, the view is still displayed as part of the view hierarchy.

To prevent the view from appearing on screen after calling the stack’s [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md) method, explicitly remove the view from the subviews array by calling the view’s [removeFromSuperview()](../uiview/removefromsuperview%28%29.md) method, or set the view’s [isHidden](../uiview/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [removeFromSuperview()](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [init(arrangedSubviews:)](init%28arrangedsubviews_%29.md): Returns a new stack view object that manages the provided views.

### Managing arranged subviews

- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view to the end of the arranged subviews array.
- [arrangedSubviews](arrangedsubviews.md): The list of views arranged by the stack view.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.

# removeArrangedSubview: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Removes the provided view from the stack’s array of arranged subviews.

## Declaration

```objectivec
- (void) removeArrangedSubview:(UIView *) view;
```

## Parameters

- `view`: The view to be removed from the array of views arranged by the stack.

<a id="Discussion"></a>

## Discussion

This method removes the provided view from the stack’s [arrangedSubviews](arrangedsubviews.md) array. The stack view no longer manages the view’s position and size. However, this method doesn’t remove the provided view from the stack’s [subviews](../uiview/subviews.md) array; therefore, the view is still displayed as part of the view hierarchy.

To prevent the view from appearing on screen after calling the stack’s [removeArrangedSubview:](removearrangedsubview%28__%29.md) method, explicitly remove the view from the subviews array by calling the view’s [removeFromSuperview](../uiview/removefromsuperview%28%29.md) method, or set the view’s [hidden](../uiview/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [removeFromSuperview](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [initWithArrangedSubviews:](init%28arrangedsubviews_%29.md): Returns a new stack view object that manages the provided views.

### Managing arranged subviews

- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view to the end of the arranged subviews array.
- [arrangedSubviews](arrangedsubviews.md): The list of views arranged by the stack view.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
