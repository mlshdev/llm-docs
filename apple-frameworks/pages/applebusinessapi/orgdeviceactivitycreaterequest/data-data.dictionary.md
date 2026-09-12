> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/orgdeviceactivitycreaterequest/data-data.dictionary](https://developer.apple.com/documentation/applebusinessapi/orgdeviceactivitycreaterequest/data-data.dictionary)

# OrgDeviceActivityCreateRequest.Data

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data element of the request body.

## Declaration

```
object OrgDeviceActivityCreateRequest.Data
```

## Properties

- `attributes` — `OrgDeviceActivityCreateRequest.Data.Attributes` (required): The resource’s attributes.
- `relationships` — `OrgDeviceActivityCreateRequest.Data.Relationships` (required): The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `orgDeviceActivities`

## Topics

### Dictionaries

- [OrgDeviceActivityCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes with values that you’re changing as part of the create request.
- [OrgDeviceActivityCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request, and those that you can operate on.
