> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/arrangedsubviews](https://developer.apple.com/documentation/appkit/nsstackview/arrangedsubviews)

# arrangedSubviews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The array of views arranged by the stack view.

## Declaration

```swift
var arrangedSubviews: [NSView] { get }
```

<a id="Discussion"></a>

## Discussion

The stack view ensures that the contents of this array are always a subset of its [subviews](../nsview/subviews.md) array.

## See Also

### Managing the Arranged Subviews

- [addArrangedSubview(\_:)](addarrangedsubview%28__%29.md): Adds the specified view to the end of the arranged subviews list.
- [insertArrangedSubview(\_:at:)](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview(\_:)](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.

# arrangedSubviews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The array of views arranged by the stack view.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSView *> * arrangedSubviews;
```

<a id="Discussion"></a>

## Discussion

The stack view ensures that the contents of this array are always a subset of its [subviews](../nsview/subviews.md) array.

## See Also

### Managing the Arranged Subviews

- [addArrangedSubview:](addarrangedsubview%28__%29.md): Adds the specified view to the end of the arranged subviews list.
- [insertArrangedSubview:atIndex:](insertarrangedsubview%28__at_%29.md): Adds the provided view to the array of arranged subviews at the specified index.
- [removeArrangedSubview:](removearrangedsubview%28__%29.md): Removes the provided view from the stack’s array of arranged subviews.
