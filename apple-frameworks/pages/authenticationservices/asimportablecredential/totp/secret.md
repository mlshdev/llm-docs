> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/totp/secret](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/secret)

# secret

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The secret associated with this generator.

## Declaration

```swift
var secret: Data
```

<a id="discussion"></a>

## Discussion

This value must be Base32-encoded when encoded to JSON.

## See Also

### Accessing TOTP properties

- [period](period.md): The period, in seconds, used by the generator to refresh codes.
- [digits](digits.md): The number of digits in the code used by the generator.
- [algorithm](algorithm-swift.property.md): The algorithm used by the generator.
- [ASImportableCredential.TOTP.Algorithm](algorithm-swift.enum.md): An enumeration of algorithm types that all importers are expected to support.
- [issuer](issuer.md): The issuer of the generator, if any.
