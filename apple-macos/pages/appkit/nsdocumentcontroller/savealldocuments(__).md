> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/savealldocuments(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/savealldocuments(_:))

# saveAllDocuments(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

As the action method called by the Save All command, saves all open documents of the application that need to be saved.

## Declaration

```swift
@IBAction func saveAllDocuments(_ sender: Any?)
```

## See Also

### Related Documentation

- [save(\_:)](../nsdocument/save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.

### Responding to Action Messages

- [newDocument(\_:)](newdocument%28__%29.md): An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.
- [openDocument(\_:)](opendocument%28__%29.md): An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.

# saveAllDocuments: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

As the action method called by the Save All command, saves all open documents of the application that need to be saved.

## Declaration

```objectivec
- (void) saveAllDocuments:(id) sender;
```

## See Also

### Related Documentation

- [saveDocument:](../nsdocument/save%28__%29.md): The action method invoked in the receiver as first responder when the user chooses the Save menu command.

### Responding to Action Messages

- [newDocument:](newdocument%28__%29.md): An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.
- [openDocument:](opendocument%28__%29.md): An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.
