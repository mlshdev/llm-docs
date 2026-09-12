> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_certreclaimkey](https://developer.apple.com/documentation/security/cssm_tp_certreclaimkey)

# CSSM_TP_CertReclaimKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_CertReclaimKey(CSSM_TP_HANDLE TPHandle, const CSSM_CERTGROUP *CertGroup, uint32 CertIndex, CSSM_LONG_HANDLE KeyCacheHandle, CSSM_CSP_HANDLE CSPHandle, const CSSM_RESOURCE_CONTROL_CONTEXT *CredAndAclEntry);
```
