> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorcodeplatformssorequired](https://developer.apple.com/documentation/devicemanagement/errorcodeplatformssorequired)

# ErrorCodePlatformSSORequired

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

An error response that indicates Platform SSO is required.

## Declaration

```
object ErrorCodePlatformSSORequired
```

## Properties

- `code` — `string` (required): Indicates that the device needs to do Platform SSO before enrollment and setup can proceed.
  **Allowed values:** `com.apple.psso.required`
- `description` — `string`: A description of the error. Only use this for logging purposes and don’t display it to the user.
- `details` — `ErrorCodePlatformSSORequired.Details` (required): A dictionary that contains additional data about the error code.
- `message` — `string`: A description of the error to display to the user.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

The schema for a JSON or property list XML document that an MDM server’s 403 response body contains. The response headers need to include a “Content-Type” header that indicates whether the response returns JSON or XML.

The MDM server returns this response when a device enrolls in MDM during Setup Assistant and it requires the user to sign-in using Platform SSO before it allows enrollment and setup to proceed.

## Topics

### Objects

- [ErrorCodePlatformSSORequired.Details](errorcodeplatformssorequired/details-data.dictionary.md): A dictionary that contains additional data about the error code.

## See Also

### Enrollment errors

- [ErrorCodePairingTokenMissing](errorcodepairingtokenmissing.md): An error response that indicates a missing pairing token.
- [ErrorCodeSoftwareUpdateRequired](errorcodesoftwareupdaterequired.md): An error response that indicates the system requires a software update.
- [ErrorUnrecognizedDevice](errorunrecognizeddevice.md): An error response that indicates a device needs to unenroll.
- [ErrorWellKnownFailed](errorwellknownfailed.md): An error response that indicates a well-known service discovery request failed.
