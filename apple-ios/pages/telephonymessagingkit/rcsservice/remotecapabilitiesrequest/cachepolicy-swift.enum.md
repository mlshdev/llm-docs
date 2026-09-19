> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotecapabilitiesrequest/cachepolicy-swift.enum

# RCSService.RemoteCapabilitiesRequest.CachePolicy

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Enumeration representing the cache policy to use in requests.

## Declaration

```swift
enum CachePolicy
```

## Topics

### Accessing cache policies

- [RCSService.RemoteCapabilitiesRequest.CachePolicy.cacheOnly](cachepolicy-swift.enum/cacheonly.md): Load from local cache.
- [RCSService.RemoteCapabilitiesRequest.CachePolicy.cacheOrRemote](cachepolicy-swift.enum/cacheorremote.md): Load from local cache if available, otherwise load from remote.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing request properties

- [cellularServiceID](cellularserviceid.md): Service identifier to use for this request.
- [handle](handle.md): The RCS handle, typically a phone number.
- [cachePolicy](cachepolicy-swift.property.md): Cache policy to use for request.
