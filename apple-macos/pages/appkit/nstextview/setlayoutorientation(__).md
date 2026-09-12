> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/setlayoutorientation(_:)](https://developer.apple.com/documentation/appkit/nstextview/setlayoutorientation(_:))

# setLayoutOrientation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Changes the receiver’s layout orientation and invalidates the contents.

## Declaration

```swift
func setLayoutOrientation(_ orientation: NSLayoutManager.TextLayoutOrientation)
```

## Parameters

- `orientation`: The text layout orientation.

<a id="Discussion"></a>

## Discussion

Unlike other `NSTextView` properties, this is not shared by sibling views.  It also rotates the bounds 90 degrees, swaps horizontal and vertical bits of the [autoresizingMask](../nsview/autoresizingmask-swift.property.md) mask, and reconfigures [isHorizontallyResizable](../nstext/ishorizontallyresizable.md) and [isVerticallyResizable](../nstext/isverticallyresizable.md) properties accordingly.  Also, if [enclosingScrollView](../nsview/enclosingscrollview.md) returns non-`nil`, it reconfigures the horizontal and vertical ruler views, the horizontal and vertical scrollers, and the frame.

## See Also

### Changing layout orientation

- [changeLayoutOrientation(\_:)](changelayoutorientation%28__%29.md): An action method that sets the layout orientation of the text.

# setLayoutOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Changes the receiver’s layout orientation and invalidates the contents.

## Declaration

```objectivec
- (void) setLayoutOrientation:(NSTextLayoutOrientation) orientation;
```

## Parameters

- `orientation`: The text layout orientation.

<a id="Discussion"></a>

## Discussion

Unlike other `NSTextView` properties, this is not shared by sibling views.  It also rotates the bounds 90 degrees, swaps horizontal and vertical bits of the [autoresizingMask](../nsview/autoresizingmask-swift.property.md) mask, and reconfigures [horizontallyResizable](../nstext/ishorizontallyresizable.md) and [verticallyResizable](../nstext/isverticallyresizable.md) properties accordingly.  Also, if [enclosingScrollView](../nsview/enclosingscrollview.md) returns non-`nil`, it reconfigures the horizontal and vertical ruler views, the horizontal and vertical scrollers, and the frame.

## See Also

### Changing layout orientation

- [changeLayoutOrientation:](changelayoutorientation%28__%29.md): An action method that sets the layout orientation of the text.
