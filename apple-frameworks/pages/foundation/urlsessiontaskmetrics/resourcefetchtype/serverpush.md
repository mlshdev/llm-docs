> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskmetrics/resourcefetchtype/serverpush](https://developer.apple.com/documentation/foundation/urlsessiontaskmetrics/resourcefetchtype/serverpush)

# URLSessionTaskMetrics.ResourceFetchType.serverPush (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 10.0+ (deprecated in 18.4) · iPadOS 10.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.12+ (deprecated in 15.4) · tvOS 10.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 3.0+ (deprecated in 11.4)

The resource was pushed by the server to the client.

> Server push is no longer supported as of iOS 17 and aligned releases

## Declaration

```swift
case serverPush
```

## See Also

### Fetch types

- [URLSessionTaskMetrics.ResourceFetchType.unknown](unknown.md): The manner in which the resource was fetched could not be determined.
- [URLSessionTaskMetrics.ResourceFetchType.networkLoad](networkload.md): The resource was loaded over the network.
- [URLSessionTaskMetrics.ResourceFetchType.localCache](localcache.md): The resource was retrieved from the local storage.

# NSURLSessionTaskMetricsResourceFetchTypeServerPush (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ (deprecated in 18.4) · iPadOS 10.0+ (deprecated in 18.4) · Mac Catalyst 13.1+ (deprecated in 18.4) · macOS 10.12+ (deprecated in 15.4) · tvOS 10.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 3.0+ (deprecated in 11.4)

The resource was pushed by the server to the client.

> Server push is no longer supported as of iOS 17 and aligned releases

## Declaration

```objectivec
NSURLSessionTaskMetricsResourceFetchTypeServerPush
```

## See Also

### Fetch types

- [NSURLSessionTaskMetricsResourceFetchTypeUnknown](unknown.md): The manner in which the resource was fetched could not be determined.
- [NSURLSessionTaskMetricsResourceFetchTypeNetworkLoad](networkload.md): The resource was loaded over the network.
- [NSURLSessionTaskMetricsResourceFetchTypeLocalCache](localcache.md): The resource was retrieved from the local storage.
