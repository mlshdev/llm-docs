> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/removedocument(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/removedocument(_:))

# removeDocument(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the given document from the list of open documents.

## Declaration

```swift
func removeDocument(_ document: NSDocument)
```

## Parameters

- `document`: The document to remove.

<a id="Discussion"></a>

## Discussion

A document will automatically call [removeDocument(\_:)](removedocument%28__%29.md) when it closes. This method is mostly provided for subclasses that want to know when documents close.

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument(\_:)](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [document(for:)](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.

# removeDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the given document from the list of open documents.

## Declaration

```objectivec
- (void) removeDocument:(NSDocument *) document;
```

## Parameters

- `document`: The document to remove.

<a id="Discussion"></a>

## Discussion

A document will automatically call [removeDocument:](removedocument%28__%29.md) when it closes. This method is mostly provided for subclasses that want to know when documents close.

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument:](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [documentForWindow:](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
