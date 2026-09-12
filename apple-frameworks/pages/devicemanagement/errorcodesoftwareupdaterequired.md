> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorcodesoftwareupdaterequired](https://developer.apple.com/documentation/devicemanagement/errorcodesoftwareupdaterequired)

# ErrorCodeSoftwareUpdateRequired

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+

An error response that indicates the system requires a software update.

## Declaration

```
object ErrorCodeSoftwareUpdateRequired
```

## Properties

- `code` — `string` (required): Indicates that the device needs to perform a software update before enrollment and setup can proceed.
  **Allowed values:** `com.apple.softwareupdate.required`
- `description` — `string`: A description of the error. Only use this for logging purposes and don’t display it to the user.
- `details` — `ErrorCodeSoftwareUpdateRequired.Details` (required): A dictionary that contains additional data about the error code.
- `message` — `string`: A description of the error to display to the user.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)
- [Returning a managed device to service](returning-a-managed-device-to-service.md)

<a id="Discussion"></a>

## Discussion

The schema for a JSON or property list XML document that an MDM server’s 403 response body contains. The response headers need to include a “Content-Type” header that indicates whether the response returns JSON or XML.

The MDM server returns this response when a device enrolls in MDM during Setup Assistant and it requires the device to perform a software update before it can continue with enrollment and setup.

## Topics

### Objects

- [ErrorCodeSoftwareUpdateRequired.Details](errorcodesoftwareupdaterequired/details-data.dictionary.md): A dictionary that contains additional data about the software update required error code.

## See Also

### Enrollment errors

- [ErrorCodePairingTokenMissing](errorcodepairingtokenmissing.md): An error response that indicates a missing pairing token.
- [ErrorCodePlatformSSORequired](errorcodeplatformssorequired.md): An error response that indicates Platform SSO is required.
- [ErrorUnrecognizedDevice](errorunrecognizeddevice.md): An error response that indicates a device needs to unenroll.
- [ErrorWellKnownFailed](errorwellknownfailed.md): An error response that indicates a well-known service discovery request failed.
