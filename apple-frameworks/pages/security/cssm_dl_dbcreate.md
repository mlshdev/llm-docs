> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_dl_dbcreate](https://developer.apple.com/documentation/security/cssm_dl_dbcreate)

# CSSM_DL_DbCreate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DbCreate(CSSM_DL_HANDLE DLHandle, const char *DbName, const CSSM_NET_ADDRESS *DbLocation, const CSSM_DBINFO *DBInfo, CSSM_DB_ACCESS_TYPE AccessRequest, const CSSM_RESOURCE_CONTROL_CONTEXT *CredAndAclEntry, const void *OpenParameters, CSSM_DB_HANDLE *DbHandle);
```
