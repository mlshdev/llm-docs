> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/fetchrecordinfos](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/fetchrecordinfos)

# fetchRecordInfos

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Returns information about a record for which you have a `shortGUID` property.

## Declaration

```
Promise<CloudKit.RecordInfosResponse, CKError> fetchRecordInfos(
	String[] shortGUIDs
);
```

## Parameters

- `shortGUIDs`: One or more short GUIDs that represent records you want to fetch information about.

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.RecordInfosResponse](../cloudkit.recordinfosresponse.md) object, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to show details about a record to a user before asking them to accept a share.

## See Also

### Accepting Shared Records

- [acceptShares](acceptshares.md): Accepts a share—that is represented by a `shortGUID`—on behalf of the current user.
