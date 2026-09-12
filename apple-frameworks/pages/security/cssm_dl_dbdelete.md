> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_dl_dbdelete](https://developer.apple.com/documentation/security/cssm_dl_dbdelete)

# CSSM_DL_DbDelete

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DbDelete(CSSM_DL_HANDLE DLHandle, const char *DbName, const CSSM_NET_ADDRESS *DbLocation, const CSSM_ACCESS_CREDENTIALS *AccessCred);
```
