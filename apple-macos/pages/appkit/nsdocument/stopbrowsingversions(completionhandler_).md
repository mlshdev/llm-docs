> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/stopbrowsingversions(completionhandler:)](https://developer.apple.com/documentation/appkit/nsdocument/stopbrowsingversions(completionhandler:))

# stopBrowsingVersions(completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Dismiss the Versions browser for the current document.

## Declaration

```swift
func stopBrowsingVersions(completionHandler: (() -> Void)? = nil)
```

```swift
func stopBrowsingVersions() async
```

## Parameters

- `completionHandler`: The completion handler block to call when the Versions browser is fully dismissed. AppKit calls this block on your app’s main thread, waiting for any dismissal animations to complete before calling it. The block block has no return value and no parameters.

<a id="Discussion"></a>

## Discussion

## See Also

### Browsing Document Versions

- [browseVersions(\_:)](browseversions%28__%29.md): Opens the Versions browser in the document’s main window.
- [isBrowsingVersions](isbrowsingversions.md): A Boolean value that indicates whether the document is currently displaying the Versions browser.

# stopBrowsingVersionsWithCompletionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Dismiss the Versions browser for the current document.

## Declaration

```objectivec
- (void) stopBrowsingVersionsWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler block to call when the Versions browser is fully dismissed. AppKit calls this block on your app’s main thread, waiting for any dismissal animations to complete before calling it. The block block has no return value and no parameters.

<a id="Discussion"></a>

## Discussion

## See Also

### Browsing Document Versions

- [browseDocumentVersions:](browseversions%28__%29.md): Opens the Versions browser in the document’s main window.
- [browsingVersions](isbrowsingversions.md): A Boolean value that indicates whether the document is currently displaying the Versions browser.
