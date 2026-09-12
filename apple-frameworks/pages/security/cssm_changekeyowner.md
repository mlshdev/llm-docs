> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_changekeyowner](https://developer.apple.com/documentation/security/cssm_changekeyowner)

# CSSM_ChangeKeyOwner

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_ChangeKeyOwner(CSSM_CSP_HANDLE CSPHandle, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *Key, const CSSM_ACL_OWNER_PROTOTYPE *NewOwner);
```
