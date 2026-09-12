> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/browseversions(_:)](https://developer.apple.com/documentation/appkit/nsdocument/browseversions(_:))

# browseVersions(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Opens the Versions browser in the document’s main window.

## Declaration

```swift
@IBAction func browseVersions(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action of the Browse Saved Versions menu item in a document-based app.

## See Also

### Browsing Document Versions

- [isBrowsingVersions](isbrowsingversions.md): A Boolean value that indicates whether the document is currently displaying the Versions browser.
- [stopBrowsingVersions(completionHandler:)](stopbrowsingversions%28completionhandler_%29.md): Dismiss the Versions browser for the current document.

# browseDocumentVersions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Opens the Versions browser in the document’s main window.

## Declaration

```objectivec
- (void) browseDocumentVersions:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

This is the action of the Browse Saved Versions menu item in a document-based app.

## See Also

### Browsing Document Versions

- [browsingVersions](isbrowsingversions.md): A Boolean value that indicates whether the document is currently displaying the Versions browser.
- [stopBrowsingVersionsWithCompletionHandler:](stopbrowsingversions%28completionhandler_%29.md): Dismiss the Versions browser for the current document.
