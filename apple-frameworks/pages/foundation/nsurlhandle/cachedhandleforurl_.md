> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/cachedhandleforurl:](https://developer.apple.com/documentation/foundation/nsurlhandle/cachedhandleforurl:)

# cachedHandleForURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns the URL handle from the cache that has serviced the specified URL or another identical URL.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
+ (NSURLHandle *) cachedHandleForURL:(NSURL *) anURL;
```

## Parameters

- `anURL`: The URL whose cached URL handle is desired.

<a id="return-value"></a>

## Return Value

The URL handle from the cache that has serviced `aURL` or another identical URL. Returns `nil` if there is no such handle.

<a id="Discussion"></a>

## Discussion

Subclasses of `NSURLHandle` must override this method.

## See Also

### Constructing NSURLHandles

- [initWithURL:cached:](initwithurl_cached_.md): Deprecated. Initializes a newly created URL handle with the specified URL.
