> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/protocolname](https://developer.apple.com/documentation/wifiaware/washaredsecret/protocolname)

# WASharedSecret.ProtocolName

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An object that uniquely identifies a particular network protocol and the pairing hanshake it uses for authentication.

## Declaration

```swift
struct ProtocolName
```

## Topics

### Initializers

- [init(\_:)](protocolname/init%28__%29-648hd.md): Creates a custom protocol with the provided unique string.
- [init(\_:)](protocolname/init%28__%29-7marr.md): Creates a custom protocol name using the provided unique string.

### Type Properties

- [ipsecPSK](protocolname/ipsecpsk.md): Derive a shared secret to bootstrap IPSec, using the resulting shared secret as the IPSec Pre-Shared Key.
- [tlsPSK](protocolname/tlspsk.md): Derive a shared secret to bootstrap TLS, using the resulting shared secret as a TLS Pre-Shared Key.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
