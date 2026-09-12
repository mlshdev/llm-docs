> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/notenewrecentdocument(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/notenewrecentdocument(_:))

# noteNewRecentDocument(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds or replaces an Open Recent menu item corresponding to the document.

## Declaration

```swift
func noteNewRecentDocument(_ document: NSDocument)
```

## Parameters

- `document`: The document to evaluate.

<a id="Discussion"></a>

## Discussion

This method constructs a URL and calls [noteNewRecentDocumentURL(\_:)](notenewrecentdocumenturl%28__%29.md). Subclasses might override this method to prevent certain documents or kinds of documents from getting into the list.

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments(\_:)](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL(\_:)](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.

# noteNewRecentDocument: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds or replaces an Open Recent menu item corresponding to the document.

## Declaration

```objectivec
- (void) noteNewRecentDocument:(NSDocument *) document;
```

## Parameters

- `document`: The document to evaluate.

<a id="Discussion"></a>

## Discussion

This method constructs a URL and calls [noteNewRecentDocumentURL:](notenewrecentdocumenturl%28__%29.md). Subclasses might override this method to prevent certain documents or kinds of documents from getting into the list.

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments:](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL:](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.
