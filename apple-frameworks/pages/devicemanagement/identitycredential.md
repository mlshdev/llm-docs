> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/identitycredential

# IdentityCredential

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

The data for a PKCS #12 password-protected identity.

## Declaration

```
object IdentityCredential
```

## Properties

- `Identity` — `string` (required): The PKCS #12 identity data.
- `Password` — `string` (required): The password required to decrypt the PKCS #12 identity data.

## See Also

### Credentials

- [ACMECredential](acmecredential.md): An ACME identity that the device generates.
- [SCEPCredential](scepcredential.md): A SCEP identity that the device generates.
- [UserNameAndPasswordCredential](usernameandpasswordcredential.md): Data that describes a credential that represents a user name and password.
