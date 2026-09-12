> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/clearrecentdocuments(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/clearrecentdocuments(_:))

# clearRecentDocuments(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Empties the recent documents list for the application.

## Declaration

```swift
@IBAction func clearRecentDocuments(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

This is the action for the Clear menu command, but it can be called directly if necessary.

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [noteNewRecentDocumentURL(\_:)](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument(\_:)](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.

# clearRecentDocuments: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Empties the recent documents list for the application.

## Declaration

```objectivec
- (void) clearRecentDocuments:(id) sender;
```

<a id="Discussion"></a>

## Discussion

This is the action for the Clear menu command, but it can be called directly if necessary.

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [noteNewRecentDocumentURL:](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument:](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.
