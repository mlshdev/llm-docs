> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/assetcredentialusernameandpassword](https://developer.apple.com/documentation/devicemanagement/assetcredentialusernameandpassword)

# AssetCredentialUserNameAndPassword

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

A reference to data that describes a credential that represents a user name and password.

## Declaration

```
object AssetCredentialUserNameAndPassword
```

## Properties

- `Authentication` — `AssetCredentialUserNameAndPasswordAuthenticationObject`: The server authentication details. If this key is absent, the default authentication type is MDM.

  Available: iOS 17+ | iPadOS 17+ | macOS 14+ | tvOS 17+ | visionOS 1.1+ | watchOS 10+
- `Reference` — `AssetCredentialUserNameAndPasswordReferenceObject` (required): The external reference. Ensure that the asset data:

  - Is a JSON document that represents the `com.apple.credential.usernameandpassword` credential type
  - Uses a media type of `application/json`, and if it includes a `ContentType` sub-key, that sub-key media type is also `application/json`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.asset.credential.userpassword` as the declaration type.

<a id="Asset-example"></a>

### Asset example

```json
{
    "Type": "com.apple.asset.credential.userpassword",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "Reference": {
            "DataURL": "https://example.com/asset-data/credential.json",
            "ContentType": "application/json"
        }
    }
}
```

## Topics

### Objects

- [AssetCredentialUserNameAndPasswordAuthenticationObject](assetcredentialusernameandpasswordauthenticationobject.md): The server authentication details. If this key is absent, the default authentication type is MDM.
- [AssetCredentialUserNameAndPasswordReferenceObject](assetcredentialusernameandpasswordreferenceobject.md): The external reference. Ensure that the asset data:

## See Also

### Assets

- [AssetCredentialACME](assetcredentialacme.md): A reference to an ACME identity.
- [AssetCredentialCertificate](assetcredentialcertificate.md): A reference to one PKCS #1 or PEM encoded certificate.
- [AssetCredentialIdentity](assetcredentialidentity.md): A reference to a PKCS #12 password-protected identity.
- [AssetCredentialSCEP](assetcredentialscep.md): A reference to a SCEP identity.
- [AssetData](assetdata.md): A reference to arbitrary data with a specific media type.
- [AssetUserIdentity](assetuseridentity.md): The user-identity data.
