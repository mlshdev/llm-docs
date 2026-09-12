> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/totp/algorithm-swift.property](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/algorithm-swift.property)

# algorithm

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The algorithm used by the generator.

## Declaration

```swift
var algorithm: ASImportableCredential.TOTP.Algorithm
```

<a id="discussion"></a>

## Discussion

This value must be one of [ASImportableCredential.TOTP.Algorithm.sha1](algorithm-swift.enum/sha1.md), [ASImportableCredential.TOTP.Algorithm.sha256](algorithm-swift.enum/sha256.md), or [ASImportableCredential.TOTP.Algorithm.sha512](algorithm-swift.enum/sha512.md).

## See Also

### Accessing TOTP properties

- [secret](secret.md): The secret associated with this generator.
- [period](period.md): The period, in seconds, used by the generator to refresh codes.
- [digits](digits.md): The number of digits in the code used by the generator.
- [ASImportableCredential.TOTP.Algorithm](algorithm-swift.enum.md): An enumeration of algorithm types that all importers are expected to support.
- [issuer](issuer.md): The issuer of the generator, if any.
