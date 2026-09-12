> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state/closed](https://developer.apple.com/documentation/uikit/uidocument/state/closed)

# closed (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

There was an error in reading the document.

## Declaration

```swift
static var closed: UIDocument.State { get }
```

<a id="Discussion"></a>

## Discussion

The document has either not been successfully opened, or has been since closed. The document properties might not be valid.

## See Also

### Constants

- [normal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [inConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [savingError](savingerror.md): There was an error in saving or reverting the document.
- [editingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [progressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.

# UIDocumentStateClosed (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

There was an error in reading the document.

## Declaration

```objectivec
UIDocumentStateClosed
```

<a id="Discussion"></a>

## Discussion

The document has either not been successfully opened, or has been since closed. The document properties might not be valid.

## See Also

### Constants

- [UIDocumentStateNormal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [UIDocumentStateInConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [UIDocumentStateSavingError](savingerror.md): There was an error in saving or reverting the document.
- [UIDocumentStateEditingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
- [UIDocumentStateProgressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.
