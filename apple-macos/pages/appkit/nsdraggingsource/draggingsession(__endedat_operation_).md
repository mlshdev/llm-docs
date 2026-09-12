> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsource/draggingsession(_:endedat:operation:)](https://developer.apple.com/documentation/appkit/nsdraggingsource/draggingsession(_:endedat:operation:))

# draggingSession(\_:endedAt:operation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when the dragging session has completed.

## Declaration

```swift
@MainActor optional func draggingSession(_ session: NSDraggingSession, endedAt screenPoint: NSPoint, operation: NSDragOperation)
```

## Parameters

- `session`: The dragging session.
- `screenPoint`: The point where the drag ended, in screen coordinates.
- `operation`: The drag operation. See [NSDragOperation](../nsdragoperation.md) for drag operation types.

## See Also

### Dragging Session Locations

- [draggingSession(\_:willBeginAt:)](draggingsession%28__willbeginat_%29.md): Invoked when the drag will begin.
- [draggingSession(\_:movedTo:)](draggingsession%28__movedto_%29.md): Invoked when the drag moves on the screen.

# draggingSession:endedAtPoint:operation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the dragging session has completed.

## Declaration

```objectivec
- (void) draggingSession:(NSDraggingSession *) session endedAtPoint:(NSPoint) screenPoint operation:(NSDragOperation) operation;
```

## Parameters

- `session`: The dragging session.
- `screenPoint`: The point where the drag ended, in screen coordinates.
- `operation`: The drag operation. See [NSDragOperation](../nsdragoperation.md) for drag operation types.

## See Also

### Dragging Session Locations

- [draggingSession:willBeginAtPoint:](draggingsession%28__willbeginat_%29.md): Invoked when the drag will begin.
- [draggingSession:movedToPoint:](draggingsession%28__movedto_%29.md): Invoked when the drag moves on the screen.
