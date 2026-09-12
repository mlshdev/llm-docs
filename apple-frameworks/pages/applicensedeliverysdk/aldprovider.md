> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldprovider](https://developer.apple.com/documentation/applicensedeliverysdk/aldprovider)

# ALDProvider

**Framework:** App License Delivery SDK  
**Kind:** Class

An object that creates a session with the alternative app marketplace’s signing assets.

## Declaration

```swift
class ALDProvider
```

## Mentioned In

- [Licensing alternative distribution apps](licensing-alternative-distribution-apps.md)

## Topics

### Initializers

- [init(encryptionCert:signingCert:PASK:signingKey:)](aldprovider/init%28encryptioncert_signingcert_pask_signingkey_%29.md): Initializes a provider with the marketplace’s App License Delivery assets and their unique signing key.

### Instance Methods

- [createSession(clientRequest:)](aldprovider/createsession%28clientrequest_%29.md): Creates an ALD Session

## See Also

### App licensing

- [Licensing alternative distribution apps](licensing-alternative-distribution-apps.md): Build a license server that supports the installation of your apps and the apps available in your marketplace.
- [Renewing and revoking app licenses](renewing-and-revoking-app-licenses.md): Determine whether an app for which you issue a license launches.
- [ALDAppKey](aldappkey.md): A structure that identifies an app and a key that’s required to decrypt the app’s license request.
- [ALDLicenseAttribute](aldlicenseattribute.md): A structure that defines the requested license type for the session.
- [ALDSession](aldsession.md): A structure that contains the details of a license request and methods to generate license responses.
