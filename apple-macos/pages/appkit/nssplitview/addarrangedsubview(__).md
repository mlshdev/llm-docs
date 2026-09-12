> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/addarrangedsubview(_:)](https://developer.apple.com/documentation/appkit/nssplitview/addarrangedsubview(_:))

# addArrangedSubview(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds a view as an arranged split pane.

## Declaration

```swift
func addArrangedSubview(_ view: NSView)
```

<a id="Discussion"></a>

## Discussion

If the view isn’t a subview of the split view, calling this method adds it to the split view’s [subviews](../nsview/subviews.md) array.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.

# addArrangedSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Adds a view as an arranged split pane.

## Declaration

```objectivec
- (void) addArrangedSubview:(NSView *) view;
```

<a id="Discussion"></a>

## Discussion

If the view isn’t a subview of the split view, calling this method adds it to the split view’s [subviews](../nsview/subviews.md) array.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.
