> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/hasediteddocuments](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/hasediteddocuments)

# hasEditedDocuments (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver has any documents with unsaved changes.

## Declaration

```swift
var hasEditedDocuments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document controller contains documents with unsaved changes; otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument(\_:)](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [document(for:)](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [removeDocument(\_:)](removedocument%28__%29.md): Removes the given document from the list of open documents.

# hasEditedDocuments (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the receiver has any documents with unsaved changes.

## Declaration

```objectivec
@property (readonly) BOOL hasEditedDocuments;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the document controller contains documents with unsaved changes; otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument:](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [currentDocument](currentdocument.md): The document object associated with the main window.
- [documentForWindow:](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [removeDocument:](removedocument%28__%29.md): Removes the given document from the list of open documents.
