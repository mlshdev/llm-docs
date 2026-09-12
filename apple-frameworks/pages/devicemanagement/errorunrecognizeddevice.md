> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorunrecognizeddevice](https://developer.apple.com/documentation/devicemanagement/errorunrecognizeddevice)

# ErrorUnrecognizedDevice

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

An error response that indicates a device needs to unenroll.

## Declaration

```
object ErrorUnrecognizedDevice
```

## Properties

- `code` — `string` (required): Indicates that the device isn’t recognized by the server. This causes the device to unenroll from MDM.
  **Allowed values:** `com.apple.unrecognized.device`
- `description` — `string`: A description of the error. Only use this for logging purposes and don’t display it to the user.
- `message` — `string`: A description of the error to display to the user.

<a id="Discussion"></a>

## Discussion

The schema for a JSON or property list XML document that an MDM server’s 403 response body contains. The response headers need to include a “Content-Type” header that indicates whether the response returns JSON or XML.

The MDM server returns this response when it doesn’t recognize the device making the request. This causes the device to unenroll from the MDM server. Use this error instead of the server returning a 401 response to cause an unenroll.

## See Also

### Enrollment errors

- [ErrorCodePairingTokenMissing](errorcodepairingtokenmissing.md): An error response that indicates a missing pairing token.
- [ErrorCodePlatformSSORequired](errorcodeplatformssorequired.md): An error response that indicates Platform SSO is required.
- [ErrorCodeSoftwareUpdateRequired](errorcodesoftwareupdaterequired.md): An error response that indicates the system requires a software update.
- [ErrorWellKnownFailed](errorwellknownfailed.md): An error response that indicates a well-known service discovery request failed.
