> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.record/created](https://developer.apple.com/documentation/cloudkitjs/cloudkit.record/created)

# created

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Information about when the record was created on the server. The properties of this object are: `timestamp` (`Number`), the time at which the record was created, and `user` (`String`), the ID of the user who created the record. This field is used by the [CloudKit.RecordsResponse](../cloudkit.recordsresponse.md) class. The value of this field is set by the server. Omit this key when saving a record.

## Declaration

```
attribute Object created;
```
