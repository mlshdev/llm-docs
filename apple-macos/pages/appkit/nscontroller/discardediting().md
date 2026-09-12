> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroller/discardediting()](https://developer.apple.com/documentation/appkit/nscontroller/discardediting())

# discardEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Discards any pending changes by registered editors.

## Declaration

```swift
@MainActor func discardEditing()
```

<a id="Discussion"></a>

## Discussion

The receiver invokes [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting) on any current editors.

## See Also

### Managing editing

- [objectDidBeginEditing(\_:)](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing(\_:)](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing()](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [isEditing](isediting.md): A Boolean value indicating if any editors are registered with the controller.

# discardEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Discards any pending changes by registered editors.

## Declaration

```objectivec
- (void) discardEditing;
```

<a id="Discussion"></a>

## Discussion

The receiver invokes [discardEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/discardediting) on any current editors.

## See Also

### Managing editing

- [objectDidBeginEditing:](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing:](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [editing](isediting.md): A Boolean value indicating if any editors are registered with the controller.
