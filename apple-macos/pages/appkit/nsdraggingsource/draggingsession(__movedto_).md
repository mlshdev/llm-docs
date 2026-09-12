> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsource/draggingsession(_:movedto:)](https://developer.apple.com/documentation/appkit/nsdraggingsource/draggingsession(_:movedto:))

# draggingSession(\_:movedTo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when the drag moves on the screen.

## Declaration

```swift
@MainActor optional func draggingSession(_ session: NSDraggingSession, movedTo screenPoint: NSPoint)
```

## Parameters

- `session`: The dragging session.
- `screenPoint`: The point where the drag moved to, in screen coordinates.

## See Also

### Dragging Session Locations

- [draggingSession(\_:willBeginAt:)](draggingsession%28__willbeginat_%29.md): Invoked when the drag will begin.
- [draggingSession(\_:endedAt:operation:)](draggingsession%28__endedat_operation_%29.md): Invoked when the dragging session has completed.

# draggingSession:movedToPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the drag moves on the screen.

## Declaration

```objectivec
- (void) draggingSession:(NSDraggingSession *) session movedToPoint:(NSPoint) screenPoint;
```

## Parameters

- `session`: The dragging session.
- `screenPoint`: The point where the drag moved to, in screen coordinates.

## See Also

### Dragging Session Locations

- [draggingSession:willBeginAtPoint:](draggingsession%28__willbeginat_%29.md): Invoked when the drag will begin.
- [draggingSession:endedAtPoint:operation:](draggingsession%28__endedat_operation_%29.md): Invoked when the dragging session has completed.
