> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_dl_datainsert

# CSSM_DL_DataInsert

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DataInsert(CSSM_DL_DB_HANDLE DLDBHandle, CSSM_DB_RECORDTYPE RecordType, const CSSM_DB_RECORD_ATTRIBUTE_DATA *Attributes, const SecAsn1Item *Data, CSSM_DB_UNIQUE_RECORD_PTR*UniqueId);
```
