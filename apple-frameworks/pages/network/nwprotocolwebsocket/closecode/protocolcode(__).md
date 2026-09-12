> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/closecode/protocolcode(_:)](https://developer.apple.com/documentation/network/nwprotocolwebsocket/closecode/protocolcode(_:))

# NWProtocolWebSocket.CloseCode.protocolCode(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A well-known close code reserved by the protocol (values 1000-2999).

## Declaration

```swift
case protocolCode(NWProtocolWebSocket.CloseCode.Defined)
```

## See Also

### Close Code Types

- [init(rawValue:)](init%28rawvalue_%29.md): Initializes a close code with a raw value.
- [NWProtocolWebSocket.CloseCode.Defined](defined.md): Well-known close code values.
- [NWProtocolWebSocket.CloseCode.applicationCode(\_:)](applicationcode%28__%29.md): A close code in the range reserved for applications and frameworks (3000-3999).
- [NWProtocolWebSocket.CloseCode.privateCode(\_:)](privatecode%28__%29.md): A close code in the private-use range (4000-4999).
