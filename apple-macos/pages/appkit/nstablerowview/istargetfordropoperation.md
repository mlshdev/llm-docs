> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablerowview/istargetfordropoperation](https://developer.apple.com/documentation/appkit/nstablerowview/istargetfordropoperation)

# isTargetForDropOperation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies whether this row will draw a drop indicator based on the current dragging feedback style.

## Declaration

```swift
var isTargetForDropOperation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the row view will draw a drop on indicator based on the current [draggingDestinationFeedbackStyle](../nstableview/draggingdestinationfeedbackstyle-swift.property.md).

## See Also

### Drag and Drop

- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle.md): Specifies the dragging destination feedback style.
- [indentationForDropOperation](indentationfordropoperation.md): Defines the amount the drag target for a row should be indented.

# targetForDropOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies whether this row will draw a drop indicator based on the current dragging feedback style.

## Declaration

```objectivec
@property (getter=isTargetForDropOperation) BOOL targetForDropOperation;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the row view will draw a drop on indicator based on the current [draggingDestinationFeedbackStyle](../nstableview/draggingdestinationfeedbackstyle-swift.property.md).

## See Also

### Drag and Drop

- [draggingDestinationFeedbackStyle](draggingdestinationfeedbackstyle.md): Specifies the dragging destination feedback style.
- [indentationForDropOperation](indentationfordropoperation.md): Defines the amount the drag target for a row should be indented.
