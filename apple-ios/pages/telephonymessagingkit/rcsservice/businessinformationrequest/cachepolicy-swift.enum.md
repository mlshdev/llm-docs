> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/businessinformationrequest/cachepolicy-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/businessinformationrequest/cachepolicy-swift.enum)

# RCSService.BusinessInformationRequest.CachePolicy

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

\`

## Declaration

```swift
enum CachePolicy
```

<a id="overview"></a>

## Overview

The cache policy used for a business information request.

## Topics

### Inspecting cache policies

- [RCSService.BusinessInformationRequest.CachePolicy.cacheOnly](cachepolicy-swift.enum/cacheonly.md): Load from local cache.
- [RCSService.BusinessInformationRequest.CachePolicy.remoteOnly](cachepolicy-swift.enum/remoteonly.md): Load from remote.
- [RCSService.BusinessInformationRequest.CachePolicy.cacheOrRemote](cachepolicy-swift.enum/cacheorremote.md): Load from local cache if available, otherwise load from remote.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing request properties

- [cellularServiceID](cellularserviceid.md): Service identifier to use for this request.
- [handle](handle.md): URI handle of the target.
- [cachePolicy](cachepolicy-swift.property.md): Cache policy to use for request.
