> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldsession](https://developer.apple.com/documentation/applicensedeliverysdk/aldsession)

# ALDSession

**Framework:** App License Delivery SDK  
**Kind:** Class

A structure that contains the details of a license request and methods to generate license responses.

## Declaration

```swift
class ALDSession
```

## Mentioned In

- [Licensing alternative distribution apps](licensing-alternative-distribution-apps.md)
- [Renewing and revoking app licenses](renewing-and-revoking-app-licenses.md)

## Topics

### Initializers

- [init(request:PASK:encryptionCert:signingCert:signingKey:)](aldsession/init%28request_pask_encryptioncert_signingcert_signingkey_%29.md): Initialize a ALDSession with a license request. Call generateLicense() to create a license.
- [init(signingCert:signingKey:PASK:)](aldsession/init%28signingcert_signingkey_pask_%29.md): Initialize a static ALDSession without a request. This should only be used when an offline generation of a static license is desired. A static license is a minimal license that is only used to install apps on the device and is not meant to enforce marketplace defined rights. Only generateStaticLicense() should be invoked to generate licenses in this case.

### Instance Properties

- [requestAction](aldsession/requestaction.md): action specified in this request
- [requestDeviceID](aldsession/requestdeviceid.md): the device ID of the requested device
- [requestID](aldsession/requestid.md): requestID of the session
- [requestTime](aldsession/requesttime.md): the client time when the request was made
- [requestVersion](aldsession/requestversion.md): request version number
- [requestedAppleItemIDList](aldsession/requestedappleitemidlist.md): An array of identifiers for apps that iOS requests a license request for in the session.
- [requestedLicenseIDList](aldsession/requestedlicenseidlist.md): the list of license ID the client has requested a renwal for. used only when action is “renew”
- [sessionType](aldsession/sessiontype.md): the current session type

### Instance Methods

- [finalizeLicenseResponse(licenseResponse:signature:)](aldsession/finalizelicenseresponse%28licenseresponse_signature_%29.md): Returns a signed license in a byte array to send in response to a license request from iOS.
- [generateLicense(attr:)](aldsession/generatelicense%28attr_%29.md): Generates a license based on the provided ALDLicenseAttribute and add it to the session. Multiple licenses can be generated in this session by callling this function multiple times, they get added to the session response.
- [generateLicenseResponse()](aldsession/generatelicenseresponse%28%29.md): Generates a license response. This method produces a license response, in a bytes array. The response is not yet signed.
- [generateStaticLicense(licenseID:appKey:)](aldsession/generatestaticlicense%28licenseid_appkey_%29.md): Generates a static license based on the provided ALDLicenseAttribute. This method produces a static license, in a bytes array. A static license is a minimal license that is only used to install apps on the device and is not meant to enforce marketplace defined rights.

### Enumerations

- [ALDSession.ALDLicenseAction](aldsession/aldlicenseaction.md): The action requested in the license request or provided in the response to one.
- [ALDSession.ALDSessionType](aldsession/aldsessiontype.md): The type of the license session created. A normalSession is used for a session created with a license request. A staticSession is used for session created without a license request

## See Also

### App licensing

- [Licensing alternative distribution apps](licensing-alternative-distribution-apps.md): Build a license server that supports the installation of your apps and the apps available in your marketplace.
- [Renewing and revoking app licenses](renewing-and-revoking-app-licenses.md): Determine whether an app for which you issue a license launches.
- [ALDAppKey](aldappkey.md): A structure that identifies an app and a key that’s required to decrypt the app’s license request.
- [ALDLicenseAttribute](aldlicenseattribute.md): A structure that defines the requested license type for the session.
- [ALDProvider](aldprovider.md): An object that creates a session with the alternative app marketplace’s signing assets.
