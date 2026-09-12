> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/sharewithui](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/sharewithui)

# shareWithUI

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Presents a UI to the user which lets them share a record with other users.

## Declaration

```
Promise<CloudKit.SharingUIResult, CloudKit.CKError> shareWithUI(
	Object options
);
```

## Parameters

- `options`: A dictionary containing options for the share UI:

  | Key | Description |
  | --- | --- |
  | `record` | The [CloudKit.Record](../cloudkit.record.md) object that is being shared. |
  | `zoneID` | A [CloudKit.ZoneID](../cloudkit.zoneid.md) or zone name (`String`) that identifies the record zone in the database where you want to perform the operation. The default is the database default zone. This property is required. |
  | `shareTitle` | The title (`String`) of the share. |
  | `shareType` | The type (`String`) of the share. |
  | `shareThumbnail` | A thumbnail (`String`) representing the share. |
  | `supportedAccess` | The supported participant access to the share. An array of `String` objects with values `PRIVATE` or `PUBLIC`. |
  | `supportedPermissions` | The supported read-write permissions for the share. An array of `String` objects with values `READ_WRITE` or `READ_ONLY`. |

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to an object that represents the share record, or rejects to a [CKError](../cloudkit/ckerror.md) object.
