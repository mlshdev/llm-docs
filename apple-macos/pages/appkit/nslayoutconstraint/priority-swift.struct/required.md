> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.struct/required](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/required)

# required (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A required constraint.

## Declaration

```swift
static var required: NSLayoutConstraint.Priority { get }
```

<a id="Discussion"></a>

## Discussion

Do not specify a layout constraint that exceeds this number.

## See Also

### Constants

- [defaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [dragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [windowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [dragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [defaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [fittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

# NSLayoutPriorityRequired (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A required constraint.

## Declaration

```objectivec
static const NSLayoutPriority NSLayoutPriorityRequired;
```

<a id="Discussion"></a>

## Discussion

Do not specify a layout constraint that exceeds this number.

## See Also

### Constants

- [NSLayoutPriorityDefaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [NSLayoutPriorityDragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [NSLayoutPriorityWindowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [NSLayoutPriorityDragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [NSLayoutPriorityDefaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [NSLayoutPriorityFittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.
