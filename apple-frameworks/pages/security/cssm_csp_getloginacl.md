> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_csp_getloginacl

# CSSM_CSP_GetLoginAcl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_GetLoginAcl(CSSM_CSP_HANDLE CSPHandle, const CSSM_STRING *SelectionTag, uint32 *NumberOfAclInfos, CSSM_ACL_ENTRY_INFO_PTR*AclInfos);
```
