> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/p256/signing/privatekey/init(compactrepresentable:accesscontrol:)](https://developer.apple.com/documentation/cryptokit/secureenclave/p256/signing/privatekey/init(compactrepresentable:accesscontrol:))

# init(compactRepresentable:accessControl:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** tvOS 13.0+ · watchOS 6.0+

Creates a P-256 private key for signing with the specified access control.

## Declaration

```swift
init(compactRepresentable: Bool = true, accessControl: SecAccessControl = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly, [], nil)!) throws
```

## Parameters

- `compactRepresentable`: A Boolean value that indicates whether CryptoKit creates the key with the structure to enable compact point encoding.
- `accessControl`: The protection type and flags to use when creating the associated access control object.
