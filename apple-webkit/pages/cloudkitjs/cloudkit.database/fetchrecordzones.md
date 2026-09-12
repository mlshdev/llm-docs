> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/fetchrecordzones](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/fetchrecordzones)

# fetchRecordZones

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Fetches one or more zones.

## Declaration

```
Promise<CloudKit.RecordZonesResponse, CloudKit.CKError> fetchRecordZones(
	CloudKit.ZoneID|CloudKit.ZoneID[]|String|String[] zones
);
```

## Parameters

- `zones`: Possible values are:

  | Type | Description |
  | --- | --- |
  | [CloudKit.ZoneID](../cloudkit.zoneid.md) | A zone in the database to fetch. |
  | `CloudKit.ZoneID[]` | An array of zones to fetch. |
  | `String` | The name of a zone to fetch. |
  | `String[]` | An array of names of zones to fetch. |

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordZonesResponse](../cloudkit.recordzonesresponse.md) object if the operation succeeds; otherwise, a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

See [Fetching Zones by Identifier (zones/lookup)](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/GettingZonesbyIdentifier.html#//apple_ref/doc/uid/TP40015240-CH22) in [CloudKit Web Services Reference](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/index.html#//apple_ref/doc/uid/TP40015240).

## See Also

### Accessing Record Zones

- [saveRecordZones](saverecordzones.md): Creates one or more zones in the database.
- [fetchAllRecordZones](fetchallrecordzones.md): Fetches all zones in the database.
- [deleteRecordZones](deleterecordzones.md): Deletes the specified zones.
