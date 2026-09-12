> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changecleared](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changecleared)

# NSDocument.ChangeType.changeCleared (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Set change count to 0.

## Declaration

```swift
case changeCleared
```

<a id="discussion"></a>

## Discussion

The document has been synchronized with its file or file package. For example, [saveToURL:ofType:forSaveOperation:error:](../savetourl_oftype_forsaveoperation_error_.md) passes this value for a successful [NSDocument.SaveOperationType.saveOperation](../saveoperationtype/saveoperation.md) or [NSDocument.SaveOperationType.saveAsOperation](../saveoperationtype/saveasoperation.md). The [revertToSaved(\_:)](../reverttosaved%28__%29.md) method does too.

## See Also

### Constants

- [NSDocument.ChangeType.changeDone](changedone.md): Increment change count.
- [NSDocument.ChangeType.changeUndone](changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeRedone](changeredone.md): A single change has been redone.
- [NSDocument.ChangeType.changeDiscardable](changediscardable.md): A discardable change has been done.

# NSChangeCleared (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Set change count to 0.

## Declaration

```objectivec
NSChangeCleared
```

<a id="discussion"></a>

## Discussion

The document has been synchronized with its file or file package. For example, [saveToURL:ofType:forSaveOperation:error:](../savetourl_oftype_forsaveoperation_error_.md) passes this value for a successful [NSSaveOperation](../saveoperationtype/saveoperation.md) or [NSSaveAsOperation](../saveoperationtype/saveasoperation.md). The [revertDocumentToSaved:](../reverttosaved%28__%29.md) method does too.

## See Also

### Constants

- [NSChangeDone](changedone.md): Increment change count.
- [NSChangeUndone](changeundone.md): Decrement change count.
- [NSChangeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeRedone](changeredone.md): A single change has been redone.
- [NSChangeDiscardable](changediscardable.md): A discardable change has been done.
