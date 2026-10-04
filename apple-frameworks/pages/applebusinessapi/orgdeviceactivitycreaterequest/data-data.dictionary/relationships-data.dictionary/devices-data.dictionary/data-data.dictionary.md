> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/orgdeviceactivitycreaterequest/data-data.dictionary/relationships-data.dictionary/devices-data.dictionary/data-data.dictionary

# OrgDeviceActivityCreateRequest.Data.Relationships.Devices.Data

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.6+

The type and ID of a related resource.

## Declaration

```
object OrgDeviceActivityCreateRequest.Data.Relationships.Devices.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `orgDevices`
