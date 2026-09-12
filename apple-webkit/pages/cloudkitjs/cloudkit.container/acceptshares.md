> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/acceptshares](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/acceptshares)

# acceptShares

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Accepts a share—that is represented by a `shortGUID`—on behalf of the current user.

## Declaration

```
Promise<CloudKit.RecordInfosResponse, CKError> acceptShares(
	String[] shortGUIDs
);
```

## Parameters

- `shortGUIDs`: One or more short GUIDs that represent shared records.

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordInfosResponse](../cloudkit.recordinfosresponse.md) object, or rejects to a [CKError](../cloudkit/ckerror.md) object.

## See Also

### Accepting Shared Records

- [fetchRecordInfos](fetchrecordinfos.md): Returns information about a record for which you have a `shortGUID` property.
