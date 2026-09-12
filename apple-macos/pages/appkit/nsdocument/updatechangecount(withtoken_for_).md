> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/updatechangecount(withtoken:for:)](https://developer.apple.com/documentation/appkit/nsdocument/updatechangecount(withtoken:for:))

# updateChangeCount(withToken:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the document’s change count settings after a successful save operation.

## Declaration

```swift
func updateChangeCount(withToken changeCountToken: Any, for saveOperation: NSDocument.SaveOperationType)
```

## Parameters

- `changeCountToken`: An object encapsulating the document changes, returned from [changeCountToken(for:)](changecounttoken%28for_%29.md).
- `saveOperation`: The type of save operation.

<a id="Discussion"></a>

## Discussion

This method updates the values in the [isDocumentEdited](isdocumentedited.md) and [hasUnautosavedChanges](hasunautosavedchanges.md) properties. For example, [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md) invokes this method, on the main thread, when it is done saving. The default implementation of this method also sends all of the document’s window controllers [setDocumentEdited(\_:)](../nswindowcontroller/setdocumentedited%28__%29.md) messages when appropriate.

## See Also

### Updating the Document Change Count

- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [NSDocument.ChangeType](changetype.md): Values that indicate a document’s edit status.
- [changeCountToken(for:)](changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

# updateChangeCountWithToken:forSaveOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the document’s change count settings after a successful save operation.

## Declaration

```objectivec
- (void) updateChangeCountWithToken:(id) changeCountToken forSaveOperation:(NSSaveOperationType) saveOperation;
```

## Parameters

- `changeCountToken`: An object encapsulating the document changes, returned from [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md).
- `saveOperation`: The type of save operation.

<a id="Discussion"></a>

## Discussion

This method updates the values in the [documentEdited](isdocumentedited.md) and [hasUnautosavedChanges](hasunautosavedchanges.md) properties. For example, [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md) invokes this method, on the main thread, when it is done saving. The default implementation of this method also sends all of the document’s window controllers [setDocumentEdited:](../nswindowcontroller/setdocumentedited%28__%29.md) messages when appropriate.

## See Also

### Updating the Document Change Count

- [updateChangeCount:](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [NSDocumentChangeType](changetype.md): Values that indicate a document’s edit status.
- [changeCountTokenForSaveOperation:](changecounttoken%28for_%29.md): Returns an object that encapsulates the current record of document changes at the beginning of a save operation.
