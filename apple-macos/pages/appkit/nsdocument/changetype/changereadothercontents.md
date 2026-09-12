> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changetype/changereadothercontents](https://developer.apple.com/documentation/appkit/nsdocument/changetype/changereadothercontents)

# NSDocument.ChangeType.changeReadOtherContents (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.

## Declaration

```swift
case changeReadOtherContents
```

<a id="discussion"></a>

## Discussion

For example, [init(for:withContentsOf:ofType:)](../init%28for_withcontentsof_oftype_%29.md) passes this value when the two passed-in URLs are not equal to indicate that an autosaved document is being reopened.

## See Also

### Constants

- [NSDocument.ChangeType.changeDone](changedone.md): Increment change count.
- [NSDocument.ChangeType.changeUndone](changeundone.md): Decrement change count.
- [NSDocument.ChangeType.changeCleared](changecleared.md): Set change count to 0.
- [NSDocument.ChangeType.changeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSDocument.ChangeType.changeRedone](changeredone.md): A single change has been redone.
- [NSDocument.ChangeType.changeDiscardable](changediscardable.md): A discardable change has been done.

# NSChangeReadOtherContents (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The document has been initialized with the contents of a file or file package other than the one whose location is in the `fileURL` property, and therefore can’t possibly be synchronized with its persistent representation.

## Declaration

```objectivec
NSChangeReadOtherContents
```

<a id="discussion"></a>

## Discussion

For example, [initForURL:withContentsOfURL:ofType:error:](../init%28for_withcontentsof_oftype_%29.md) passes this value when the two passed-in URLs are not equal to indicate that an autosaved document is being reopened.

## See Also

### Constants

- [NSChangeDone](changedone.md): Increment change count.
- [NSChangeUndone](changeundone.md): Decrement change count.
- [NSChangeCleared](changecleared.md): Set change count to 0.
- [NSChangeAutosaved](changeautosaved.md): The document’s contents have been autosaved.
- [NSChangeRedone](changeredone.md): A single change has been redone.
- [NSChangeDiscardable](changediscardable.md): A discardable change has been done.
