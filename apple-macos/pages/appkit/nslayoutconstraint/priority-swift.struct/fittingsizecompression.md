> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.struct/fittingsizecompression](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/fittingsizecompression)

# fittingSizeCompression (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

## Declaration

```swift
static var fittingSizeCompression: NSLayoutConstraint.Priority { get }
```

<a id="Discussion"></a>

## Discussion

This is the priority level with which the view wants to be as small as possible in that computation. It’s quite low. It is generally not appropriate to make a constraint at exactly this priority. You want to be higher or lower.

## See Also

### Constants

- [required](required.md): A required constraint.
- [defaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [dragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [windowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [dragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [defaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.

# NSLayoutPriorityFittingSizeCompression (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

## Declaration

```objectivec
static const NSLayoutPriority NSLayoutPriorityFittingSizeCompression;
```

<a id="Discussion"></a>

## Discussion

This is the priority level with which the view wants to be as small as possible in that computation. It’s quite low. It is generally not appropriate to make a constraint at exactly this priority. You want to be higher or lower.

## See Also

### Constants

- [NSLayoutPriorityRequired](required.md): A required constraint.
- [NSLayoutPriorityDefaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [NSLayoutPriorityDragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [NSLayoutPriorityWindowSizeStayPut](windowsizestayput.md): Priority level for the window’s current size.
- [NSLayoutPriorityDragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [NSLayoutPriorityDefaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
