> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_changekeyacl

# CSSM_ChangeKeyAcl

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_ChangeKeyAcl(CSSM_CSP_HANDLE CSPHandle, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_ACL_EDIT *AclEdit, const CSSM_KEY *Key);
```
