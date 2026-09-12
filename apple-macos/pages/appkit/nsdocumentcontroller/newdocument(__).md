> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/newdocument(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/newdocument(_:))

# newDocument(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.

## Declaration

```swift
@IBAction func newDocument(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

This method calls [openUntitledDocumentAndDisplay(\_:)](openuntitleddocumentanddisplay%28__%29.md).

## See Also

### Responding to Action Messages

- [openDocument(\_:)](opendocument%28__%29.md): An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.
- [saveAllDocuments(\_:)](savealldocuments%28__%29.md): As the action method called by the Save All command, saves all open documents of the application that need to be saved.

# newDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.

## Declaration

```objectivec
- (void) newDocument:(id) sender;
```

<a id="Discussion"></a>

## Discussion

This method calls [openUntitledDocumentAndDisplay:error:](openuntitleddocumentanddisplay%28__%29.md).

## See Also

### Responding to Action Messages

- [openDocument:](opendocument%28__%29.md): An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.
- [saveAllDocuments:](savealldocuments%28__%29.md): As the action method called by the Save All command, saves all open documents of the application that need to be saved.
