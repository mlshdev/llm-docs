> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/maximumrecentdocumentcount](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/maximumrecentdocumentcount)

# maximumRecentDocumentCount (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum number of items that may be presented in the standard Open Recent menu.

## Declaration

```swift
var maximumRecentDocumentCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

A value of 0 indicates that `NSDocumentController` will not attempt to add an Open Recent menu to your application’s File menu, although `NSDocumentController` will not attempt to remove any preexisting Open Recent menu item. The default implementation returns a value that is subject to change and may or may not be derived from a setting made by the user in System Preferences.

## See Also

### Managing the Open Recent Menu

- [clearRecentDocuments(\_:)](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL(\_:)](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument(\_:)](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.

# maximumRecentDocumentCount (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum number of items that may be presented in the standard Open Recent menu.

## Declaration

```objectivec
@property (readonly) NSUInteger maximumRecentDocumentCount;
```

<a id="Discussion"></a>

## Discussion

A value of 0 indicates that `NSDocumentController` will not attempt to add an Open Recent menu to your application’s File menu, although `NSDocumentController` will not attempt to remove any preexisting Open Recent menu item. The default implementation returns a value that is subject to change and may or may not be derived from a setting made by the user in System Preferences.

## See Also

### Managing the Open Recent Menu

- [clearRecentDocuments:](clearrecentdocuments%28__%29.md): Empties the recent documents list for the application.
- [noteNewRecentDocumentURL:](notenewrecentdocumenturl%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the data located by the URL.
- [noteNewRecentDocument:](notenewrecentdocument%28__%29.md): Adds or replaces an Open Recent menu item corresponding to the document.
- [recentDocumentURLs](recentdocumenturls.md): The list of recent-document URLs.
