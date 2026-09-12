> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorwellknownfailed](https://developer.apple.com/documentation/devicemanagement/errorwellknownfailed)

# ErrorWellKnownFailed

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · visionOS 1.2+

An error response that indicates a well-known service discovery request failed.

## Declaration

```
object ErrorWellKnownFailed
```

## Properties

- `code` — `string` (required): Indicates that the well-known request has failed.
  **Allowed values:** `com.apple.well-known.failed`
- `description` — `string`: A description of the error. Only use this for logging purposes and don’t display it to the user.
- `message` — `string`: A description of the error to display to the user.

<a id="Discussion"></a>

## Discussion

The schema for a JSON or property list XML document that an MDM server’s 403 response body contains. The response headers need to include a “Content-Type” header that indicates whether the response returns JSON or XML.

The MDM server returns this response to reject a well-known service discovery request from a device made during an account driven enrollment.

## See Also

### Enrollment errors

- [ErrorCodePairingTokenMissing](errorcodepairingtokenmissing.md): An error response that indicates a missing pairing token.
- [ErrorCodePlatformSSORequired](errorcodeplatformssorequired.md): An error response that indicates Platform SSO is required.
- [ErrorCodeSoftwareUpdateRequired](errorcodesoftwareupdaterequired.md): An error response that indicates the system requires a software update.
- [ErrorUnrecognizedDevice](errorunrecognizeddevice.md): An error response that indicates a device needs to unenroll.
