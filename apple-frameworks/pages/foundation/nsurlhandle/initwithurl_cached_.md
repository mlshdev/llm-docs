> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/initwithurl:cached:](https://developer.apple.com/documentation/foundation/nsurlhandle/initwithurl:cached:)

# initWithURL:cached:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Initializes a newly created URL handle with the specified URL.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (id) initWithURL:(NSURL *) anURL cached:(BOOL) willCache;
```

## Parameters

- `anURL`: The URL for the new handle.
- `willCache`: [true](https://developer.apple.com/documentation/swift/true) if the URL handle should cache its data and respond to requests from equivalent URLs for the cached data, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Subclasses of `NSURLHandle` must override this method.

## See Also

### Constructing NSURLHandles

- [cachedHandleForURL:](cachedhandleforurl_.md): Deprecated. Returns the URL handle from the cache that has serviced the specified URL or another identical URL.
