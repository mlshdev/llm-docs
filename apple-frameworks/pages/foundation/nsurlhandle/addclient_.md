> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlhandle/addclient:](https://developer.apple.com/documentation/foundation/nsurlhandle/addclient:)

# addClient:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Adds a client of the URL handle.

> Use [NSURLConnection](../nsurlconnection.md) or [NSURLDownload](../nsurldownload.md) instead; see [URL Loading System](../url-loading-system.md).

## Declaration

```objectivec
- (void) addClient:(id<NSURLHandleClient>) client;
```

## Parameters

- `client`: An object conforming to the `NSURLHandleClient` protocol.

## See Also

### Managing clients

- [removeClient:](removeclient_.md): Deprecated. Removes `client` as an `NSURLHandleClient` of the receiver.
