> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/totp/digits](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/digits)

# digits

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The number of digits in the code used by the generator.

## Declaration

```swift
var digits: UInt16
```

## See Also

### Accessing TOTP properties

- [secret](secret.md): The secret associated with this generator.
- [period](period.md): The period, in seconds, used by the generator to refresh codes.
- [algorithm](algorithm-swift.property.md): The algorithm used by the generator.
- [ASImportableCredential.TOTP.Algorithm](algorithm-swift.enum.md): An enumeration of algorithm types that all importers are expected to support.
- [issuer](issuer.md): The issuer of the generator, if any.
