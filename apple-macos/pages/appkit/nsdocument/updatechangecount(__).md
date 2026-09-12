> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/updatechangecount(_:)](https://developer.apple.com/documentation/appkit/nsdocument/updatechangecount(_:))

# updateChangeCount(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the receiver’s change count according to the given change type.

## Declaration

```swift
func updateChangeCount(_ change: NSDocument.ChangeType)
```

## Parameters

- `change`: The type of change made to the document. For a list of values, see [NSDocument.ChangeType](changetype.md).

<a id="Discussion"></a>

## Discussion

The change count indicates the document’s edited status; if the change count is 0, the document has no changes to save, and if the change count is greater than 0, the document has been edited and is unsaved. If you are implementing undo and redo in an app, you should increment the change count every time you create an undo group and decrement the change count when an undo or redo operation is performed.

Note that if you are using the `NSDocument` default undo/redo features, setting the document’s edited status by updating the change count happens automatically. You only need to invoke this method when you are not using these features.

## See Also

### Updating the Document Change Count

- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [NSDocument.ChangeType](changetype.md): Values that indicate a document’s edit status.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

# updateChangeCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the receiver’s change count according to the given change type.

## Declaration

```objectivec
- (void) updateChangeCount:(NSDocumentChangeType) change;
```

## Parameters

- `change`: The type of change made to the document. For a list of values, see [NSDocumentChangeType](changetype.md).

<a id="Discussion"></a>

## Discussion

The change count indicates the document’s edited status; if the change count is 0, the document has no changes to save, and if the change count is greater than 0, the document has been edited and is unsaved. If you are implementing undo and redo in an app, you should increment the change count every time you create an undo group and decrement the change count when an undo or redo operation is performed.

Note that if you are using the `NSDocument` default undo/redo features, setting the document’s edited status by updating the change count happens automatically. You only need to invoke this method when you are not using these features.

## See Also

### Updating the Document Change Count

- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [NSDocumentChangeType](changetype.md): Values that indicate a document’s edit status.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.
