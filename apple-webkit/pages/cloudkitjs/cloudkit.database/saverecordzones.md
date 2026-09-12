> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/saverecordzones](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/saverecordzones)

# saveRecordZones

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Creates one or more zones in the database.

## Declaration

```
Promise<CloudKit.RecordZonesResponse, CloudKit.CKError> saveRecordZones(
	CloudKit.ZoneID|CloudKit.ZoneID[]|String|String[] zones
);
```

## Parameters

- `zones`: Possible values are:

  | Type | Description |
  | --- | --- |
  | [CloudKit.ZoneID](../cloudkit.zoneid.md) | A zone in the database to save. |
  | `CloudKit.ZoneID[]` | An array of zones to save. |
  | `String` | The name of a zone to save. |
  | `String[]` | An array of names of zones to save. |

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordZonesResponse](../cloudkit.recordzonesresponse.md) object if the operation succeeds; otherwise, a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

See [Modifying Zones (zones/modify)](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/ModifyZones.html#//apple_ref/doc/uid/TP40015240-CH10) in [CloudKit Web Services Reference](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/index.html#//apple_ref/doc/uid/TP40015240).

## See Also

### Accessing Record Zones

- [fetchRecordZones](fetchrecordzones.md): Fetches one or more zones.
- [fetchAllRecordZones](fetchallrecordzones.md): Fetches all zones in the database.
- [deleteRecordZones](deleterecordzones.md): Deletes the specified zones.
