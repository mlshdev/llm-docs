> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontroller/isediting](https://developer.apple.com/documentation/appkit/nscontroller/isediting)

# isEditing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating if any editors are registered with the controller.

## Declaration

```swift
var isEditing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when an editor is registered with the controller object or [false](https://developer.apple.com/documentation/swift/false) when no editor is registered.

## See Also

### Managing editing

- [objectDidBeginEditing(\_:)](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing(\_:)](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing()](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing()](discardediting%28%29.md): Discards any pending changes by registered editors.

# editing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating if any editors are registered with the controller.

## Declaration

```objectivec
@property (readonly, getter=isEditing) BOOL editing;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when an editor is registered with the controller object or [false](https://developer.apple.com/documentation/swift/false) when no editor is registered.

## See Also

### Managing editing

- [objectDidBeginEditing:](objectdidbeginediting%28__%29.md): Invoked to inform the receiver that `editor` has uncommitted changes that can affect the receiver.
- [objectDidEndEditing:](objectdidendediting%28__%29.md): Invoked to inform the receiver that `editor` has committed or discarded its changes.
- [commitEditing](commitediting%28%29.md): Attempts to commit any pending edits.
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempts to commit any pending changes in known editors of the receiver.
- [discardEditing](discardediting%28%29.md): Discards any pending changes by registered editors.
