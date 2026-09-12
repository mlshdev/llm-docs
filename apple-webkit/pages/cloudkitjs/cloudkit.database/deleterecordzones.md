> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/deleterecordzones](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/deleterecordzones)

# deleteRecordZones

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Deletes the specified zones.

## Declaration

```
Promise<CloudKit.RecordZonesResponse, CloudKit.CKError> deleteRecordZones(
	CloudKit.ZoneID|CloudKit.ZoneID[]|String|String[] zones
);
```

## Parameters

- `zones`: Possible values are:

  | Type | Description |
  | --- | --- |
  | [CloudKit.ZoneID](../cloudkit.zoneid.md) | A zone in the database to delete. |
  | `CloudKit.ZoneID[]` | An array of zones to delete. |
  | `String` | The name of a zone to delete. |
  | `String[]` | An array of names of zones to delete. |

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordZonesResponse](../cloudkit.recordzonesresponse.md) object if the operation succeeds; otherwise, a [CKError](../cloudkit/ckerror.md) object.

## See Also

### Accessing Record Zones

- [saveRecordZones](saverecordzones.md): Creates one or more zones in the database.
- [fetchRecordZones](fetchrecordzones.md): Fetches one or more zones.
- [fetchAllRecordZones](fetchallrecordzones.md): Fetches all zones in the database.
