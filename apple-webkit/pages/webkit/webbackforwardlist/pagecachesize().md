> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/pagecachesize()](https://developer.apple.com/documentation/webkit/webbackforwardlist/pagecachesize())

# pageCacheSize() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the maximum number of pages that the receiver can cache.

> Use the [usesPageCache](../webpreferences/usespagecache.md) method in [WebPreferences](../webpreferences.md) instead.

## Declaration

```swift
func pageCacheSize() -> Int
```

<a id="return-value"></a>

## Return Value

The maximum number of pages that can be cached.

## See Also

### Page Caching

- [setPageCacheSize(\_:)](setpagecachesize%28__%29.md): Deprecated. Sets the maximum number of pages the receiver can cache.

# pageCacheSize (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the maximum number of pages that the receiver can cache.

> Use the [usesPageCache](../webpreferences/usespagecache.md) method in [WebPreferences](../webpreferences.md) instead.

## Declaration

```objectivec
- (NSUInteger) pageCacheSize;
```

<a id="return-value"></a>

## Return Value

The maximum number of pages that can be cached.

## See Also

### Page Caching

- [setPageCacheSize:](setpagecachesize%28__%29.md): Deprecated. Sets the maximum number of pages the receiver can cache.
