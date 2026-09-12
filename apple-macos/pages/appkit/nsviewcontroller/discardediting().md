> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/discardediting()](https://developer.apple.com/documentation/appkit/nsviewcontroller/discardediting())

# discardEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Causes the receiver to discard any changes, restoring the previous values.

## Declaration

```swift
@MainActor func discardEditing()
```

## See Also

### NSEditor Conformance

- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempt to commit any currently edited results of the receiver.
- [commitEditing()](commitediting%28%29.md): Returns whether the receiver was able to commit any pending edits.

# discardEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Causes the receiver to discard any changes, restoring the previous values.

## Declaration

```objectivec
- (void) discardEditing;
```

## See Also

### NSEditor Conformance

- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempt to commit any currently edited results of the receiver.
- [commitEditing](commitediting%28%29.md): Returns whether the receiver was able to commit any pending edits.
