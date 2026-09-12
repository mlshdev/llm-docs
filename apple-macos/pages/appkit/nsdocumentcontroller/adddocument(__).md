> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/adddocument(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/adddocument(_:))

# addDocument(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the given document to the list of open documents.

## Declaration

```swift
func addDocument(_ document: NSDocument)
```

## Parameters

- `document`: The document to add.

<a id="Discussion"></a>

## Discussion

The `open...` methods automatically call [addDocument(\_:)](adddocument%28__%29.md). This method is mostly provided for subclasses that want to know when documents arrive.

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [document(for:)](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument(\_:)](removedocument%28__%29.md): Removes the given document from the list of open documents.

# addDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the given document to the list of open documents.

## Declaration

```objectivec
- (void) addDocument:(NSDocument *) document;
```

## Parameters

- `document`: The document to add.

<a id="Discussion"></a>

## Discussion

The `open...` methods automatically call [addDocument:](adddocument%28__%29.md). This method is mostly provided for subclasses that want to know when documents arrive.

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [documentForWindow:](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument:](removedocument%28__%29.md): Removes the given document from the list of open documents.
