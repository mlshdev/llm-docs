> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/insertarrangedsubview(_:at:)](https://developer.apple.com/documentation/appkit/nssplitview/insertarrangedsubview(_:at:))

# insertArrangedSubview(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds a view as an arranged split pane at the specified index.

## Declaration

```swift
func insertArrangedSubview(_ view: NSView, at index: Int)
```

<a id="Discussion"></a>

## Discussion

If the view is already an arranged view, calling this method moves the view to the specified index in the [arrangedSubviews](arrangedsubviews.md) array. This change doesn’t affect the view’s index in the split view’s [subviews](../nsview/subviews.md) array.

If the view isn’t a subview of the split view, calling this method adds it to the split view’s [subviews](../nsview/subviews.md) array.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.

# insertArrangedSubview:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds a view as an arranged split pane at the specified index.

## Declaration

```objectivec
- (void) insertArrangedSubview:(NSView *) view atIndex:(NSInteger) index;
```

<a id="Discussion"></a>

## Discussion

If the view is already an arranged view, calling this method moves the view to the specified index in the [arrangedSubviews](arrangedsubviews.md) array. This change doesn’t affect the view’s index in the split view’s [subviews](../nsview/subviews.md) array.

If the view isn’t a subview of the split view, calling this method adds it to the split view’s [subviews](../nsview/subviews.md) array.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.
