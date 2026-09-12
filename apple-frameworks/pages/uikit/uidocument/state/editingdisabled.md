> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/state/editingdisabled](https://developer.apple.com/documentation/uikit/uidocument/state/editingdisabled)

# editingDisabled (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The document is busy and it isn’t currently safe for user edits.

## Declaration

```swift
static var editingDisabled: UIDocument.State { get }
```

<a id="Discussion"></a>

## Discussion

This state is set just before [UIDocument](../../uidocument.md) calls the [disableEditing()](../disableediting%28%29.md) method. It calls [enableEditing()](../enableediting%28%29.md) when it becomes safe to edit again. [UIDocument](../../uidocument.md) also sets this state when an error prevents the reverting of a document.

## See Also

### Constants

- [normal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [closed](closed.md): There was an error in reading the document.
- [inConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [savingError](savingerror.md): There was an error in saving or reverting the document.
- [progressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.

# UIDocumentStateEditingDisabled (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The document is busy and it isn’t currently safe for user edits.

## Declaration

```objectivec
UIDocumentStateEditingDisabled
```

<a id="Discussion"></a>

## Discussion

This state is set just before [UIDocument](../../uidocument.md) calls the [disableEditing](../disableediting%28%29.md) method. It calls [enableEditing](../enableediting%28%29.md) when it becomes safe to edit again. [UIDocument](../../uidocument.md) also sets this state when an error prevents the reverting of a document.

## See Also

### Constants

- [UIDocumentStateNormal](normal.md): The document is open, editing is enabled, and there are no conflicts or errors associated with it.
- [UIDocumentStateClosed](closed.md): There was an error in reading the document.
- [UIDocumentStateInConflict](inconflict.md): Conflicts exist for the document file located at the file URL.
- [UIDocumentStateSavingError](savingerror.md): There was an error in saving or reverting the document.
- [UIDocumentStateProgressAvailable](progressavailable.md): The document is being downloaded or uploaded and progress information is available.
