> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/assetuseridentity](https://developer.apple.com/documentation/devicemanagement/assetuseridentity)

# AssetUserIdentity

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The user-identity data.

## Declaration

```
object AssetUserIdentity
```

## Properties

- `EmailAddress` — `string`: The email address of the user.
- `FullName` — `string`: The user’s full name.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.asset.useridentity` as the declaration type.

<a id="Asset-example"></a>

### Asset example

```json
{
  "Type": "com.apple.asset.useridentity",
  "Identifier": "CB3E6C7F-2318-437B-8A9E-D50C69376DE4",
  "ServerToken": "F25C68F6-D2E5-4A09-9170-F21E8FAD6A2F",
  "Payload": {
    "FullName": "A User",
    "EmailAddress": "a.user@example.com"
  }
}
```

## See Also

### Assets

- [AssetCredentialACME](assetcredentialacme.md): A reference to an ACME identity.
- [AssetCredentialCertificate](assetcredentialcertificate.md): A reference to one PKCS #1 or PEM encoded certificate.
- [AssetCredentialIdentity](assetcredentialidentity.md): A reference to a PKCS #12 password-protected identity.
- [AssetCredentialSCEP](assetcredentialscep.md): A reference to a SCEP identity.
- [AssetCredentialUserNameAndPassword](assetcredentialusernameandpassword.md): A reference to data that describes a credential that represents a user name and password.
- [AssetData](assetdata.md): A reference to arbitrary data with a specific media type.
