> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.struct/windowsizestayput](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct/windowsizestayput)

# windowSizeStayPut (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Priority level for the window’s current size.

## Declaration

```swift
static var windowSizeStayPut: NSLayoutConstraint.Priority { get }
```

<a id="Discussion"></a>

## Discussion

It’s generally not appropriate to make a constraint at exactly this priority. You want to be higher or lower. Constraints with higher priorities can adjust the window’s size. Constraints with lower priorities must be fulfilled using the current window size.

## See Also

### Constants

- [required](required.md): A required constraint.
- [defaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [dragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [dragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [defaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [fittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

# NSLayoutPriorityWindowSizeStayPut (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Priority level for the window’s current size.

## Declaration

```objectivec
static const NSLayoutPriority NSLayoutPriorityWindowSizeStayPut;
```

<a id="Discussion"></a>

## Discussion

It’s generally not appropriate to make a constraint at exactly this priority. You want to be higher or lower. Constraints with higher priorities can adjust the window’s size. Constraints with lower priorities must be fulfilled using the current window size.

## See Also

### Constants

- [NSLayoutPriorityRequired](required.md): A required constraint.
- [NSLayoutPriorityDefaultHigh](defaulthigh.md): Priority level with which a button resists compressing its content.
- [NSLayoutPriorityDragThatCanResizeWindow](dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [NSLayoutPriorityDragThatCannotResizeWindow](dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [NSLayoutPriorityDefaultLow](defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [NSLayoutPriorityFittingSizeCompression](fittingsizecompression.md): When you send a [fittingSize](../../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.
