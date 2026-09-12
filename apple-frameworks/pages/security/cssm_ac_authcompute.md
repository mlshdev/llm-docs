> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_ac_authcompute](https://developer.apple.com/documentation/security/cssm_ac_authcompute)

# CSSM_AC_AuthCompute

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_AC_AuthCompute(CSSM_AC_HANDLE ACHandle, const CSSM_TUPLEGROUP *BaseAuthorizations, const CSSM_TUPLEGROUP *Credentials, uint32 NumberOfRequestors, const CSSM_LIST *Requestors, const CSSM_LIST *RequestedAuthorizationPeriod, const CSSM_LIST *RequestedAuthorization, CSSM_TUPLEGROUP_PTR AuthorizationResult);
```
