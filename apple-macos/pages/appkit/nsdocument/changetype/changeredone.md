> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changeredone](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changeredone)

# NSDocument.ChangeType.changeRedone (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+

A single change has been redone.

## Declaration

```swift
case changeRedone
```

<a id="discussion"></a>

## Discussion

For example, the built-in undo support of [NSDocument](../../nsdocument.md) passes this value whenever a document receives an [NSUndoManagerDidRedoChange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidredochange) from its own undo manager.

## See Also

### Constants

- [NSDocument.ChangeType.changeDone](changedone.md): Increment change count.
- [NSDocument.ChangeType.changeUndone](changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeCleared](changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeDiscardable](changediscardable.md): A discardable change has been done.

# NSChangeRedone (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

A single change has been redone.

## Declaration

```objectivec
NSChangeRedone
```

<a id="discussion"></a>

## Discussion

For example, the built-in undo support of [NSDocument](../../nsdocument.md) passes this value whenever a document receives an [NSUndoManagerDidRedoChangeNotification](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidredochange) from its own undo manager.

## See Also

### Constants

- [NSChangeDone](changedone.md): Increment change count.
- [NSChangeUndone](changeundone.md): Decrement change count.
- [NSChangeCleared](changecleared.md): Set change count to 0.
- [NSChangeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeDiscardable](changediscardable.md): A discardable change has been done.
