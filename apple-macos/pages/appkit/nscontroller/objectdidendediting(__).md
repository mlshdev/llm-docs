> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroller/objectdidendediting(_:)](https://developer.apple.com/documentation/appkit/nscontroller/objectdidendediting(_:))

# objectDidEndEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to inform the receiver that `editor` has committed or discarded its changes.

## Declaration

```swift
@MainActor func objectDidEndEditing(_ editor: any NSEditor)
```

## See Also

### Managing editing

- [objectDidBeginEditing(\_:)](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [commitEditing()](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing()](discardediting%28%29.md): Discards any pending changes by registered editors.
- [isEditing](isediting.md): A Boolean value indicating if any editors are registered with the controller.

# objectDidEndEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to inform the receiver that `editor` has committed or discarded its changes.

## Declaration

```objectivec
- (void) objectDidEndEditing:(id<NSEditor>) editor;
```

## See Also

### Managing editing

- [objectDidBeginEditing:](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [commitEditing](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing](discardediting%28%29.md): Discards any pending changes by registered editors.
- [editing](isediting.md): A Boolean value indicating if any editors are registered with the controller.
