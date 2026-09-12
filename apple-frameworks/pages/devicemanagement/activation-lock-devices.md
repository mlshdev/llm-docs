> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/activation-lock-devices](https://developer.apple.com/documentation/devicemanagement/activation-lock-devices)

# Activation Lock a Device

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Enable activation lock on a remote device.

## URL

```http
POST https://mdmenrollment.apple.com/device/activationlock
```

## HTTP Body

Content type: `application/json`

Type: `ActivationLockRequest`

Request enabling activation lock for a device.

## Response Codes

- `200` OK — `ActivationLockStatusResponse`:
- `400` Bad Request: - `MALFORMED_REQUEST_BODY`: The request body is malformed.
  - `USER_AGENT_INVALID:`  The `User-Agent` header is invalid.
  - `USER_AGENT_MISSING:`  The `User-Agent` header is missing or has no assigned value.
- `401` Unauthorized: The token has expired. The client should retry with a new auth token.
- `403` Forbidden: The auth token is invalid.

## Mentioned In

- [Migrating managed devices](migrating-managed-devices.md)

<a id="Discussion"></a>

## Discussion

Find My iPhone Activation Lock is a feature of iCloud and Automated Device Enrollment that makes it harder for anyone to use or resell a lost or stolen device. Activation Lock is a feature of iCloud, and MDM has the ability to allow users to enable the feature on supervised devices.

There are two ways to manage Activation Lock: the Activation Lock request is available for devices that appear in the Apple School Manager portal or Apple Business portal, or the Find My approach. Whichever method is the first to enable Activation Lock takes precedence.

## Topics

### Request and Response

- [ActivationLockRequest](activationlockrequest.md): Request enabling activation lock for a device.
- [ActivationLockStatusResponse](activationlockstatusresponse.md)

### Bypass Codes

- [Creating and using bypass codes](creating-and-using-bypass-codes.md): Maintain the bypass code parameters for disabling Activation Lock.

## See Also

### Device management

- [Get Device Details](device-details.md): Get the details on a set of devices.
- [Get a List of Devices](fetch-devices.md): Get a list of devices that are managed by the server.
- [Sync the List of Devices](sync-devices.md): Get updates about the list of devices the server manages.
- [Disown Devices](disown-devices.md): Notify Apple’s servers that your organization no longer owns the specified devices.
- [Get Replacement Details](get-replacement-details.md): Get information about the device that a replacement device replaces.
- [Get Beta Enrollment Tokens](get-beta-enrollment-tokens.md): Retrieves the beta enrollment tokens available for the organization.
