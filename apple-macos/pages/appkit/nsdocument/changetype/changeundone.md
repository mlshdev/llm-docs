> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changeundone](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changeundone)

# NSDocument.ChangeType.changeUndone (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Decrement change count.

## Declaration

```swift
case changeUndone
```

<a id="discussion"></a>

## Discussion

A single change has been undone. For example, the built-in undo support of [NSDocument](../../nsdocument.md) passes this value whenever a document receives an [NSUndoManagerDidUndoChange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidundochange) from its own undo manager.

## See Also

### Constants

- [NSDocument.ChangeType.changeDone](changedone.md): Increment change count.
- [NSDocument.ChangeType.changeCleared](changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeRedone](changeredone.md): A single change has been redone.
- [NSDocument.ChangeType.changeDiscardable](changediscardable.md): A discardable change has been done.

# NSChangeUndone (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Decrement change count.

## Declaration

```objectivec
NSChangeUndone
```

<a id="discussion"></a>

## Discussion

A single change has been undone. For example, the built-in undo support of [NSDocument](../../nsdocument.md) passes this value whenever a document receives an [NSUndoManagerDidUndoChangeNotification](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsundomanagerdidundochange) from its own undo manager.

## See Also

### Constants

- [NSChangeDone](changedone.md): Increment change count.
- [NSChangeCleared](changecleared.md): Set change count to 0.
- [NSChangeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeRedone](changeredone.md): A single change has been redone.
- [NSChangeDiscardable](changediscardable.md): A discardable change has been done.
