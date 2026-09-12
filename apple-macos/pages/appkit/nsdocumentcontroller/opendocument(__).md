> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/opendocument(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/opendocument(_:))

# openDocument(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.

## Declaration

```swift
@IBAction func openDocument(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

The method adds the newly created objects to the list of `NSDocument` objects managed by the document controller. This method calls [openDocument(withContentsOf:display:completionHandler:)](opendocument%28withcontentsof_display_completionhandler_%29.md), which actually creates the `NSDocument` objects.

## See Also

### Responding to Action Messages

- [newDocument(\_:)](newdocument%28__%29.md): An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.
- [saveAllDocuments(\_:)](savealldocuments%28__%29.md): As the action method called by the Save All command, saves all open documents of the application that need to be saved.

# openDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method called by the Open menu command, it runs the modal Open panel and, based on the selected filenames, creates one or more `NSDocument` objects from the contents of the files.

## Declaration

```objectivec
- (void) openDocument:(id) sender;
```

<a id="Discussion"></a>

## Discussion

The method adds the newly created objects to the list of `NSDocument` objects managed by the document controller. This method calls [openDocumentWithContentsOfURL:display:completionHandler:](opendocument%28withcontentsof_display_completionhandler_%29.md), which actually creates the `NSDocument` objects.

## See Also

### Related Documentation

- [fileNamesFromRunningOpenPanel](filenamesfromrunningopenpanel.md): Deprecated. Returns a selection of files chosen by the user in the Open panel.

### Responding to Action Messages

- [newDocument:](newdocument%28__%29.md): An action method called by the New menu command, this method creates a new `NSDocument` object and adds it to the list of such objects managed by the document controller.
- [saveAllDocuments:](savealldocuments%28__%29.md): As the action method called by the Save All command, saves all open documents of the application that need to be saved.
