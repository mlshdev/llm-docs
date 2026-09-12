> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/activitydetail/changes-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/activitydetail/changes-data.dictionary)

# ActivityDetail.Changes

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single field change entry, capturing the field name and its before and after values.

## Declaration

```
object ActivityDetail.Changes
```

## Properties

- `field` — `string`: The API field name that changed. Read-only.
- `oldValues` — `[string]`: Values before the change, as strings. Empty for `CREATE` events. Read-only.
- `newValues` — `[string]`: Values after the change, as strings. Empty for `DELETE` events. Read-only.

<a id="Discussion"></a>

## Discussion

Each entry in the `changes` array describes a single field that changed during the activity.

<a id="Example"></a>

### Example

```json
{
  "field": "status",
  "oldValues": ["PAUSED"],
  "newValues": ["ENABLED"]
}
```

The `changes` field is the array field on the parent [ActivityDetail](../activitydetail.md) object: `ChangeDetails` holds a `details` array of `ActivityDetail` objects, and each `ActivityDetail` groups the field-level changes that share a common activity context in this `changes` array.
