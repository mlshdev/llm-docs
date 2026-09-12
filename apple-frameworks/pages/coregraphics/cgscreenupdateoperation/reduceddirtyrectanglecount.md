> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgscreenupdateoperation/reduceddirtyrectanglecount](https://developer.apple.com/documentation/coregraphics/cgscreenupdateoperation/reduceddirtyrectanglecount)

# reducedDirtyRectangleCount (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
static var reducedDirtyRectangleCount: CGScreenUpdateOperation { get }
```

<a id="Discussion"></a>

## Discussion

When presented as part of the requested operations to the function [CGWaitForScreenUpdateRects(\_:\_:\_:\_:\_:)](../cgwaitforscreenupdaterects%28__________%29.md), specifies that the function should try to minimize the number of rectangles returned to represent the changed areas of the display.  The function may combine adjacent rectangles within a larger bounding rectangle, which may include unmodified areas of the display.

## See Also

### Constants

- [refresh](refresh.md): A screen-refresh operation.
- [move](move.md): A screen-move operation.

# kCGScreenUpdateOperationReducedDirtyRectangleCount (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGScreenUpdateOperationReducedDirtyRectangleCount
```

<a id="Discussion"></a>

## Discussion

When presented as part of the requested operations to the function [CGWaitForScreenUpdateRects](../cgwaitforscreenupdaterects%28__________%29.md), specifies that the function should try to minimize the number of rectangles returned to represent the changed areas of the display.  The function may combine adjacent rectangles within a larger bounding rectangle, which may include unmodified areas of the display.

## See Also

### Constants

- [kCGScreenUpdateOperationRefresh](refresh.md): A screen-refresh operation.
- [kCGScreenUpdateOperationMove](move.md): A screen-move operation.
