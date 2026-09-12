> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroller/commitediting()](https://developer.apple.com/documentation/appkit/nscontroller/commitediting())

# commitEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to commit any pending edits.

## Declaration

```swift
@MainActor func commitEditing() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful or no edits were pending.

<a id="Discussion"></a>

## Discussion

The receiver invokes [commitEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitediting) on any current editors, returning their response. A commit is denied if the receiver fails to apply the changes to the model object, perhaps due to a validation error.

## See Also

### Managing editing

- [objectDidBeginEditing(\_:)](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing(\_:)](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing()](discardediting%28%29.md): Discards any pending changes by registered editors.
- [isEditing](isediting.md): A Boolean value indicating if any editors are registered with the controller.

# commitEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to commit any pending edits.

## Declaration

```objectivec
- (BOOL) commitEditing;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful or no edits were pending.

<a id="Discussion"></a>

## Discussion

The receiver invokes [commitEditing](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/commitediting) on any current editors, returning their response. A commit is denied if the receiver fails to apply the changes to the model object, perhaps due to a validation error.

## See Also

### Managing editing

- [objectDidBeginEditing:](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing:](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing](discardediting%28%29.md): Discards any pending changes by registered editors.
- [editing](isediting.md): A Boolean value indicating if any editors are registered with the controller.
