> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolwebsocket/closecode/applicationcode(_:)

# NWProtocolWebSocket.CloseCode.applicationCode(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A close code in the range reserved for applications and frameworks (3000-3999).

## Declaration

```swift
case applicationCode(UInt16)
```

## See Also

### Close Code Types

- [init(rawValue:)](init%28rawvalue_%29.md): Initializes a close code with a raw value.
- [NWProtocolWebSocket.CloseCode.protocolCode(\_:)](protocolcode%28__%29.md): A well-known close code reserved by the protocol (values 1000-2999).
- [NWProtocolWebSocket.CloseCode.Defined](defined.md): Well-known close code values.
- [NWProtocolWebSocket.CloseCode.privateCode(\_:)](privatecode%28__%29.md): A close code in the private-use range (4000-4999).
