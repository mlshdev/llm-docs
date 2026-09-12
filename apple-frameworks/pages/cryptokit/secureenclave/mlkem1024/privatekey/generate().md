> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/mlkem1024/privatekey/generate()](https://developer.apple.com/documentation/cryptokit/secureenclave/mlkem1024/privatekey/generate())

# generate()

**Framework:** Apple CryptoKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Generates a new random private key.

## Declaration

```swift
static func generate() throws -> SecureEnclave.MLKEM1024.PrivateKey
```

<a id="return-value"></a>

## Return Value

The generated private key

<a id="discussion"></a>

## Discussion

This method implements the required interface for the KEMPrivateKey extension, in this case invoking the initializer with a default SecAccessControl and no LAContext.

## See Also

### Creating a private key

- [init(accessControl:authenticationContext:)](init%28accesscontrol_authenticationcontext_%29.md)
- [init(dataRepresentation:authenticationContext:)](init%28datarepresentation_authenticationcontext_%29.md)
