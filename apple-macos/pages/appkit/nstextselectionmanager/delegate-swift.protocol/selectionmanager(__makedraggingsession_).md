> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:makedraggingsession:)](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:makedraggingsession:))

# selectionManager(\_:makeDraggingSession:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates and returns a dragging session for the specified gesture recognizer.

## Declaration

```swift
optional func selectionManager(_ selectionManager: NSTextSelectionManager, makeDraggingSession gesture: NSGestureRecognizer) -> NSDraggingSession?
```

## Parameters

- `selectionManager`: The selection manager requesting the dragging session.
- `gesture`: The gesture recognizer that detected the drag attempt.

<a id="return-value"></a>

## Return Value

A new dragging session, or `nil` to prevent dragging.

<a id="discussion"></a>

## Discussion

The selection manager calls this method when the user attempts to drag the current text selection. Use this method to customize the dragging behavior, including setting drag data and drag images.

# selectionManager:makeDraggingSessionWithGesture: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates and returns a dragging session for the specified gesture recognizer.

## Declaration

```objectivec
- (NSDraggingSession *) selectionManager:(NSTextSelectionManager *) selectionManager makeDraggingSessionWithGesture:(NSGestureRecognizer *) gesture;
```

## Parameters

- `selectionManager`: The selection manager requesting the dragging session.
- `gesture`: The gesture recognizer that detected the drag attempt.

<a id="return-value"></a>

## Return Value

A new dragging session, or `nil` to prevent dragging.

<a id="discussion"></a>

## Discussion

The selection manager calls this method when the user attempts to drag the current text selection. Use this method to customize the dragging behavior, including setting drag data and drag images.
