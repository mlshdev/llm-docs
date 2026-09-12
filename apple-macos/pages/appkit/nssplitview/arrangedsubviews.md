> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/arrangedsubviews](https://developer.apple.com/documentation/appkit/nssplitview/arrangedsubviews)

# arrangedSubviews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The array of views that the split view arranges as its split panes.

## Declaration

```swift
var arrangedSubviews: [NSView] { get }
```

<a id="Discussion"></a>

## Discussion

This array contains a subset of the views in the split view’s [subviews](../nsview/subviews.md) property. The views in this array may appear in a different order than in the [subviews](../nsview/subviews.md) array.

If the value of [arrangesAllSubviews](arrangesallsubviews.md) is [true](https://developer.apple.com/documentation/swift/true), this array is identical to the [subviews](../nsview/subviews.md) array.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.

# arrangedSubviews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The array of views that the split view arranges as its split panes.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSView *> * arrangedSubviews;
```

<a id="Discussion"></a>

## Discussion

This array contains a subset of the views in the split view’s [subviews](../nsview/subviews.md) property. The views in this array may appear in a different order than in the [subviews](../nsview/subviews.md) array.

If the value of [arrangesAllSubviews](arrangesallsubviews.md) is [true](https://developer.apple.com/documentation/swift/true), this array is identical to the [subviews](../nsview/subviews.md) array.

## See Also

### Arranging Subviews

- [arrangesAllSubviews](arrangesallsubviews.md): A Boolean value that determines whether the split view arranges all of its subviews as split panes.
- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.
