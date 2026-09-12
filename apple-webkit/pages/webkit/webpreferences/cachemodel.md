> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/cachemodel](https://developer.apple.com/documentation/webkit/webpreferences/cachemodel)

# cacheModel (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The cache model for the web views associated with the receiver.

## Declaration

```swift
var cacheModel: WebCacheModel { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values are described in [WebCacheModel](../webcachemodel.md).

Set this property to optimize WebKit’s cache footprint (on disk and in memory) to best fit the use of the web view. If a web view is used only for a single webpage, use the [WebCacheModel.documentViewer](../webcachemodel/documentviewer.md) constant instead.

## See Also

### Caching

- [usesPageCache](usespagecache.md): Deprecated. A Boolean that indicates whether the web views associated with the receiver should use the shared page cache.

# cacheModel (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The cache model for the web views associated with the receiver.

## Declaration

```objectivec
@property (nonatomic) WebCacheModel cacheModel;
```

<a id="Discussion"></a>

## Discussion

Possible values are described in [WebCacheModel](../webcachemodel.md).

Set this property to optimize WebKit’s cache footprint (on disk and in memory) to best fit the use of the web view. If a web view is used only for a single webpage, use the [WebCacheModelDocumentViewer](../webcachemodel/documentviewer.md) constant instead.

## See Also

### Caching

- [usesPageCache](usespagecache.md): Deprecated. A Boolean that indicates whether the web views associated with the receiver should use the shared page cache.
