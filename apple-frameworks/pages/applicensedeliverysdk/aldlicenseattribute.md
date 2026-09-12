> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldlicenseattribute](https://developer.apple.com/documentation/applicensedeliverysdk/aldlicenseattribute)

# ALDLicenseAttribute

**Framework:** App License Delivery SDK  
**Kind:** Structure

A structure that defines the requested license type for the session.

## Declaration

```swift
struct ALDLicenseAttribute
```

## Topics

### Initializers

- [init(licenseID:)](aldlicenseattribute/init%28licenseid_%29.md): Create a license attribue

### Instance Properties

- [duration](aldlicenseattribute/duration.md): The maximum amount of time, in seconds, that iOS considers the license valid.
- [issuedTime](aldlicenseattribute/issuedtime.md)

### Instance Methods

- [addAppKey(\_:)](aldlicenseattribute/addappkey%28__%29.md): Add an AppKey to be associated with this license
- [revokeAppleItemID(\_:)](aldlicenseattribute/revokeappleitemid%28__%29.md): An appleItemID to be revoked by the license

## See Also

### App licensing

- [Licensing alternative distribution apps](licensing-alternative-distribution-apps.md): Build a license server that supports the installation of your apps and the apps available in your marketplace.
- [Renewing and revoking app licenses](renewing-and-revoking-app-licenses.md): Determine whether an app for which you issue a license launches.
- [ALDAppKey](aldappkey.md): A structure that identifies an app and a key that’s required to decrypt the app’s license request.
- [ALDProvider](aldprovider.md): An object that creates a session with the alternative app marketplace’s signing assets.
- [ALDSession](aldsession.md): A structure that contains the details of a license request and methods to generate license responses.
