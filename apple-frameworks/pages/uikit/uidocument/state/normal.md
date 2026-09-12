> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state/normal](https://developer.apple.com/documentation/uikit/uidocument/state/normal)

# normal (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The document is open, editing is enabled, and there are no conflicts or errors associated with it.

## Declaration

```swift
static var normal: UIDocument.State { get }
```

## See Also

### Constants

- [closed](closed.md): There was an error in reading the document.
- [inConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [savingError](savingerror.md): There was an error in saving or reverting the document.
- [editingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [progressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.

# UIDocumentStateNormal (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The document is open, editing is enabled, and there are no conflicts or errors associated with it.

## Declaration

```objectivec
UIDocumentStateNormal
```

## See Also

### Constants

- [UIDocumentStateClosed](closed.md): There was an error in reading the document.
- [UIDocumentStateInConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [UIDocumentStateSavingError](savingerror.md): There was an error in saving or reverting the document.
- [UIDocumentStateEditingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [UIDocumentStateProgressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.
