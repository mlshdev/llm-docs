> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/recentdocumenturls](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/recentdocumenturls)

# recentDocumentURLs (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The list of recent-document URLs.

## Declaration

```swift
var recentDocumentURLs: [URL] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects corresponding to the recently opened documents. Do not override this property.

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments(\_:)](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL(\_:)](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument(\_:)](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.

# recentDocumentURLs (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The list of recent-document URLs.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSURL *> * recentDocumentURLs;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects corresponding to the recently opened documents. Do not override this property.

## See Also

### Managing the Open Recent Menu

- [maximumRecentDocumentCount](maximumrecentdocumentcount.md): The maximum number of items that may be presented in the standard Open Recent menu.
- [clearRecentDocuments:](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL:](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument:](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
