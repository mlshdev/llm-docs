> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/documents](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/documents)

# documents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document objects managed by the receiver.

## Declaration

```swift
var documents: [NSDocument] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains zero or more [NSDocument](../nsdocument.md) objects.

## See Also

### Managing Documents

- [addDocument(\_:)](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [document(for:)](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument(\_:)](removedocument%28__%29.md): Removes the given document from the list of open documents.

# documents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document objects managed by the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSDocument *> * documents;
```

<a id="Discussion"></a>

## Discussion

The array contains zero or more [NSDocument](../nsdocument.md) objects.

## See Also

### Related Documentation

- [documentForFileName:](documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.

### Managing Documents

- [addDocument:](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [documentForWindow:](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument:](removedocument%28__%29.md): Removes the given document from the list of open documents.
