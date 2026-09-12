> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/mldsa65/privatekey/init(accesscontrol:authenticationcontext:)](https://developer.apple.com/documentation/cryptokit/secureenclave/mldsa65/privatekey/init(accesscontrol:authenticationcontext:))

# init(accessControl:authenticationContext:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(accessControl: SecAccessControl = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly, [], nil)!, authenticationContext: LAContext? = nil) throws
```
