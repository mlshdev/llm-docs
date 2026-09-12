> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/invalidormissingauthorizationdata](https://developer.apple.com/documentation/homekit/hmerror/invalidormissingauthorizationdata)

# invalidOrMissingAuthorizationData

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An error indicating the authorization data is invalid or missing.

## Declaration

```swift
static var invalidOrMissingAuthorizationData: HMError.Code { get }
```

## See Also

### Detecting authorization errors

- [locationForHomeDisabled](locationforhomedisabled.md): An error indicating the home’s location is disabled.
- [homeAccessNotAuthorized](homeaccessnotauthorized.md): An error indicating access to the home is not authorized.
- [insufficientPrivileges](insufficientprivileges.md): An error indicating insufficient privileges for the operation.
- [messageAuthenticationFailed](messageauthenticationfailed.md): A message authentication failure.
- [notAuthorizedForLocationServices](notauthorizedforlocationservices.md): An error indicating location services are not authorized.
- [notAuthorizedForMicrophoneAccess](notauthorizedformicrophoneaccess.md): An error indicating microphone access is not authorized.
- [notSignedIntoiCloud](notsignedintoicloud.md): An error indicating the user is not signed into iCloud.
- [ownershipFailure](ownershipfailure.md): The ownership code did not match.
- [securityFailure](securityfailure.md): A security failure.
