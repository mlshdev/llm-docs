> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/totp/period](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/period)

# period

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The period, in seconds, used by the generator to refresh codes.

## Declaration

```swift
var period: UInt16
```

## See Also

### Accessing TOTP properties

- [secret](secret.md): The secret associated with this generator.
- [digits](digits.md): The number of digits in the code used by the generator.
- [algorithm](algorithm-swift.property.md): The algorithm used by the generator.
- [ASImportableCredential.TOTP.Algorithm](algorithm-swift.enum.md): An enumeration of algorithm types that all importers are expected to support.
- [issuer](issuer.md): The issuer of the generator, if any.
