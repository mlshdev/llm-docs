> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnectiongroup/message/init(identifier:expiration:priority:isfinal:antecedent:metadata:)](https://developer.apple.com/documentation/network/nwconnectiongroup/message/init(identifier:expiration:priority:isfinal:antecedent:metadata:))

# init(identifier:expiration:priority:isFinal:antecedent:metadata:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a custom message context you use to send data.

## Declaration

```swift
override init(identifier: String, expiration: UInt64 = super, priority: Double = super, isFinal: Bool = super, antecedent: NWConnection.ContentContext? = nil, metadata: [NWProtocolMetadata]? = super)
```

## See Also

### Sending Messages

- [default](default.md): A static object you use to send a message with default properties.
