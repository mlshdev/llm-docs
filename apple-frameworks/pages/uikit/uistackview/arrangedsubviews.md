> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/arrangedsubviews](https://developer.apple.com/documentation/uikit/uistackview/arrangedsubviews)

# arrangedSubviews (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The list of views arranged by the stack view.

## Declaration

```swift
var arrangedSubviews: [UIView] { get }
```

<a id="Discussion"></a>

## Discussion

The stack view ensures that the [arrangedSubviews](arrangedsubviews.md) array is always a subset of its [subviews](../uiview/subviews.md) array. Therefore, whenever the [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md) method is called, the stack view adds the view as a subview, if it isn’t already. Whenever an arranged view’s [removeFromSuperview()](../uiview/removefromsuperview%28%29.md) method is called, the stack view removes the view from its [arrangedSubviews](arrangedsubviews.md) array.

## See Also

### Related Documentation

- [removeFromSuperview()](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [init(arrangedSubviews:)](init%28arrangedsubviews_%29.md): Returns a new stack view object that manages the provided views.

### Managing arranged subviews

- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view to the end of the arranged subviews array.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.

# arrangedSubviews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The list of views arranged by the stack view.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof UIView *> * arrangedSubviews;
```

<a id="Discussion"></a>

## Discussion

The stack view ensures that the [arrangedSubviews](arrangedsubviews.md) array is always a subset of its [subviews](../uiview/subviews.md) array. Therefore, whenever the [addArrangedSubview:](addarrangedsubview%28__%29.md) method is called, the stack view adds the view as a subview, if it isn’t already. Whenever an arranged view’s [removeFromSuperview](../uiview/removefromsuperview%28%29.md) method is called, the stack view removes the view from its [arrangedSubviews](arrangedsubviews.md) array.

## See Also

### Related Documentation

- [removeFromSuperview](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [initWithArrangedSubviews:](init%28arrangedsubviews_%29.md): Returns a new stack view object that manages the provided views.

### Managing arranged subviews

- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view to the end of the arranged subviews array.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
