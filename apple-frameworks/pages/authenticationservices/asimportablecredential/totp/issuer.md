> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/issuer

# issuer

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The issuer of the generator, if any.

## Declaration

```swift
var issuer: String?
```

## See Also

### Accessing TOTP properties

- [secret](secret.md): The secret associated with this generator.
- [period](period.md): The period, in seconds, used by the generator to refresh codes.
- [digits](digits.md): The number of digits in the code used by the generator.
- [algorithm](algorithm-swift.property.md): The algorithm used by the generator.
- [ASImportableCredential.TOTP.Algorithm](algorithm-swift.enum.md): An enumeration of algorithm types that all importers are expected to support.
