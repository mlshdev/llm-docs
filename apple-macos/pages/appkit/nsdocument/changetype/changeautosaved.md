> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changeautosaved](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changeautosaved)

# NSDocument.ChangeType.changeAutosaved (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The document’s contents have been autosaved.

## Declaration

```swift
case changeAutosaved
```

<a id="discussion"></a>

## Discussion

For example, [saveToURL:ofType:forSaveOperation:error:](../savetourl_oftype_forsaveoperation_error_.md) passes this value for a successful [NSAutosaveOperation](../../nssaveoperationtype/nsautosaveoperation.md).

## See Also

### Constants

- [NSDocument.ChangeType.changeDone](changedone.md): Increment change count.
- [NSDocument.ChangeType.changeUndone](changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeCleared](changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSDocument.ChangeType.changeRedone](changeredone.md): A single change has been redone.
- [NSDocument.ChangeType.changeDiscardable](changediscardable.md): A discardable change has been done.

# NSChangeAutosaved (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The document’s contents have been autosaved.

## Declaration

```objectivec
NSChangeAutosaved
```

<a id="discussion"></a>

## Discussion

For example, [saveToURL:ofType:forSaveOperation:error:](../savetourl_oftype_forsaveoperation_error_.md) passes this value for a successful [NSAutosaveOperation](../../nssaveoperationtype/nsautosaveoperation.md).

## See Also

### Constants

- [NSChangeDone](changedone.md): Increment change count.
- [NSChangeUndone](changeundone.md): Decrement change count.
- [NSChangeCleared](changecleared.md): Set change count to 0.
- [NSChangeReadOtherContents](changereadothercontents.md): The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.
- [NSChangeRedone](changeredone.md): A single change has been redone.
- [NSChangeDiscardable](changediscardable.md): A discardable change has been done.
