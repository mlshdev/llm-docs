> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/draggingdestinationfeedbackstyle](https://developer.apple.com/documentation/appkit/nstablerowview/draggingdestinationfeedbackstyle)

# draggingDestinationFeedbackStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies the dragging destination feedback style.

## Declaration

```swift
var draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values are defined in [NSTableView.DraggingDestinationFeedbackStyle](../nstableview/draggingdestinationfeedbackstyle-swift.enum.md).

## See Also

### Drag and Drop

- [indentationForDropOperation](indentationfordropoperation.md): Defines the amount the drag target for a row should be indented.
- [isTargetForDropOperation](istargetfordropoperation.md): Specifies whether this row will draw a drop indicator based on the current dragging feedback style.

# draggingDestinationFeedbackStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies the dragging destination feedback style.

## Declaration

```objectivec
@property NSTableViewDraggingDestinationFeedbackStyle draggingDestinationFeedbackStyle;
```

<a id="Discussion"></a>

## Discussion

Possible values are defined in [NSTableViewDraggingDestinationFeedbackStyle](../nstableview/draggingdestinationfeedbackstyle-swift.enum.md).

## See Also

### Drag and Drop

- [indentationForDropOperation](indentationfordropoperation.md): Defines the amount the drag target for a row should be indented.
- [targetForDropOperation](istargetfordropoperation.md): Specifies whether this row will draw a drop indicator based on the current dragging feedback style.
