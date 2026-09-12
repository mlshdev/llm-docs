> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/mlkem1024/privatekey/init(accesscontrol:authenticationcontext:)](https://developer.apple.com/documentation/cryptokit/secureenclave/mlkem1024/privatekey/init(accesscontrol:authenticationcontext:))

# init(accessControl:authenticationContext:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(accessControl: SecAccessControl = SecAccessControlCreateWithFlags(nil, kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly, [], nil)!, authenticationContext: LAContext? = nil) throws
```

## See Also

### Creating a private key

- [generate()](generate%28%29.md): Generates a new random private key.
- [init(dataRepresentation:authenticationContext:)](init%28datarepresentation_authenticationcontext_%29.md)
