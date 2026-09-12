> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/urlhandleclassforurl:](https://developer.apple.com/documentation/foundation/nsurlhandle/urlhandleclassforurl:)

# URLHandleClassForURL:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns the class of the URL handle that will be used for a specified URL.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
+ (Class) URLHandleClassForURL:(NSURL *) anURL;
```

## Parameters

- `anURL`: The URL in question.

<a id="return-value"></a>

## Return Value

The class of the URL handle that will be used for `aURL`.

<a id="Discussion"></a>

## Discussion

Subclasses of `NSURLHandle` must be registered via the [registerURLHandleClass:](registerurlhandleclass_.md) method. The subclass is determined by asking the list of registered subclasses if it [canInitWithURL:](caninitwithurl_.md); the first class to respond [true](https://developer.apple.com/documentation/swift/true) is selected.

## See Also

### Managing subclasses

- [canInitWithURL:](caninitwithurl_.md): Deprecated. Returns whether a URL handle can be initialized with a given URL.
- [registerURLHandleClass:](registerurlhandleclass_.md): Deprecated. Registers a subclass of `NSURLHandle` as an available subclass for handling URLs
