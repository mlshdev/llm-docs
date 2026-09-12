> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/caninitwithurl:](https://developer.apple.com/documentation/foundation/nsurlhandle/caninitwithurl:)

# canInitWithURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns whether a URL handle can be initialized with a given URL.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
+ (BOOL) canInitWithURL:(NSURL *) anURL;
```

## Parameters

- `anURL`: The URL in question.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a URL handle can be initialized with `aURL`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Subclasses of `NSURLHandle` must override this method to identify which URLs they can service.

## See Also

### Managing subclasses

- [URLHandleClassForURL:](urlhandleclassforurl_.md): Deprecated. Returns the class of the URL handle that will be used for a specified URL.
- [registerURLHandleClass:](registerurlhandleclass_.md): Deprecated. Registers a subclass of `NSURLHandle` as an available subclass for handling URLs
