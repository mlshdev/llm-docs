> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/registerurlhandleclass:](https://developer.apple.com/documentation/foundation/nsurlhandle/registerurlhandleclass:)

# registerURLHandleClass:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Registers a subclass of `NSURLHandle` as an available subclass for handling URLs

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
+ (void) registerURLHandleClass:(Class) anURLHandleSubclass;
```

## Parameters

- `anURLHandleSubclass`: The new subclass to register as an available subclass.

## See Also

### Managing subclasses

- [URLHandleClassForURL:](urlhandleclassforurl_.md): Deprecated. Returns the class of the URL handle that will be used for a specified URL.
- [canInitWithURL:](caninitwithurl_.md): Deprecated. Returns whether a URL handle can be initialized with a given URL.
