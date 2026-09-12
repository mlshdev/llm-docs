> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.recordsbatchbuilder/commit](https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordsbatchbuilder/commit)

# commit

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Executes the operations on the database that created this batch builder object.

## Declaration

```
Promise<CloudKit.RecordsResponse, CloudKit.CKError> commit();
```

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a RecordsResponse object if the operation succeeds; otherwise, a [CKError](../cloudkit/ckerror.md) object.
