> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/undomanager](https://developer.apple.com/documentation/uikit/uidocument/undomanager)

# undoManager (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The undo manager for the document.

## Declaration

```swift
var undoManager: UndoManager! { get set }
```

<a id="Discussion"></a>

## Discussion

This property holds the document’s undo manager (an [UndoManager](../../foundation/undomanager.md) object). Accessing this property lazily creates a default undo manager if a custom undo manager hasn’t been set.

The undo manager for the document is registered as an observer of various [UndoManager](../../foundation/undomanager.md) notifications so that it can call [updateChangeCount(\_:)](updatechangecount%28__%29.md) as the user makes undoable changes to the document. When a subclass sets this property and implements registers changes with it, it doesn’t need to call [updateChangeCount(\_:)](updatechangecount%28__%29.md) directly or (more rarely) override [hasUnsavedChanges](hasunsavedchanges.md).

## See Also

### Tracking changes and autosaving

- [hasUnsavedChanges](hasunsavedchanges.md): A Boolean value that indicates whether the document has any unsaved changes.
- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the change counter by indicating the kind of change.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
- [autosave(completionHandler:)](autosave%28completionhandler_%29.md): Initiates automatic saving of documents with unsaved changes.

# undoManager (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The undo manager for the document.

## Declaration

```objectivec
@property (strong, null_resettable) NSUndoManager * undoManager;
```

<a id="Discussion"></a>

## Discussion

This property holds the document’s undo manager (an [NSUndoManager](../../foundation/undomanager.md) object). Accessing this property lazily creates a default undo manager if a custom undo manager hasn’t been set.

The undo manager for the document is registered as an observer of various [NSUndoManager](../../foundation/undomanager.md) notifications so that it can call [updateChangeCount:](updatechangecount%28__%29.md) as the user makes undoable changes to the document. When a subclass sets this property and implements registers changes with it, it doesn’t need to call [updateChangeCount:](updatechangecount%28__%29.md) directly or (more rarely) override [hasUnsavedChanges](hasunsavedchanges.md).

## See Also

### Tracking changes and autosaving

- [hasUnsavedChanges](hasunsavedchanges.md): A Boolean value that indicates whether the document has any unsaved changes.
- [updateChangeCount:](updatechangecount%28__%29.md): Updates the change counter by indicating the kind of change.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
- [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md): Initiates automatic saving of documents with unsaved changes.
