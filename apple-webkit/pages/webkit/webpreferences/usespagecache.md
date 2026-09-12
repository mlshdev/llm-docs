> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/usespagecache](https://developer.apple.com/documentation/webkit/webpreferences/usespagecache)

# usesPageCache (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the web views associated with the receiver should use the shared page cache.

## Declaration

```swift
var usesPageCache: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the web views should use a page cache; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Pages are cached when they are added to a back-forward list, and removed from the cache when they are removed from a back-forward list. Because the page cache is global, caching a page in one back-forward list may cause a page in another back-forward list to be removed from the cache.

## See Also

### Caching

- [cacheModel](cachemodel.md): Deprecated. The cache model for the web views associated with the receiver.

# usesPageCache (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the web views associated with the receiver should use the shared page cache.

## Declaration

```objectivec
@property (nonatomic) BOOL usesPageCache;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the web views should use a page cache; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Pages are cached when they are added to a back-forward list, and removed from the cache when they are removed from a back-forward list. Because the page cache is global, caching a page in one back-forward list may cause a page in another back-forward list to be removed from the cache.

## See Also

### Caching

- [cacheModel](cachemodel.md): Deprecated. The cache model for the web views associated with the receiver.
