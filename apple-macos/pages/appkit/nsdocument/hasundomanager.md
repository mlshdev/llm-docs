> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/hasundomanager](https://developer.apple.com/documentation/appkit/nsdocument/hasundomanager)

# hasUndoManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document owns an undo manager object.

## Declaration

```swift
var hasUndoManager: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you change the value of this property to NO and the document already owns an [UndoManager](https://developer.apple.com/documentation/foundation/undomanager) object, the document removes the undo manager as an observer of undo-related notifications and then removes its reference to the object.

## See Also

### Managing Undo and Redo Actions

- [undoManager](undomanager.md): The object that the document uses to support undo/redo operations.

# hasUndoManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the document owns an undo manager object.

## Declaration

```objectivec
@property BOOL hasUndoManager;
```

<a id="Discussion"></a>

## Discussion

If you change the value of this property to NO and the document already owns an [NSUndoManager](https://developer.apple.com/documentation/foundation/undomanager) object, the document removes the undo manager as an observer of undo-related notifications and then removes its reference to the object.

## See Also

### Managing Undo and Redo Actions

- [undoManager](undomanager.md): The object that the document uses to support undo/redo operations.
