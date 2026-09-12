> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/updatechangecount(_:)](https://developer.apple.com/documentation/uikit/uidocument/updatechangecount(_:))

# updateChangeCount(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the change counter by indicating the kind of change.

## Declaration

```swift
func updateChangeCount(_ change: UIDocument.ChangeKind)
```

## Parameters

- `change`: A constant that indicates whether a change has been made, cleared, undone, or redone. See [UIDocument.ChangeKind](changekind.md) for more information.

<a id="Discussion"></a>

## Discussion

Calling this method can affect the value returned by [hasUnsavedChanges](hasunsavedchanges.md). You shouldn’t need to call method this if you access an [UndoManager](../../foundation/undomanager.md) object from the [undoManager](undomanager.md) property (or assign a custom one to it) and register changes with the undo manager.

## See Also

### Tracking changes and autosaving

- [hasUnsavedChanges](hasunsavedchanges.md): A Boolean value that indicates whether the document has any unsaved changes.
- [undoManager](undomanager.md): The undo manager for the document.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
- [autosave(completionHandler:)](autosave%28completionhandler_%29.md): Initiates automatic saving of documents with unsaved changes.

# updateChangeCount: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the change counter by indicating the kind of change.

## Declaration

```objectivec
- (void) updateChangeCount:(UIDocumentChangeKind) change;
```

## Parameters

- `change`: A constant that indicates whether a change has been made, cleared, undone, or redone. See [UIDocumentChangeKind](changekind.md) for more information.

<a id="Discussion"></a>

## Discussion

Calling this method can affect the value returned by [hasUnsavedChanges](hasunsavedchanges.md). You shouldn’t need to call method this if you access an [NSUndoManager](../../foundation/undomanager.md) object from the [undoManager](undomanager.md) property (or assign a custom one to it) and register changes with the undo manager.

## See Also

### Tracking changes and autosaving

- [hasUnsavedChanges](hasunsavedchanges.md): A Boolean value that indicates whether the document has any unsaved changes.
- [undoManager](undomanager.md): The undo manager for the document.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
- [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md): Initiates automatic saving of documents with unsaved changes.
