> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroller/objectdidbeginediting(_:)](https://developer.apple.com/documentation/appkit/nscontroller/objectdidbeginediting(_:))

# objectDidBeginEditing(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.

## Declaration

```swift
@MainActor func objectDidBeginEditing(_ editor: any NSEditor)
```

## See Also

### Related Documentation

- [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)

### Managing editing

- [objectDidEndEditing(\_:)](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing()](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing()](discardediting%28%29.md): Discards any pending changes by registered editors.
- [isEditing](isediting.md): A Boolean value indicating if any editors are registered with the controller.

# objectDidBeginEditing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.

## Declaration

```objectivec
- (void) objectDidBeginEditing:(id<NSEditor>) editor;
```

## See Also

### Related Documentation

- [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)

### Managing editing

- [objectDidEndEditing:](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing](discardediting%28%29.md): Discards any pending changes by registered editors.
- [editing](isediting.md): A Boolean value indicating if any editors are registered with the controller.
