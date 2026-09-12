> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webcachemodel/primarywebbrowser](https://developer.apple.com/documentation/webkit/webcachemodel/primarywebbrowser)

# WebCacheModel.primaryWebBrowser (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.

## Declaration

```swift
case primaryWebBrowser
```

## See Also

### Constants

- [WebCacheModel.documentViewer](documentviewer.md): Deprecated. Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.
- [WebCacheModel.documentBrowser](documentbrowser.md): Deprecated. Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.

# WebCacheModelPrimaryWebBrowser (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.

## Declaration

```objectivec
WebCacheModelPrimaryWebBrowser
```

## See Also

### Constants

- [WebCacheModelDocumentViewer](documentviewer.md): Deprecated. Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.
- [WebCacheModelDocumentBrowser](documentbrowser.md): Deprecated. Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.
