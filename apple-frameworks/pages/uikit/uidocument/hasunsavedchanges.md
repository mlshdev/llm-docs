> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/hasunsavedchanges](https://developer.apple.com/documentation/uikit/uidocument/hasunsavedchanges)

# hasUnsavedChanges (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the document has any unsaved changes.

## Declaration

```swift
var hasUnsavedChanges: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document has unsaved changes, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of [autosave(completionHandler:)](autosave%28completionhandler_%29.md) initiates a save if this property returns [true](https://developer.apple.com/documentation/swift/true). Typical subclasses don’t need to override [hasUnsavedChanges](hasunsavedchanges.md). To implement change tracking, they should instead use an [UndoManager](../../foundation/undomanager.md) object (assigned to [undoManager](undomanager.md)) to register changes or call [updateChangeCount(\_:)](updatechangecount%28__%29.md) every time the user makes a change; UIKit then automatically determines whether there are unsaved changes.

## See Also

### Tracking changes and autosaving

- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the change counter by indicating the kind of change.
- [undoManager](undomanager.md): The undo manager for the document.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
- [autosave(completionHandler:)](autosave%28completionhandler_%29.md): Initiates automatic saving of documents with unsaved changes.

# hasUnsavedChanges (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the document has any unsaved changes.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasUnsavedChanges;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document has unsaved changes, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation of [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md) initiates a save if this property returns [true](https://developer.apple.com/documentation/swift/true). Typical subclasses don’t need to override [hasUnsavedChanges](hasunsavedchanges.md). To implement change tracking, they should instead use an [NSUndoManager](../../foundation/undomanager.md) object (assigned to [undoManager](undomanager.md)) to register changes or call [updateChangeCount:](updatechangecount%28__%29.md) every time the user makes a change; UIKit then automatically determines whether there are unsaved changes.

## See Also

### Tracking changes and autosaving

- [updateChangeCount:](updatechangecount%28__%29.md): Updates the change counter by indicating the kind of change.
- [undoManager](undomanager.md): The undo manager for the document.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns a change token for a specific save operation.
- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the change count with reference to a change-count token passed in by UIKit.
- [autosaveWithCompletionHandler:](autosave%28completionhandler_%29.md): Initiates automatic saving of documents with unsaved changes.
