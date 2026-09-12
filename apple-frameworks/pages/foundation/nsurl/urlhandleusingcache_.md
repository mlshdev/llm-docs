> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/urlhandleusingcache:](https://developer.apple.com/documentation/foundation/nsurl/urlhandleusingcache:)

# URLHandleUsingCache:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns a URL handle to service the receiver.

## Declaration

```objectivec
- (NSURLHandle *) URLHandleUsingCache:(BOOL) shouldUseCache;
```

## Parameters

- `shouldUseCache`: Whether to use a cached URL handle. If `shouldUseCache` is [true](https://developer.apple.com/documentation/swift/true), the cache is searched for a URL handle that has serviced the receiver or another identical URL. If `shouldUseCache` is [false](https://developer.apple.com/documentation/swift/false), a newly instantiated handle is returned, even if an equivalent URL has been loaded.

<a id="return-value"></a>

## Return Value

A URL handle to service the receiver.

<a id="Discussion"></a>

## Discussion

Sophisticated clients use the URL handle directly for additional control.

<a id="Special-Considerations"></a>

### Special Considerations

Use the [NSURLSession](../urlsession.md) or [NSURLConnection](../nsurlconnection.md) classes for loading content from remote URLs.

## See Also

### Related Documentation

- [cachedHandleForURL:](../nsurlhandle/cachedhandleforurl_.md): Deprecated. Returns the URL handle from the cache that has serviced the specified URL or another identical URL.

### Deprecated

- [initWithScheme:host:path:](init%28scheme_host_path_%29.md): Deprecated. Initializes a newly created NSURL with a specified scheme, host, and path.
- [loadResourceDataNotifyingClient:usingCache:](loadresourcedatanotifyingclient_usingcache_.md): Deprecated. Loads the receiver’s resource data in the background.
- [resourceDataUsingCache:](resourcedatausingcache_.md): Deprecated. Returns the receiver’s resource data, loading it if necessary.
- [setResourceData:](setresourcedata_.md): Deprecated. Attempts to set the resource data for the receiver.
- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the specified property of the receiver’s resource.
- [setProperty:forKey:](setproperty_forkey_.md): Deprecated. Changes the specified property of the receiver’s resource.
