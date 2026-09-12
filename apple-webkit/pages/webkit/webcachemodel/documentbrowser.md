> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webcachemodel/documentbrowser](https://developer.apple.com/documentation/webkit/webcachemodel/documentbrowser)

# WebCacheModel.documentBrowser (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.

## Declaration

```swift
case documentBrowser
```

## See Also

### Constants

- [WebCacheModel.documentViewer](documentviewer.md): Deprecated. Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.
- [WebCacheModel.primaryWebBrowser](primarywebbrowser.md): Deprecated. Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.

# WebCacheModelDocumentBrowser (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.

## Declaration

```objectivec
WebCacheModelDocumentBrowser
```

## See Also

### Constants

- [WebCacheModelDocumentViewer](documentviewer.md): Deprecated. Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.
- [WebCacheModelPrimaryWebBrowser](primarywebbrowser.md): Deprecated. Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.
