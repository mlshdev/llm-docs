> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/profileservicerequest

# ProfileServiceRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The request for assigning a profile to a set of devices.

## Declaration

```
object ProfileServiceRequest
```

## Properties

- `devices` — `[string]`: Array of strings that contains device serial numbers.
- `profile_uuid` — `string`: The unique identifier for a profile.

## See Also

### Request and Response

- [AssignProfileResponse](assignprofileresponse.md)
- [AssignProfileResponse.Devices](assignprofileresponse/devices-data.dictionary.md)
