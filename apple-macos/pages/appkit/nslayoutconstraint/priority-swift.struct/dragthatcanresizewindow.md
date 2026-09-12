> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.struct/dragthatcanresizewindow](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/dragthatcanresizewindow)

# dragThatCanResizeWindow (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Appropriate priority level for a drag that may end up resizing the window.

## Declaration

```swift
static var dragThatCanResizeWindow: NSLayoutConstraint.Priority { get }
```

<a id="Discussion"></a>

## Discussion

This drag does not need to explicitly resize the window. The user might be dragging around window contents, and it might be desirable for the window get bigger to accommodate those contents.

## See Also

### Constants

- [required](required.md): A required constraint.
- [defaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [windowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [dragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [defaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [fittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

# NSLayoutPriorityDragThatCanResizeWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Appropriate priority level for a drag that may end up resizing the window.

## Declaration

```objectivec
static const NSLayoutPriority NSLayoutPriorityDragThatCanResizeWindow;
```

<a id="Discussion"></a>

## Discussion

This drag does not need to explicitly resize the window. The user might be dragging around window contents, and it might be desirable for the window get bigger to accommodate those contents.

## See Also

### Constants

- [NSLayoutPriorityRequired](required.md): A required constraint.
- [NSLayoutPriorityDefaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [NSLayoutPriorityWindowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [NSLayoutPriorityDragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [NSLayoutPriorityDefaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [NSLayoutPriorityFittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.
