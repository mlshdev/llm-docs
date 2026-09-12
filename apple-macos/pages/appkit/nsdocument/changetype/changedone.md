> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changedone](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changedone)

# NSDocument.ChangeType.changeDone (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Increment change count.

## Declaration

```swift
case changeDone
```

<a id="discussion"></a>

## Discussion

Pass this value to the [updateChangeCount(\_:)](../updatechangecount%28__%29.md) method to indicate that a single change has been done. For example, the built-in undo support in the [NSDocument](../../nsdocument.md) class passes this value whenever a document receives an [NSUndoManagerDidCloseUndoGroup](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup) notification from its own undo manager.

## See Also

### Constants

- [NSDocument.ChangeType.changeUndone](changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeCleared](changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeRedone](changeredone.md): A single change has been redone.
- [NSDocument.ChangeType.changeDiscardable](changediscardable.md): A discardable change has been done.

# NSChangeDone (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Increment change count.

## Declaration

```objectivec
NSChangeDone
```

<a id="discussion"></a>

## Discussion

Pass this value to the [updateChangeCount:](../updatechangecount%28__%29.md) method to indicate that a single change has been done. For example, the built-in undo support in the [NSDocument](../../nsdocument.md) class passes this value whenever a document receives an [NSUndoManagerDidCloseUndoGroupNotification](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidcloseundogroup) notification from its own undo manager.

## See Also

### Constants

- [NSChangeUndone](changeundone.md): Decrement change count.
- [NSChangeCleared](changecleared.md): Set change count to 0.
- [NSChangeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeRedone](changeredone.md): A single change has been redone.
- [NSChangeDiscardable](changediscardable.md): A discardable change has been done.
