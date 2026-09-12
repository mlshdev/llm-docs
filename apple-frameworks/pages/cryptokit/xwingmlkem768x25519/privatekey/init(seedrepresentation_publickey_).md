> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/xwingmlkem768x25519/privatekey/init(seedrepresentation:publickey:)](https://developer.apple.com/documentation/cryptokit/xwingmlkem768x25519/privatekey/init(seedrepresentation:publickey:))

# init(seedRepresentation:publicKey:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init<D>(seedRepresentation: D, publicKey: XWingMLKEM768X25519.PublicKey?) throws where D : DataProtocol
```

## See Also

### Creating a private key

- [init(integrityCheckedRepresentation:)](init%28integritycheckedrepresentation_%29.md)
