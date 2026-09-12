> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state/progressavailable](https://developer.apple.com/documentation/uikit/uidocument/state/progressavailable)

# progressAvailable (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The document is being downloaded or uploaded and progress information is available.

## Declaration

```swift
static var progressAvailable: UIDocument.State { get }
```

<a id="Discussion"></a>

## Discussion

When this state is set, you can use the [progress](../../../foundation/progressreporting/progress.md) property of the document to monitor the current operation.

## See Also

### Constants

- [normal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [closed](closed.md): There was an error in reading the document.
- [inConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [savingError](savingerror.md): There was an error in saving or reverting the document.
- [editingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.

# UIDocumentStateProgressAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The document is being downloaded or uploaded and progress information is available.

## Declaration

```objectivec
UIDocumentStateProgressAvailable
```

<a id="Discussion"></a>

## Discussion

When this state is set, you can use the [progress](../../../foundation/progressreporting/progress.md) property of the document to monitor the current operation.

## See Also

### Constants

- [UIDocumentStateNormal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [UIDocumentStateClosed](closed.md): There was an error in reading the document.
- [UIDocumentStateInConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [UIDocumentStateSavingError](savingerror.md): There was an error in saving or reverting the document.
- [UIDocumentStateEditingDisabled](editingdisabled.md): The document is busy and it isn’t currently safe for user edits.
