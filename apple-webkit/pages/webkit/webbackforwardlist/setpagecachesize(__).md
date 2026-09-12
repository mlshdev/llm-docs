> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/setpagecachesize(_:)](https://developer.apple.com/documentation/webkit/webbackforwardlist/setpagecachesize(_:))

# setPageCacheSize(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the maximum number of pages the receiver can cache.

> Use the [usesPageCache](../webpreferences/usespagecache.md) method in [WebPreferences](../webpreferences.md) instead.

## Declaration

```swift
func setPageCacheSize(_ size: Int)
```

## Parameters

- `size`: The maximum number of pages that can be cached.

<a id="Discussion"></a>

## Discussion

The default page cache size can vary depending on the computer’s configuration. Use [pageCacheSize()](pagecachesize%28%29.md) to get the current setting.

## See Also

### Page Caching

- [pageCacheSize()](pagecachesize%28%29.md): Deprecated. Returns the maximum number of pages that the receiver can cache.

# setPageCacheSize: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the maximum number of pages the receiver can cache.

> Use the [usesPageCache](../webpreferences/usespagecache.md) method in [WebPreferences](../webpreferences.md) instead.

## Declaration

```objectivec
- (void) setPageCacheSize:(NSUInteger) size;
```

## Parameters

- `size`: The maximum number of pages that can be cached.

<a id="Discussion"></a>

## Discussion

The default page cache size can vary depending on the computer’s configuration. Use [pageCacheSize](pagecachesize%28%29.md) to get the current setting.

## See Also

### Page Caching

- [pageCacheSize](pagecachesize%28%29.md): Deprecated. Returns the maximum number of pages that the receiver can cache.
