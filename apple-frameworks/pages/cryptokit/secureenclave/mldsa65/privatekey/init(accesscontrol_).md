> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/secureenclave/mldsa65/privatekey/init(accesscontrol:)

# init(accessControl:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** tvOS 26.0+

## Declaration

```swift
init(accessControl: SecAccessControl = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly, [], nil)!) throws
```
