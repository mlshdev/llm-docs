> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state/savingerror](https://developer.apple.com/documentation/uikit/uidocument/state/savingerror)

# savingError (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

There was an error in saving or reverting the document.

## Declaration

```swift
static var savingError: UIDocument.State { get }
```

## See Also

### Constants

- [normal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [closed](closed.md): There was an error in reading the document.
- [inConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [editingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [progressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.

# UIDocumentStateSavingError (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

There was an error in saving or reverting the document.

## Declaration

```objectivec
UIDocumentStateSavingError
```

## See Also

### Constants

- [UIDocumentStateNormal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [UIDocumentStateClosed](closed.md): There was an error in reading the document.
- [UIDocumentStateInConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [UIDocumentStateEditingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [UIDocumentStateProgressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.
