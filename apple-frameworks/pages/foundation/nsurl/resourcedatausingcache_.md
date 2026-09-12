> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/resourcedatausingcache:](https://developer.apple.com/documentation/foundation/nsurl/resourcedatausingcache:)

# resourceDataUsingCache:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns the receiver’s resource data, loading it if necessary.

## Declaration

```objectivec
- (NSData *) resourceDataUsingCache:(BOOL) shouldUseCache;
```

## Parameters

- `shouldUseCache`: Whether the URL should use cached resource data from an already loaded URL that refers to the same resource. If `YES`, the cache is consulted when loading data. If `NO`, the data is always loaded directly, without consulting the cache.

<a id="return-value"></a>

## Return Value

The receiver’s resource data.

<a id="Discussion"></a>

## Discussion

If the receiver has not already loaded its resource data, it will attempt to load it as a blocking operation.

In OS X v10.4, this method requests that the data be sent with gzip compression, however it does not automatically decompress the data if the server complies with this request. Data is automatically decompressed in macOS 10.5 and later.

<a id="Special-Considerations"></a>

### Special Considerations

Use the [NSURLSession](../urlsession.md) or [NSURLConnection](../nsurlconnection.md) classes for loading content from remote URLs.

## See Also

### Deprecated

- [initWithScheme:host:path:](init%28scheme_host_path_%29.md): Deprecated. Initializes a newly created NSURL with a specified scheme, host, and path.
- [URLHandleUsingCache:](urlhandleusingcache_.md): Deprecated. Returns a URL handle to service the receiver.
- [loadResourceDataNotifyingClient:usingCache:](loadresourcedatanotifyingclient_usingcache_.md): Deprecated. Loads the receiver’s resource data in the background.
- [setResourceData:](setresourcedata_.md): Deprecated. Attempts to set the resource data for the receiver.
- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the specified property of the receiver’s resource.
- [setProperty:forKey:](setproperty_forkey_.md): Deprecated. Changes the specified property of the receiver’s resource.
