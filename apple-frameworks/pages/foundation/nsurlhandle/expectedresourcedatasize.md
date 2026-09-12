> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/expectedresourcedatasize](https://developer.apple.com/documentation/foundation/nsurlhandle/expectedresourcedatasize)

# expectedResourceDataSize

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Returns the expected length of the resource data if it is provided by the server.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (long long) expectedResourceDataSize;
```

<a id="return-value"></a>

## Return Value

The expected size of the resource data, in bytes. A negative value if the length is unknown.

<a id="Discussion"></a>

## Discussion

This information can be queried before all the data has arrived.

## See Also

### Loading resource data

- [availableResourceData](availableresourcedata.md): Deprecated. Immediately returns the currently available resource data managed by the URL handle.
- [backgroundLoadDidFailWithReason:](backgroundloaddidfailwithreason_.md): Deprecated. Called when a background load fails.
- [beginLoadInBackground](beginloadinbackground.md): Deprecated. Called when a background load begins.
- [cancelLoadInBackground](cancelloadinbackground.md): Deprecated. Called to cancel a load currently in progress.
- [didLoadBytes:loadComplete:](didloadbytes_loadcomplete_.md): Deprecated. Appends new data to the receiver’s resource data.
- [endLoadInBackground](endloadinbackground.md): Deprecated. Halts any background loading.
- [failureReason](failurereason.md): Deprecated. Returns a string describing the reason a load failed.
- [flushCachedData](flushcacheddata.md): Deprecated. Flushes any cached data for the URL served by this URL handle.
- [loadInBackground](loadinbackground.md): Deprecated. Loads the receiver’s data in the background.
- [loadInForeground](loadinforeground.md): Deprecated. Loads the receiver’s data synchronously.
- [resourceData](resourcedata.md): Deprecated. Returns the resource data managed by the receiver, loading it if necessary.
- [status](status-c.method.md): Deprecated. Returns the status of the receiver.
- [NSURLHandleStatus](status-swift.enum.md): These following constants are defined by `NSURLHandle` and are returned by [status](status-c.method.md).
