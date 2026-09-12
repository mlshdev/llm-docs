> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.struct/defaulthigh](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/defaulthigh)

# defaultHigh (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Priority level with which a button resists compressing its content.

## Declaration

```swift
static var defaultHigh: NSLayoutConstraint.Priority { get }
```

<a id="Discussion"></a>

## Discussion

Note that the level is higher than [windowSizeStayPut](windowsizestayput.md). This means dragging to resize a window will not make buttons clip, rather the window frame is constrained.

## See Also

### Constants

- [required](required.md): A required constraint.
- [dragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [windowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [dragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [defaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [fittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

# NSLayoutPriorityDefaultHigh (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Priority level with which a button resists compressing its content.

## Declaration

```objectivec
static const NSLayoutPriority NSLayoutPriorityDefaultHigh;
```

<a id="Discussion"></a>

## Discussion

Note that the level is higher than [NSLayoutPriorityWindowSizeStayPut](windowsizestayput.md). This means dragging to resize a window will not make buttons clip, rather the window frame is constrained.

## See Also

### Constants

- [NSLayoutPriorityRequired](required.md): A required constraint.
- [NSLayoutPriorityDragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [NSLayoutPriorityWindowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [NSLayoutPriorityDragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [NSLayoutPriorityDefaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [NSLayoutPriorityFittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.
