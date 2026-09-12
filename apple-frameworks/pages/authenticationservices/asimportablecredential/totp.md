> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/totp](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp)

# ASImportableCredential.TOTP

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type to represent a time-based one-time password generator (TOTP).

## Declaration

```swift
struct TOTP
```

<a id="overview"></a>

## Overview

This type is a representation of `TOTP` as defined in the Credential Exchange Format (CXF) specification.

## Topics

### Accessing TOTP properties

- [secret](totp/secret.md): The secret associated with this generator.
- [period](totp/period.md): The period, in seconds, used by the generator to refresh codes.
- [digits](totp/digits.md): The number of digits in the code used by the generator.
- [algorithm](totp/algorithm-swift.property.md): The algorithm used by the generator.
- [ASImportableCredential.TOTP.Algorithm](totp/algorithm-swift.enum.md): An enumeration of algorithm types that all importers are expected to support.
- [issuer](totp/issuer.md): The issuer of the generator, if any.

### Initializers

- [init(secret:period:digits:userName:algorithm:issuer:)](totp/init%28secret_period_digits_username_algorithm_issuer_%29.md)

### Instance Properties

- [userName](totp/username.md): The user name associated with the generator. When instantiating from JSON, this property will be populated from the “username” field.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Login credential types

- [ASImportableCredential.basicAuthentication(\_:)](basicauthentication%28__%29.md): A password credential.
- [ASImportableCredential.BasicAuthentication](basicauthentication.md): A type to represent a basic authentication password.
- [ASImportableCredential.passkey(\_:)](passkey%28__%29.md): A passkey credential.
- [ASImportableCredential.Passkey](passkey.md): A type to represent a passkey credential.
- [ASImportableCredential.totp(\_:)](totp%28__%29.md): A time-based one-time password (TOTP) credential.
