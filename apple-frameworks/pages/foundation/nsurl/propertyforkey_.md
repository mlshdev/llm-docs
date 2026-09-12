> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/propertyforkey:](https://developer.apple.com/documentation/foundation/nsurl/propertyforkey:)

# propertyForKey:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Returns the specified property of the receiver’s resource.

## Declaration

```objectivec
- (id) propertyForKey:(NSString *) propertyKey;
```

## Parameters

- `propertyKey`: The key of the desired property.

<a id="return-value"></a>

## Return Value

The value of the property of the receiver’s resource for the provided key. Returns `nil` if there is no such key.

## See Also

### Deprecated

- [initWithScheme:host:path:](init%28scheme_host_path_%29.md): Deprecated. Initializes a newly created NSURL with a specified scheme, host, and path.
- [URLHandleUsingCache:](urlhandleusingcache_.md): Deprecated. Returns a URL handle to service the receiver.
- [loadResourceDataNotifyingClient:usingCache:](loadresourcedatanotifyingclient_usingcache_.md): Deprecated. Loads the receiver’s resource data in the background.
- [resourceDataUsingCache:](resourcedatausingcache_.md): Deprecated. Returns the receiver’s resource data, loading it if necessary.
- [setResourceData:](setresourcedata_.md): Deprecated. Attempts to set the resource data for the receiver.
- [setProperty:forKey:](setproperty_forkey_.md): Deprecated. Changes the specified property of the receiver’s resource.
