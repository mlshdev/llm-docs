> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webcachemodel](https://developer.apple.com/documentation/webkit/webcachemodel)

# WebCacheModel (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Specifies the caching model for a web view.

## Declaration

```swift
enum WebCacheModel
```

## Topics

### Constants

- [WebCacheModel.documentViewer](webcachemodel/documentviewer.md): Deprecated. Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.
- [WebCacheModel.documentBrowser](webcachemodel/documentbrowser.md): Deprecated. Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.
- [WebCacheModel.primaryWebBrowser](webcachemodel/primarywebbrowser.md): Deprecated. Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.

### Initializers

- [init(rawValue:)](webcachemodel/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# WebCacheModel (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Specifies the caching model for a web view.

## Declaration

```objectivec
enum WebCacheModel : NSUInteger;
```

## Topics

### Constants

- [WebCacheModelDocumentViewer](webcachemodel/documentviewer.md): Deprecated. Releases resources when they are no longer referenced and caches remote resources on disk. This model is appropriate for displaying a static document with no navigation user interface. This is the most memory-efficient model.
- [WebCacheModelDocumentBrowser](webcachemodel/documentbrowser.md): Deprecated. Caches a reasonable number of resources and previously viewed documents in memory and on disk. This model is appropriate for displaying and navigating between multiple documents.
- [WebCacheModelPrimaryWebBrowser](webcachemodel/primarywebbrowser.md): Deprecated. Caches a large number of resources and previously viewed documents in memory and on disk. This model is appropriate for a web view that behaves like a web browser.
