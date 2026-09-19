> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_dl_createrelation

# CSSM_DL_CreateRelation

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_CreateRelation(CSSM_DL_DB_HANDLE DLDBHandle, CSSM_DB_RECORDTYPE RelationID, const char *RelationName, uint32 NumberOfAttributes, const CSSM_DB_SCHEMA_ATTRIBUTE_INFO *pAttributeInfo, uint32 NumberOfIndexes, const CSSM_DB_SCHEMA_INDEX_INFO *pIndexInfo);
```
