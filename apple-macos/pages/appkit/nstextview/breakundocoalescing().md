> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/breakundocoalescing()](https://developer.apple.com/documentation/appkit/nstextview/breakundocoalescing())

# breakUndoCoalescing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that it should begin coalescing successive typing operations in a new undo grouping.

## Declaration

```swift
func breakUndoCoalescing()
```

<a id="Discussion"></a>

## Discussion

This method should be invoked when saving the receiver’s contents to preserve proper tracking of unsaved changes and the document’s dirty state.

## See Also

### Supporting undo

- [isCoalescingUndo](iscoalescingundo.md): A Boolean value that indicates whether undo coalescing is in progress.

# breakUndoCoalescing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that it should begin coalescing successive typing operations in a new undo grouping.

## Declaration

```objectivec
- (void) breakUndoCoalescing;
```

<a id="Discussion"></a>

## Discussion

This method should be invoked when saving the receiver’s contents to preserve proper tracking of unsaved changes and the document’s dirty state.

## See Also

### Supporting undo

- [coalescingUndo](iscoalescingundo.md): A Boolean value that indicates whether undo coalescing is in progress.
