> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcendpoint](https://developer.apple.com/documentation/xpc/xpcendpoint)

# XPCEndpoint

**Framework:** XPC  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

A connection in serialized form.

## Declaration

```swift
struct XPCEndpoint
```

<a id="overview"></a>

## Overview

An `XPCEndpoint` can be passed around in an XPC message. The recipient of `XPCEndpoint` can use [init(endpoint:targetQueue:options:cancellationHandler:)](xpcsession/init%28endpoint_targetqueue_options_cancellationhandler_%29.md) to create as many distinct sessions as desired.

Unlike a connection, the endpoint is an inert object that does not have any runtime activity associated with it.

## Topics

### Initializers

- [init(\_:)](xpcendpoint/init%28__%29.md): Copy-initialize from a C endpoint object.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
