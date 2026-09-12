> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/exceptionrequest/status-swift.enum](https://developer.apple.com/documentation/marketplacekit/applibrary/exceptionrequest/status-swift.enum)

# AppLibrary.ExceptionRequest.Status

**Framework:** MarketplaceKit  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+

The possible statuses of an exception request for an app.

## Declaration

```swift
enum Status
```

<a id="overview"></a>

## Overview

The [AppLibrary.ExceptionRequest](../exceptionrequest.md) structure’s [status](status-swift.property.md) property is of this type.

## Topics

### Determining the status

- [AppLibrary.ExceptionRequest.Status.approved](status-swift.enum/approved.md): A status that indicates the parent or guardian allows a specific app installation.
- [AppLibrary.ExceptionRequest.Status.declined](status-swift.enum/declined.md): A status that indicates the parent or guardian disallows a specific app installation.
- [AppLibrary.ExceptionRequest.Status.pending](status-swift.enum/pending.md): A status that indicates an app installation awaits the decision of a parent or guardian.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the request status

- [status](status-swift.property.md): A status that indicates the parent or guardian’s decision for the request.
