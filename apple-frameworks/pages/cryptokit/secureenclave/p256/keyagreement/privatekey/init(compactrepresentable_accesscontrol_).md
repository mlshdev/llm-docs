> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/secureenclave/p256/keyagreement/privatekey/init(compactrepresentable:accesscontrol:)

# init(compactRepresentable:accessControl:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** tvOS 13.0+ · watchOS 6.0+

Creates a P-256 private key for key agreement with the specified access control.

## Declaration

```swift
init(compactRepresentable: Bool = true, accessControl: SecAccessControl = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly, [], nil)!) throws
```

## Parameters

- `compactRepresentable`: A Boolean value that indicates whether CryptoKit creates the key with the structure to enable compact point encoding.
- `accessControl`: The protection type and flags to use when creating the associated access control object.
