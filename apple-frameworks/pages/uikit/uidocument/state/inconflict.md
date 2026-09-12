> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state/inconflict](https://developer.apple.com/documentation/uikit/uidocument/state/inconflict)

# inConflict (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Conflicts exist for the document file located at the file URL.

## Declaration

```swift
static var inConflict: UIDocument.State { get }
```

<a id="Discussion"></a>

## Discussion

You can access these conflicting document versions by calling the [otherVersionsOfItem(at:)](../../../foundation/nsfileversion/otherversionsofitem%28at_%29.md) class method of the [NSFileVersion](../../../foundation/nsfileversion.md) class. This method returns an array of [NSFileVersion](../../../foundation/nsfileversion.md) objects. You can then resolve the conflicting versions — for example, programmatically attempt to merge the versions or present the document versions to a person and request them to pick one.

## See Also

### Constants

- [normal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [closed](closed.md): There was an error in reading the document.
- [savingError](savingerror.md): There was an error in saving or reverting the document.
- [editingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [progressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.

# UIDocumentStateInConflict (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Conflicts exist for the document file located at the file URL.

## Declaration

```objectivec
UIDocumentStateInConflict
```

<a id="Discussion"></a>

## Discussion

You can access these conflicting document versions by calling the [otherVersionsOfItemAtURL:](../../../foundation/nsfileversion/otherversionsofitem%28at_%29.md) class method of the [NSFileVersion](../../../foundation/nsfileversion.md) class. This method returns an array of [NSFileVersion](../../../foundation/nsfileversion.md) objects. You can then resolve the conflicting versions — for example, programmatically attempt to merge the versions or present the document versions to a person and request them to pick one.

## See Also

### Constants

- [UIDocumentStateNormal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [UIDocumentStateClosed](closed.md): There was an error in reading the document.
- [UIDocumentStateSavingError](savingerror.md): There was an error in saving or reverting the document.
- [UIDocumentStateEditingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [UIDocumentStateProgressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.
