> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/changecounttoken(for:)](https://developer.apple.com/documentation/appkit/nsdocument/changecounttoken(for:))

# changeCountToken(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

## Declaration

```swift
func changeCountToken(for saveOperation: NSDocument.SaveOperationType) -> Any
```

## Parameters

- `saveOperation`: The type of save operation.

<a id="return-value"></a>

## Return Value

An object encapsulating the document changes.

<a id="Discussion"></a>

## Discussion

The returned object is meant to be passed to [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md) at the end of the save operation. For example, [save(to:ofType:for:completionHandler:)](save%28to_oftype_for_completionhandler_%29.md) invokes this method, on the main thread, before it does any actual saving. This method facilitates asynchronous saving, during which a user can change a document while it is being saved.

## See Also

### Updating the Document Change Count

- [updateChangeCount(withToken:for:)](updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [updateChangeCount(\_:)](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [NSDocument.ChangeType](changetype.md): Values that indicate a document’s edit status.

# changeCountTokenForSaveOperation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an object that encapsulates the current record of document changes at the beginning of a save operation.

## Declaration

```objectivec
- (id) changeCountTokenForSaveOperation:(NSSaveOperationType) saveOperation;
```

## Parameters

- `saveOperation`: The type of save operation.

<a id="return-value"></a>

## Return Value

An object encapsulating the document changes.

<a id="Discussion"></a>

## Discussion

The returned object is meant to be passed to [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md) at the end of the save operation. For example, [saveToURL:ofType:forSaveOperation:completionHandler:](save%28to_oftype_for_completionhandler_%29.md) invokes this method, on the main thread, before it does any actual saving. This method facilitates asynchronous saving, during which a user can change a document while it is being saved.

## See Also

### Updating the Document Change Count

- [updateChangeCountWithToken:forSaveOperation:](updatechangecount%28withtoken_for_%29.md): Updates the document’s change count settings after a successful save operation.
- [updateChangeCount:](updatechangecount%28__%29.md): Updates the receiver’s change count according to the given change type.
- [NSDocumentChangeType](changetype.md): Values that indicate a document’s edit status.
