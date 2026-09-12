> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistackview/init(arrangedsubviews:)](https://developer.apple.com/documentation/uikit/uistackview/init(arrangedsubviews:))

# init(arrangedSubviews:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new stack view object that manages the provided views.

## Declaration

```swift
convenience init(arrangedSubviews views: [UIView])
```

## Parameters

- `views`: The views to be arranged by the stack view.

<a id="return-value"></a>

## Return Value

A new stack view object. This stack view contains and lays out the provided views in a single stack. You can modify the orientation or appearance of this stack, using the stack view’s properties.

<a id="Discussion"></a>

## Discussion

The stack view adds all the arranged views to its [arrangedSubviews](arrangedsubviews.md) array. It also adds these views as subviews. If any view contained in the `arrangedSubviews` array receives a [removeFromSuperview()](../uiview/removefromsuperview%28%29.md) method call, the stack view also removes it from the `arrangedSubviews`.

## See Also

### Related Documentation

- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeFromSuperview()](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [arrangedSubviews](arrangedsubviews.md): The list of views arranged by the stack view.
- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view to the end of the arranged subviews array.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.

### Initializing a stack view

- [init(frame:)](init%28frame_%29.md): Creates a stack view with the specified frame.
- [init(coder:)](init%28coder_%29.md): Creates a stack view from data in an unarchiver.

# initWithArrangedSubviews: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new stack view object that manages the provided views.

## Declaration

```objectivec
- (instancetype) initWithArrangedSubviews:(NSArray<__kindof UIView *> *) views;
```

## Parameters

- `views`: The views to be arranged by the stack view.

<a id="return-value"></a>

## Return Value

A new stack view object. This stack view contains and lays out the provided views in a single stack. You can modify the orientation or appearance of this stack, using the stack view’s properties.

<a id="Discussion"></a>

## Discussion

The stack view adds all the arranged views to its [arrangedSubviews](arrangedsubviews.md) array. It also adds these views as subviews. If any view contained in the `arrangedSubviews` array receives a [removeFromSuperview](../uiview/removefromsuperview%28%29.md) method call, the stack view also removes it from the `arrangedSubviews`.

## See Also

### Related Documentation

- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeFromSuperview](../uiview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, and removes it from the responder chain.
- [arrangedSubviews](arrangedsubviews.md): The list of views arranged by the stack view.
- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view to the end of the arranged subviews array.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.

### Initializing a stack view

- [initWithFrame:](init%28frame_%29.md): Creates a stack view with the specified frame.
- [initWithCoder:](init%28coder_%29.md): Creates a stack view from data in an unarchiver.
