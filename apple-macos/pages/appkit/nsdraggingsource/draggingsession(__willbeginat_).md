> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsource/draggingsession(_:willbeginat:)](https://developer.apple.com/documentation/appkit/nsdraggingsource/draggingsession(_:willbeginat:))

# draggingSession(\_:willBeginAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked when the drag will begin.

## Declaration

```swift
@MainActor optional func draggingSession(_ session: NSDraggingSession, willBeginAt screenPoint: NSPoint)
```

## Parameters

- `session`: The dragging session.
- `screenPoint`: The point where the drag will begin, in screen coordinates.

## See Also

### Dragging Session Locations

- [draggingSession(\_:movedTo:)](draggingsession%28__movedto_%29.md): Invoked when the drag moves on the screen.
- [draggingSession(\_:endedAt:operation:)](draggingsession%28__endedat_operation_%29.md): Invoked when the dragging session has completed.

# draggingSession:willBeginAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the drag will begin.

## Declaration

```objectivec
- (void) draggingSession:(NSDraggingSession *) session willBeginAtPoint:(NSPoint) screenPoint;
```

## Parameters

- `session`: The dragging session.
- `screenPoint`: The point where the drag will begin, in screen coordinates.

## See Also

### Dragging Session Locations

- [draggingSession:movedToPoint:](draggingsession%28__movedto_%29.md): Invoked when the drag moves on the screen.
- [draggingSession:endedAtPoint:operation:](draggingsession%28__endedat_operation_%29.md): Invoked when the dragging session has completed.
