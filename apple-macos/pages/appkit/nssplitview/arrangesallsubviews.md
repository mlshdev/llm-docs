> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/arrangesallsubviews](https://developer.apple.com/documentation/appkit/nssplitview/arrangesallsubviews)

# arrangesAllSubviews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that determines whether the split view arranges all of its subviews as split panes.

## Declaration

```swift
var arrangesAllSubviews: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the split view arranges all of its subviews automatically. The [arrangedSubviews](arrangedsubviews.md) array is identical to the split view’s [subviews](../nsview/subviews.md) array, so any change to [subviews](../nsview/subviews.md) reflects in the [arrangedSubviews](arrangedsubviews.md) array. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), you must explicitly add a view as an arranged subview to arrange it as a split pane. You add an arranged subview using [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md).

When you change the value of this property from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), all existing subviews stay as arranged subviews in [arrangedSubviews](arrangedsubviews.md). When you change the value of this property from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true), all existing subviews become arranged subviews, and the value of the [subviews](../nsview/subviews.md) array becomes the [arrangedSubviews](arrangedsubviews.md) array.

## See Also

### Arranging Subviews

- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.

# arrangesAllSubviews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that determines whether the split view arranges all of its subviews as split panes.

## Declaration

```objectivec
@property BOOL arrangesAllSubviews;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the split view arranges all of its subviews automatically. The [arrangedSubviews](arrangedsubviews.md) array is identical to the split view’s [subviews](../nsview/subviews.md) array, so any change to [subviews](../nsview/subviews.md) reflects in the [arrangedSubviews](arrangedsubviews.md) array. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is [false](https://developer.apple.com/documentation/swift/false), you must explicitly add a view as an arranged subview to arrange it as a split pane. You add an arranged subview using [addArrangedSubview:](addarrangedsubview%28__%29.md).

When you change the value of this property from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), all existing subviews stay as arranged subviews in [arrangedSubviews](arrangedsubviews.md). When you change the value of this property from [false](https://developer.apple.com/documentation/swift/false) to [true](https://developer.apple.com/documentation/swift/true), all existing subviews become arranged subviews, and the value of the [subviews](../nsview/subviews.md) array becomes the [arrangedSubviews](arrangedsubviews.md) array.

## See Also

### Arranging Subviews

- [arrangedSubviews](arrangedsubviews.md): The array of views that the split view arranges as its split panes.
- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds a view as an arranged split pane.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds a view as an arranged split pane at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes a view as an arranged split pane.
