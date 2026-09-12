> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/undomanager](https://developer.apple.com/documentation/appkit/nsdocument/undomanager)

# undoManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that the document uses to support undo/redo operations.

## Declaration

```swift
var undoManager: UndoManager? { get set }
```

<a id="Discussion"></a>

## Discussion

When the [hasUndoManager](hasundomanager.md) property is [true](https://developer.apple.com/documentation/swift/true), accessing this property creates an [UndoManager](https://developer.apple.com/documentation/foundation/undomanager) before returning it. If the [hasUndoManager](hasundomanager.md) property is [false](https://developer.apple.com/documentation/swift/false), the value of this property is `nil` by default. Assigning an undo manager to this property stores a reference to the object and automatically changes the [hasUndoManager](hasundomanager.md) property to [true](https://developer.apple.com/documentation/swift/true).

Whether you assign an undo manager or let the document create one, the document registers itself as an observer of various  [UndoManager](https://developer.apple.com/documentation/foundation/undomanager) notifications so that appropriate document actions are stored on the undo stack.

## See Also

### Managing Undo and Redo Actions

- [hasUndoManager](hasundomanager.md): A Boolean value that indicates whether the document owns an undo manager object.

# undoManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that the document uses to support undo/redo operations.

## Declaration

```objectivec
@property (strong, nullable) NSUndoManager * undoManager;
```

<a id="Discussion"></a>

## Discussion

When the [hasUndoManager](hasundomanager.md) property is [true](https://developer.apple.com/documentation/swift/true), accessing this property creates an [NSUndoManager](https://developer.apple.com/documentation/foundation/undomanager) before returning it. If the [hasUndoManager](hasundomanager.md) property is [false](https://developer.apple.com/documentation/swift/false), the value of this property is `nil` by default. Assigning an undo manager to this property stores a reference to the object and automatically changes the [hasUndoManager](hasundomanager.md) property to [true](https://developer.apple.com/documentation/swift/true).

Whether you assign an undo manager or let the document create one, the document registers itself as an observer of various  [NSUndoManager](https://developer.apple.com/documentation/foundation/undomanager) notifications so that appropriate document actions are stored on the undo stack.

## See Also

### Managing Undo and Redo Actions

- [hasUndoManager](hasundomanager.md): A Boolean value that indicates whether the document owns an undo manager object.
