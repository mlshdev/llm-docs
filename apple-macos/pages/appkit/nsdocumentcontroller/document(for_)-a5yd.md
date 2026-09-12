> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/document(for:)-a5yd](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/document(for:)-a5yd)

# document(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the document object whose window controller owns a specified window.

## Declaration

```swift
func document(for window: NSWindow) -> NSDocument?
```

## Parameters

- `window`: The window owned by the window controller.

<a id="return-value"></a>

## Return Value

The document object whose window controller owns `window`. Returns `nil` if `window` is `nil`, if `window` has no window controller, or if the window controller does not have an association with an instance of `NSDocument`.

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument(\_:)](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument(\_:)](removedocument%28__%29.md): Removes the given document from the list of open documents.

# documentForWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the document object whose window controller owns a specified window.

## Declaration

```objectivec
- (NSDocument *) documentForWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window owned by the window controller.

<a id="return-value"></a>

## Return Value

The document object whose window controller owns `window`. Returns `nil` if `window` is `nil`, if `window` has no window controller, or if the window controller does not have an association with an instance of `NSDocument`.

## See Also

### Related Documentation

- [documentForFileName:](documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument:](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument:](removedocument%28__%29.md): Removes the given document from the list of open documents.
