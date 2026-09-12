> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/assetdata](https://developer.apple.com/documentation/devicemanagement/assetdata)

# AssetData

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

A reference to arbitrary data with a specific media type.

## Declaration

```
object AssetData
```

## Properties

- `Authentication` — `AssetDataAuthenticationObject`: The server authentication details. If this key is absent, the default authentication type is MDM.
- `Reference` — `AssetDataReferenceObject` (required): The external reference.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.asset.data` as the declaration type.

<a id="Asset-example"></a>

### Asset example

```json
{
    "Type": "com.apple.asset.data",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "Reference": {
            "DataURL": "https://example.com/asset-data/data/test.txt",
            "ContentType": "text/plain"
        },
        "Authentication": {
            "Type": "MDM"
        }
    }
}
```

## Topics

### Objects

- [AssetDataAuthenticationObject](assetdataauthenticationobject.md): The server authentication details. If this key is absent, the default authentication type is MDM.
- [AssetDataReferenceObject](assetdatareferenceobject.md): The external reference.

## See Also

### Assets

- [AssetCredentialACME](assetcredentialacme.md): A reference to an ACME identity.
- [AssetCredentialCertificate](assetcredentialcertificate.md): A reference to one PKCS #1 or PEM encoded certificate.
- [AssetCredentialIdentity](assetcredentialidentity.md): A reference to a PKCS #12 password-protected identity.
- [AssetCredentialSCEP](assetcredentialscep.md): A reference to a SCEP identity.
- [AssetCredentialUserNameAndPassword](assetcredentialusernameandpassword.md): A reference to data that describes a credential that represents a user name and password.
- [AssetUserIdentity](assetuseridentity.md): The user-identity data.
