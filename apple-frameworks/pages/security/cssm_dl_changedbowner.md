> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_dl_changedbowner](https://developer.apple.com/documentation/security/cssm_dl_changedbowner)

# CSSM_DL_ChangeDbOwner

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_ChangeDbOwner(CSSM_DL_DB_HANDLE DLDBHandle, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_ACL_OWNER_PROTOTYPE *NewOwner);
```
