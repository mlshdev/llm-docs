> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/usernameandpasswordcredential](https://developer.apple.com/documentation/devicemanagement/usernameandpasswordcredential)

# UserNameAndPasswordCredential

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Data that describes a credential that represents a user name and password.

## Declaration

```
object UserNameAndPasswordCredential
```

## Properties

- `Password` — `string`: The password for this credential.
- `UserName` — `string` (required): The user name for this credential.

## See Also

### Credentials

- [ACMECredential](acmecredential.md): An ACME identity that the device generates.
- [IdentityCredential](identitycredential.md): The data for a PKCS #12 password-protected identity.
- [SCEPCredential](scepcredential.md): A SCEP identity that the device generates.
