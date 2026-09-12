> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webcachemodel/documentviewer](https://developer.apple.com/documentation/webkit/webcachemodel/documentviewer)

# WebCacheModel.documentViewer (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.

## Declaration

```swift
case documentViewer
```

## See Also

### Constants

- [WebCacheModel.documentBrowser](documentbrowser.md): Deprecated. Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.
- [WebCacheModel.primaryWebBrowser](primarywebbrowser.md): Deprecated. Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.

# WebCacheModelDocumentViewer (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.

## Declaration

```objectivec
WebCacheModelDocumentViewer
```

## See Also

### Constants

- [WebCacheModelDocumentBrowser](documentbrowser.md): Deprecated. Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.
- [WebCacheModelPrimaryWebBrowser](primarywebbrowser.md): Deprecated. Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.
