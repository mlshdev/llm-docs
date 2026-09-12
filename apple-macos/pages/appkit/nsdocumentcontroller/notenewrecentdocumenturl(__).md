> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/notenewrecentdocumenturl(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/notenewrecentdocumenturl(_:))

# noteNewRecentDocumentURL(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds or replaces an Open Recent menu item corresponding to the data located by the URL.

## Declaration

```swift
func noteNewRecentDocumentURL(_ url: URL)
```

## Parameters

- `url`: The URL to evaluate.

<a id="Discussion"></a>

## Discussion

`NSDocument` automatically calls this method when appropriate for `NSDocument`-based applications. Applications not based on `NSDocument` must also implement the [application(\_:openFile:)](../nsapplicationdelegate/application%28__openfile_%29.md) method in the application delegate to handle requests from the Open Recent menu command. You can override this method in an `NSDocument`-based application to prevent certain kinds of documents from getting into the list (but you have to identify them by URL).

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments(\_:)](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocument(\_:)](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.

# noteNewRecentDocumentURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds or replaces an Open Recent menu item corresponding to the data located by the URL.

## Declaration

```objectivec
- (void) noteNewRecentDocumentURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to evaluate.

<a id="Discussion"></a>

## Discussion

`NSDocument` automatically calls this method when appropriate for `NSDocument`-based applications. Applications not based on `NSDocument` must also implement the [application:openFile:](../nsapplicationdelegate/application%28__openfile_%29.md) method in the application delegate to handle requests from the Open Recent menu command. You can override this method in an `NSDocument`-based application to prevent certain kinds of documents from getting into the list (but you have to identify them by URL).

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments:](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocument:](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.
