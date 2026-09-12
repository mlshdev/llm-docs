> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/p256/signing/privatekey/init(datarepresentation:authenticationcontext:)](https://developer.apple.com/documentation/cryptokit/secureenclave/p256/signing/privatekey/init(datarepresentation:authenticationcontext:))

# init(dataRepresentation:authenticationContext:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 9.0+

Creates a P-256 private key for signing from a data representation of the key with the given authentication context.

## Declaration

```swift
init(dataRepresentation: Data, authenticationContext: LAContext? = nil) throws
```

## Parameters

- `dataRepresentation`: A data representation of the key.
- `authenticationContext`: A local authentication context.

## See Also

### Creating a private key

- [init(compactRepresentable:accessControl:authenticationContext:)](init%28compactrepresentable_accesscontrol_authenticationcontext_%29.md): Creates a P-256 private key for signing with the specified access control.
