> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/removearrangedsubview(_:)](https://developer.apple.com/documentation/appkit/nssplitview/removearrangedsubview(_:))

# removeArrangedSubview(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes a view as an arranged split pane.

## Declaration

```swift
func removeArrangedSubview(_ view: NSView)
```

<a id="Discussion"></a>

## Discussion

If the value of [arrangesAllSubviews](arrangesallsubviews.md) is [false](https://developer.apple.com/documentation/swift/false), calling this method doesn’t remove the view as a subview; it remains in the split view’s [subviews](../nsview/subviews.md) array.

If you remove a view as a subview (either by calling [removeFromSuperview()](../nsview/removefromsuperview%28%29.md) or removing it from the split view’s [subviews](../nsview/subviews.md) array), the system automatically removes the view as an arranged subview.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.

# removeArrangedSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Removes a view as an arranged split pane.

## Declaration

```objectivec
- (void) removeArrangedSubview:(NSView *) view;
```

<a id="Discussion"></a>

## Discussion

If the value of [arrangesAllSubviews](arrangesallsubviews.md) is [false](https://developer.apple.com/documentation/swift/false), calling this method doesn’t remove the view as a subview; it remains in the split view’s [subviews](../nsview/subviews.md) array.

If you remove a view as a subview (either by calling [removeFromSuperview](../nsview/removefromsuperview%28%29.md) or removing it from the split view’s [subviews](../nsview/subviews.md) array), the system automatically removes the view as an arranged subview.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
