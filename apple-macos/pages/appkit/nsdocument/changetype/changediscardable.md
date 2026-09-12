> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changediscardable](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changediscardable)

# NSDocument.ChangeType.changeDiscardable (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.7+

A discardable change has been done.

## Declaration

```swift
case changeDiscardable
```

<a id="discussion"></a>

## Discussion

Discardable changes cause the document to be edited. In a locked document, for example, discardable changes may be thrown away instead of prompting the user to save them. Combine this value with the appropriate kind of change, [NSDocument.ChangeType.changeDone](changedone.md), [NSDocument.ChangeType.changeUndone](changeundone.md), or [NSDocument.ChangeType.changeRedone](changeredone.md), using the C bitwise OR operator. For example, a discardable change is `NSChangeDone | NSChangeDiscardable`.

## See Also

### Constants

- [NSDocument.ChangeType.changeDone](changedone.md): Increment change count.
- [NSDocument.ChangeType.changeUndone](changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeCleared](changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeRedone](changeredone.md): A single change has been redone.

# NSChangeDiscardable (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A discardable change has been done.

## Declaration

```objectivec
NSChangeDiscardable
```

<a id="discussion"></a>

## Discussion

Discardable changes cause the document to be edited. In a locked document, for example, discardable changes may be thrown away instead of prompting the user to save them. Combine this value with the appropriate kind of change, [NSChangeDone](changedone.md), [NSChangeUndone](changeundone.md), or [NSChangeRedone](changeredone.md), using the C bitwise OR operator. For example, a discardable change is `NSChangeDone | NSChangeDiscardable`.

## See Also

### Constants

- [NSChangeDone](changedone.md): Increment change count.
- [NSChangeUndone](changeundone.md): Decrement change count.
- [NSChangeCleared](changecleared.md): Set change count to 0.
- [NSChangeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeRedone](changeredone.md): A single change has been redone.
