> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_init](https://developer.apple.com/documentation/security/cssm_init)

# CSSM_Init

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_Init(const CSSM_VERSION *Version, CSSM_PRIVILEGE_SCOPE Scope, const CSSM_GUID *CallerGuid, CSSM_KEY_HIERARCHY KeyHierarchy, CSSM_PVC_MODE *PvcPolicy, const void *Reserved);
```
