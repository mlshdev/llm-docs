> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/setresourcedata:](https://developer.apple.com/documentation/foundation/nsurl/setresourcedata:)

# setResourceData:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Attempts to set the resource data for the receiver.

## Declaration

```objectivec
- (BOOL) setResourceData:(NSData *) data;
```

## Parameters

- `data`: The data to set for the URL.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

In the case of a file URL, setting the data involves writing `data` to the specified file.

## See Also

### Deprecated

- [initWithScheme:host:path:](init%28scheme_host_path_%29.md): Deprecated. Initializes a newly created NSURL with a specified scheme, host, and path.
- [URLHandleUsingCache:](urlhandleusingcache_.md): Deprecated. Returns a URL handle to service the receiver.
- [loadResourceDataNotifyingClient:usingCache:](loadresourcedatanotifyingclient_usingcache_.md): Deprecated. Loads the receiver’s resource data in the background.
- [resourceDataUsingCache:](resourcedatausingcache_.md): Deprecated. Returns the receiver’s resource data, loading it if necessary.
- [propertyForKey:](propertyforkey_.md): Deprecated. Returns the specified property of the receiver’s resource.
- [setProperty:forKey:](setproperty_forkey_.md): Deprecated. Changes the specified property of the receiver’s resource.
