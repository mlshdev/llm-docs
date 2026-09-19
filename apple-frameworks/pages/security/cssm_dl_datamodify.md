> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_dl_datamodify

# CSSM_DL_DataModify

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DataModify(CSSM_DL_DB_HANDLE DLDBHandle, CSSM_DB_RECORDTYPE RecordType, CSSM_DB_UNIQUE_RECORD_PTR UniqueRecordIdentifier, const CSSM_DB_RECORD_ATTRIBUTE_DATA *AttributesToBeModified, const SecAsn1Item *DataToBeModified, CSSM_DB_MODIFY_MODE ModifyMode);
```
