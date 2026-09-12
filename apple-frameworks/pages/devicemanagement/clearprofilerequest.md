> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clearprofilerequest](https://developer.apple.com/documentation/devicemanagement/clearprofilerequest)

# ClearProfileRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The request used to remove a profile from devices.

## Declaration

```
object ClearProfileRequest
```

## Properties

- `devices` — `[string]`: An array of strings containing device serial numbers.
- `profile_uuid` — `string`: The unique identifier for a profile.

## See Also

### Request and Response

- [ClearProfileResponse](clearprofileresponse.md)
- [ClearProfileResponse.Devices](clearprofileresponse/devices-data.dictionary.md)
