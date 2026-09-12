> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/assetcredentialacme](https://developer.apple.com/documentation/devicemanagement/assetcredentialacme)

# AssetCredentialACME

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

A reference to an ACME identity.

## Declaration

```
object AssetCredentialACME
```

## Properties

- `Accessible` — `string`: The keychain accessibility that determines when the keychain item is available for use, which has these allowed values:

  - `Default`: The most restrictive accessibility that still satisfies all uses of the asset by configurations that reference it.
  - `AfterFirstUnlock`: The keychain item is only available after the first unlock of the device.  
  **Default:** `Default`  
  **Allowed values:** `Default`, `AfterFirstUnlock`
- `Authentication` — `AssetCredentialACMEAuthenticationObject`: The server authentication details. If this key is absent, the default authentication type is MDM.
- `Reference` — `AssetCredentialACMEReferenceObject` (required): The external reference. Ensure that the asset data:

  - Is a JSON document that represents the `com.apple.credential.acme` credential type
  - Uses a media type of `application/json`, and if it includes a `ContentType` sub-key, that sub-key media type is also `application/json`

## Mentioned In

- [Validating a Managed Device Attestation](validating-a-managed-device-attestation-attestation.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.asset.credential.acme` as the declaration type.

<a id="Asset-example"></a>

### Asset example

```json
{
    "Type": "com.apple.asset.credential.acme",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "Reference": {
            "DataURL": "https://example.com/asset-data/certificates/security_acme.json",
            "ContentType": "application/json"
        }
    }
}
```

## Topics

### Objects

- [AssetCredentialACMEAuthenticationObject](assetcredentialacmeauthenticationobject.md): The server authentication details. If this key is absent, the default authentication type is MDM.
- [AssetCredentialACMEReferenceObject](assetcredentialacmereferenceobject.md): The external reference. Ensure that the asset data:

## See Also

### Assets

- [AssetCredentialCertificate](assetcredentialcertificate.md): A reference to one PKCS #1 or PEM encoded certificate.
- [AssetCredentialIdentity](assetcredentialidentity.md): A reference to a PKCS #12 password-protected identity.
- [AssetCredentialSCEP](assetcredentialscep.md): A reference to a SCEP identity.
- [AssetCredentialUserNameAndPassword](assetcredentialusernameandpassword.md): A reference to data that describes a credential that represents a user name and password.
- [AssetData](assetdata.md): A reference to arbitrary data with a specific media type.
- [AssetUserIdentity](assetuseridentity.md): The user-identity data.
