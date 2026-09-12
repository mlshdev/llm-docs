> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/addarrangedsubview(_:)](https://developer.apple.com/documentation/appkit/nsstackview/addarrangedsubview(_:))

# addArrangedSubview(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds the specified view to the end of the arranged subviews list.

## Declaration

```swift
func addArrangedSubview(_ view: NSView)
```

## Parameters

- `view`: The view to add to the end of the [arrangedSubviews](arrangedsubviews.md) array.

<a id="Discussion"></a>

## Discussion

The stack view ensures that the [arrangedSubviews](arrangedsubviews.md) array is always a subset of its [subviews](../nsview/subviews.md) array. This method automatically adds the provided view as a subview of the stack view, if it is not already. If the view is already a subview, this operation does not alter the subview ordering.

## See Also

### Managing the Arranged Subviews

- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
- [arrangedSubviews](arrangedsubviews.md): The array of views arranged by the stack view.

# addArrangedSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds the specified view to the end of the arranged subviews list.

## Declaration

```objectivec
- (void) addArrangedSubview:(NSView *) view;
```

## Parameters

- `view`: The view to add to the end of the [arrangedSubviews](arrangedsubviews.md) array.

<a id="Discussion"></a>

## Discussion

The stack view ensures that the [arrangedSubviews](arrangedsubviews.md) array is always a subset of its [subviews](../nsview/subviews.md) array. This method automatically adds the provided view as a subview of the stack view, if it is not already. If the view is already a subview, this operation does not alter the subview ordering.

## See Also

### Managing the Arranged Subviews

- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
- [arrangedSubviews](arrangedsubviews.md): The array of views arranged by the stack view.
