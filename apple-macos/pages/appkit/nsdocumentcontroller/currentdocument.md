> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/currentdocument](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/currentdocument)

# currentDocument (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document object associated with the main window.

## Declaration

```swift
var currentDocument: NSDocument? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if it is called when the app is not active. This can occur during processing of a drag-and-drop operation, for example, in an implementation of `readSelectionFromPasteboard:`. In such a case, send the following message instead from an `NSView` subclass associated with the document:

```objc
[[[self window] windowController] document];
```

## See Also

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument(\_:)](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [document(for:)](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument(\_:)](removedocument%28__%29.md): Removes the given document from the list of open documents.

# currentDocument (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document object associated with the main window.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSDocument * currentDocument;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if it is called when the app is not active. This can occur during processing of a drag-and-drop operation, for example, in an implementation of `readSelectionFromPasteboard:`. In such a case, send the following message instead from an `NSView` subclass associated with the document:

```objc
[[[self window] windowController] document];
```

## See Also

### Related Documentation

- [documentForFileName:](documentforfilename_.md): Deprecated. Returns the document object for the file in which the document data is stored.

### Managing Documents

- [documents](documents.md): The document objects managed by the receiver.
- [addDocument:](adddocument%28__%29.md): Adds the given document to the list of open documents.
- [documentForWindow:](document%28for_%29-a5yd.md): Returns the document object whose window controller owns a specified window.
- [hasEditedDocuments](hasediteddocuments.md): A Boolean value indicating whether the receiver has any documents with unsaved changes.
- [removeDocument:](removedocument%28__%29.md): Removes the given document from the list of open documents.
