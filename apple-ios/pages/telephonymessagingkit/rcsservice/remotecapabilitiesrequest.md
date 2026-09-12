> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotecapabilitiesrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilitiesrequest)

# RCSService.RemoteCapabilitiesRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure representing a request to retrieve the capabilities of a remote handle.

## Declaration

```swift
struct RemoteCapabilitiesRequest
```

## Topics

### Creating a remote capabilities request

- [init(cellularServiceID:handle:cachePolicy:)](remotecapabilitiesrequest/init%28cellularserviceid_handle_cachepolicy_%29.md)

### Accessing request properties

- [cellularServiceID](remotecapabilitiesrequest/cellularserviceid.md): Service identifier to use for this request.
- [handle](remotecapabilitiesrequest/handle.md): The RCS handle, typically a phone number.
- [cachePolicy](remotecapabilitiesrequest/cachepolicy-swift.property.md): Cache policy to use for request.
- [RCSService.RemoteCapabilitiesRequest.CachePolicy](remotecapabilitiesrequest/cachepolicy-swift.enum.md): Enumeration representing the cache policy to use in requests.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Discovering remote capabilities

- [remoteCapabilities(for:)](remotecapabilities%28for_%29.md): Requests remote capability discovery for a given handle
- [RCSService.RemoteCapabilities](remotecapabilities.md): Structure representing the capabilities of a remote handle.
