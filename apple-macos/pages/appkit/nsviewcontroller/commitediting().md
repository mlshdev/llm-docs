> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/commitediting()](https://developer.apple.com/documentation/appkit/nsviewcontroller/commitediting())

# commitEditing() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether the receiver was able to commit any pending edits.

## Declaration

```swift
@MainActor func commitEditing() -> Bool
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the changes were successfully applied to the model, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A commit is denied if the receiver fails to apply the changes to the model object, perhaps due to a validation error.

## See Also

### NSEditor Conformance

- [commitEditing(withDelegate:didCommit:contextInfo:)](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempt to commit any currently edited results of the receiver.
- [discardEditing()](discardediting%28%29.md): Causes the receiver to discard any changes, restoring the previous values.

# commitEditing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns whether the receiver was able to commit any pending edits.

## Declaration

```objectivec
- (BOOL) commitEditing;
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the changes were successfully applied to the model, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

A commit is denied if the receiver fails to apply the changes to the model object, perhaps due to a validation error.

## See Also

### NSEditor Conformance

- [commitEditingWithDelegate:didCommitSelector:contextInfo:](commitediting%28withdelegate_didcommit_contextinfo_%29.md): Attempt to commit any currently edited results of the receiver.
- [discardEditing](discardediting%28%29.md): Causes the receiver to discard any changes, restoring the previous values.
