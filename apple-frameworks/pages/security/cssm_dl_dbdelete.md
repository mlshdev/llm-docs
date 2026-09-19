> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_dl_dbdelete

# CSSM_DL_DbDelete

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DL_DbDelete(CSSM_DL_HANDLE DLHandle, const char *DbName, const CSSM_NET_ADDRESS *DbLocation, const CSSM_ACCESS_CREDENTIALS *AccessCred);
```
