> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/assetcredentialidentity](https://developer.apple.com/documentation/devicemanagement/assetcredentialidentity)

# AssetCredentialIdentity

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

A reference to a PKCS #12 password-protected identity.

## Declaration

```
object AssetCredentialIdentity
```

## Properties

- `Accessible` — `string`: The keychain accessibility that determines when the keychain item is available for use, which has these allowed values:

  - `Default`: The most restrictive accessibility that still satisfies all uses of the asset by configurations that reference it.
  - `AfterFirstUnlock`: The keychain item is only available after the first unlock of the device.  
  **Default:** `Default`  
  **Allowed values:** `Default`, `AfterFirstUnlock`
- `Authentication` — `AssetCredentialIdentityAuthenticationObject`: The server authentication details. If this key is absent, the default authentication type is MDM.
- `Reference` — `AssetCredentialIdentityReferenceObject` (required): The external reference. Ensure that the asset data:

  - Is a JSON document that represents the `com.apple.credential.identity` credential type
  - Uses a media type of `application/json`, and if it includes a `ContentType` sub-key, that sub-key media type is also `application/json`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.asset.credential.identity` as the declaration type.

<a id="Asset-example"></a>

### Asset example

```json
{
    "Type": "com.apple.asset.credential.identity",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "Reference": {
            "DataURL": "https://example.com/asset-data/certificates/www.example.com.json",
            "ContentType": "application/json"
        }
    }
}
```

## Topics

### Objects

- [AssetCredentialIdentityAuthenticationObject](assetcredentialidentityauthenticationobject.md): The server authentication details. If this key is absent, the default authentication type is MDM.
- [AssetCredentialIdentityReferenceObject](assetcredentialidentityreferenceobject.md): The external reference. Ensure that the asset data:

## See Also

### Assets

- [AssetCredentialACME](assetcredentialacme.md): A reference to an ACME identity.
- [AssetCredentialCertificate](assetcredentialcertificate.md): A reference to one PKCS #1 or PEM encoded certificate.
- [AssetCredentialSCEP](assetcredentialscep.md): A reference to a SCEP identity.
- [AssetCredentialUserNameAndPassword](assetcredentialusernameandpassword.md): A reference to data that describes a credential that represents a user name and password.
- [AssetData](assetdata.md): A reference to arbitrary data with a specific media type.
- [AssetUserIdentity](assetuseridentity.md): The user-identity data.
