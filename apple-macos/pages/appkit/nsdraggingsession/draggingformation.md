> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsession/draggingformation](https://developer.apple.com/documentation/appkit/nsdraggingsession/draggingformation)

# draggingFormation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Controls the dragging formation when the drag is not over the source or a valid destination.

## Declaration

```swift
var draggingFormation: NSDraggingFormation { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this value causes the dragging formation to change immediately, provided a valid destination has not overriden the behavior. If the dragging session hasn’t started yet, the dragging items will animate into formation immediately upon start. It is *highly* recommended to never change the formation when starting a drag.

The default value is [NSDraggingFormation.none](../nsdraggingformation/none.md).

## See Also

### Dragging Visual Representation

- [animatesToStartingPositionsOnCancelOrFail](animatestostartingpositionsoncancelorfail.md): Controls whether the dragging image animates back to its starting point on a cancelled or failed drag.

# draggingFormation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Controls the dragging formation when the drag is not over the source or a valid destination.

## Declaration

```objectivec
@property NSDraggingFormation draggingFormation;
```

<a id="Discussion"></a>

## Discussion

Setting this value causes the dragging formation to change immediately, provided a valid destination has not overriden the behavior. If the dragging session hasn’t started yet, the dragging items will animate into formation immediately upon start. It is *highly* recommended to never change the formation when starting a drag.

The default value is [NSDraggingFormationNone](../nsdraggingformation/none.md).

## See Also

### Dragging Visual Representation

- [animatesToStartingPositionsOnCancelOrFail](animatestostartingpositionsoncancelorfail.md): Controls whether the dragging image animates back to its starting point on a cancelled or failed drag.
