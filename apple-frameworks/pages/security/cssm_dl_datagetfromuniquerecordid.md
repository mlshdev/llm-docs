> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_dl_datagetfromuniquerecordid](https://developer.apple.com/documentation/security/cssm_dl_datagetfromuniquerecordid)

# CSSM_DL_DataGetFromUniqueRecordId

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DataGetFromUniqueRecordId(CSSM_DL_DB_HANDLE DLDBHandle, const CSSM_DB_UNIQUE_RECORD *UniqueRecord, CSSM_DB_RECORD_ATTRIBUTE_DATA_PTR Attributes, CSSM_DATA_PTR Data);
```
