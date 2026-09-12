> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainpromptselector](https://developer.apple.com/documentation/security/seckeychainpromptselector)

# SecKeychainPromptSelector (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** macOS 10.0+

Bits that define when a keychain should require a passphrase.

## Declaration

```swift
struct SecKeychainPromptSelector
```

## Topics

### Constants

- [requirePassphase](seckeychainpromptselector/requirepassphase.md): Indicates that a passphrase should be required for every access.
- [unsigned](seckeychainpromptselector/unsigned.md): Indicates that a passphrase should be required when an unsigned application attempts to use the keychain, overriding the system default.
- [unsignedAct](seckeychainpromptselector/unsignedact.md): Indicates that a passphrase should be required when an unsigned application attempts to use the keychain.
- [invalid](seckeychainpromptselector/invalid.md): Indicates that a passphrase should be required when an application with an invalid signature attempts to use the keychain, overriding the system default.
- [invalidAct](seckeychainpromptselector/invalidact.md): Indicates that a passphrase should be required when an application with an invalid signature attempts to use the keychain.

### Initializers

- [init(rawValue:)](seckeychainpromptselector/init%28rawvalue_%29.md): Initializes a keychain prompt selector.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecKeychainPromptSelector (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Bits that define when a keychain should require a passphrase.

## Declaration

```objectivec
enum SecKeychainPromptSelector : uint16;
```

## Topics

### Constants

- [kSecKeychainPromptRequirePassphase](seckeychainpromptselector/requirepassphase.md): Indicates that a passphrase should be required for every access.
- [kSecKeychainPromptUnsigned](seckeychainpromptselector/unsigned.md): Indicates that a passphrase should be required when an unsigned application attempts to use the keychain, overriding the system default.
- [kSecKeychainPromptUnsignedAct](seckeychainpromptselector/unsignedact.md): Indicates that a passphrase should be required when an unsigned application attempts to use the keychain.
- [kSecKeychainPromptInvalid](seckeychainpromptselector/invalid.md): Indicates that a passphrase should be required when an application with an invalid signature attempts to use the keychain, overriding the system default.
- [kSecKeychainPromptInvalidAct](seckeychainpromptselector/invalidact.md): Indicates that a passphrase should be required when an application with an invalid signature attempts to use the keychain.
