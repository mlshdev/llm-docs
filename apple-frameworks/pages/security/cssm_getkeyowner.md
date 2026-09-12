> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_getkeyowner](https://developer.apple.com/documentation/security/cssm_getkeyowner)

# CSSM_GetKeyOwner

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_GetKeyOwner(CSSM_CSP_HANDLE CSPHandle, const CSSM_KEY *Key, CSSM_ACL_OWNER_PROTOTYPE_PTR Owner);
```
