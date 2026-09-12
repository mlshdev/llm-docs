> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/isbrowsingversions](https://developer.apple.com/documentation/appkit/nsdocument/isbrowsingversions)

# isBrowsingVersions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the document is currently displaying the Versions browser.

## Declaration

```swift
var isBrowsingVersions: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the versions browser is visible.

## See Also

### Browsing Document Versions

- [browseVersions(\_:)](browseversions%28__%29.md): Opens the Versions browser in the document’s main window.
- [stopBrowsingVersions(completionHandler:)](stopbrowsingversions%28completionhandler_%29.md): Dismiss the Versions browser for the current document.

# browsingVersions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the document is currently displaying the Versions browser.

## Declaration

```objectivec
@property (readonly, getter=isBrowsingVersions) BOOL browsingVersions;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the versions browser is visible.

## See Also

### Browsing Document Versions

- [browseDocumentVersions:](browseversions%28__%29.md): Opens the Versions browser in the document’s main window.
- [stopBrowsingVersionsWithCompletionHandler:](stopbrowsingversions%28completionhandler_%29.md): Dismiss the Versions browser for the current document.
