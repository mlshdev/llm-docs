> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/removearrangedsubview(_:)](https://developer.apple.com/documentation/appkit/nsstackview/removearrangedsubview(_:))

# removeArrangedSubview(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes the provided view from the stack’s array of arranged subviews.

## Declaration

```swift
func removeArrangedSubview(_ view: NSView)
```

## Parameters

- `view`: The view to be removed from the array of views arranged by the stack.

<a id="Discussion"></a>

## Discussion

This method removes the provided view from the stack’s [arrangedSubviews](arrangedsubviews.md) array. After calling this method, the stack view no longer manages the view’s position and size. However, this method does not remove the provided view from the stack’s [subviews](../nsview/subviews.md) array; therefore, the view still appears in the view hierarchy.

To prevent the view from appearing on screen after calling this method, explicitly call the view’s [removeFromSuperview()](../nsview/removefromsuperview%28%29.md) method, or set its [isHidden](../nsview/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Arranged Subviews

- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds the specified view to the end of the arranged subviews list.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [arrangedSubviews](arrangedsubviews.md): The array of views arranged by the stack view.

# removeArrangedSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes the provided view from the stack’s array of arranged subviews.

## Declaration

```objectivec
- (void) removeArrangedSubview:(NSView *) view;
```

## Parameters

- `view`: The view to be removed from the array of views arranged by the stack.

<a id="Discussion"></a>

## Discussion

This method removes the provided view from the stack’s [arrangedSubviews](arrangedsubviews.md) array. After calling this method, the stack view no longer manages the view’s position and size. However, this method does not remove the provided view from the stack’s [subviews](../nsview/subviews.md) array; therefore, the view still appears in the view hierarchy.

To prevent the view from appearing on screen after calling this method, explicitly call the view’s [removeFromSuperview](../nsview/removefromsuperview%28%29.md) method, or set its [hidden](../nsview/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Arranged Subviews

- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds the specified view to the end of the arranged subviews list.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [arrangedSubviews](arrangedsubviews.md): The array of views arranged by the stack view.
