> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clear-device-profile](https://developer.apple.com/documentation/devicemanagement/clear-device-profile)

# Remove a Profile

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Remove a profile from a list of devices.

## URL

```http
DELETE https://mdmenrollment.apple.com/profile/devices
```

## HTTP Body

Content type: `application/json`

Type: `ClearProfileRequest`

The request used to remove a profile from devices.

## Response Codes

- `200` OK — `ClearProfileResponse`:
- `400` Bad Request: - `DEVICE_ID_REQUIRED`: The request did not contain any device IDs.
  - `USER_AGENT_INVALID:`  The `User-Agent` header is invalid.
  - `USER_AGENT_MISSING:`  The `User-Agent` header is missing or has no assigned value.

<a id="Discussion"></a>

## Discussion

After this call, the devices in the list will have no profiles associated with them. However, if those devices have already obtained the profile, this has no effect until the device is wiped and activated again.

## Topics

### Request and Response

- [ClearProfileRequest](clearprofilerequest.md): The request used to remove a profile from devices.
- [ClearProfileResponse](clearprofileresponse.md)
- [ClearProfileResponse.Devices](clearprofileresponse/devices-data.dictionary.md)

## See Also

### Profile management

- [Define a Profile](define-profile.md): Define a profile that can be distributed to the devices in your organization.
- [Get a Profile](fetch-profile.md): Get details about a profile.
- [Assign a Profile](assign-profile.md): Assign a profile to a list of devices.
