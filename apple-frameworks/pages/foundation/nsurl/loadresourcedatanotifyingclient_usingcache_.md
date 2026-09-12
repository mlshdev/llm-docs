> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/loadresourcedatanotifyingclient:usingcache:](https://developer.apple.com/documentation/foundation/nsurl/loadresourcedatanotifyingclient:usingcache:)

# loadResourceDataNotifyingClient:usingCache:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Loads the receiver’s resource data in the background.

## Declaration

```objectivec
- (void) loadResourceDataNotifyingClient:(id) client usingCache:(BOOL) shouldUseCache;
```

## Parameters

- `client`: The client of the loading operation. `client` is notified of the receiver’s progress loading the resource data using the NSURLClient informal protocol. The NSURLClient messages are delivered on the current thread and require the run loop to be running.
- `shouldUseCache`: Whether the URL should use cached resource data from an already loaded URL that refers to the same resource. If `YES`, the cache is consulted when loading data. If `NO`, the data is always loaded directly, without consulting the cache.

<a id="Discussion"></a>

## Discussion

A given NSURL object can perform only one background load at a time.

<a id="Special-Considerations"></a>

### Special Considerations

Use the [NSURLSession](../urlsession.md) or [NSURLConnection](../nsurlconnection.md) classes for loading content from remote URLs.

## See Also

### Deprecated

- [initWithScheme:host:path:](init%28scheme_host_path_%29.md): Deprecated. Initializes a newly created NSURL with a specified scheme, host, and path.
- [URLHandleUsingCache:](urlhandleusingcache_.md): Deprecated. Returns a URL handle to service the receiver.
- [resourceDataUsingCache:](resourcedatausingcache_.md): Deprecated. Returns the receiver’s resource data, loading it if necessary.
- [setResourceData:](setresourcedata_.md): Deprecated. Attempts to set the resource data for the receiver.
- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the specified property of the receiver’s resource.
- [setProperty:forKey:](setproperty_forkey_.md): Deprecated. Changes the specified property of the receiver’s resource.
