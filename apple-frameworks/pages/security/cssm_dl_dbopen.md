> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_dl_dbopen](https://developer.apple.com/documentation/security/cssm_dl_dbopen)

# CSSM_DL_DbOpen

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DbOpen(CSSM_DL_HANDLE DLHandle, const char *DbName, const CSSM_NET_ADDRESS *DbLocation, CSSM_DB_ACCESS_TYPE AccessRequest, const CSSM_ACCESS_CREDENTIALS *AccessCred, const void *OpenParameters, CSSM_DB_HANDLE *DbHandle);
```
