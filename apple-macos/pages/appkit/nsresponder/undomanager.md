> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/undomanager](https://developer.apple.com/documentation/appkit/nsresponder/undomanager)

# undoManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The undo manager for this responder.

## Declaration

```swift
var undoManager: UndoManager? { get }
```

<a id="Discussion"></a>

## Discussion

The  `NSResponder` implementation simply invokes this property on the next responder.

# undoManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The undo manager for this responder.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSUndoManager * undoManager;
```

<a id="Discussion"></a>

## Discussion

The  `NSResponder` implementation simply invokes this property on the next responder.
