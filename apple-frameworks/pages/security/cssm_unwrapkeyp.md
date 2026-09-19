> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_unwrapkeyp

# CSSM_UnwrapKeyP

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_UnwrapKeyP(CSSM_CC_HANDLE CCHandle, const CSSM_KEY *PublicKey, const CSSM_WRAP_KEY *WrappedKey, uint32 KeyUsage, uint32 KeyAttr, const SecAsn1Item *KeyLabel, const CSSM_RESOURCE_CONTROL_CONTEXT *CredAndAclEntry, CSSM_KEY_PTR UnwrappedKey, CSSM_DATA_PTR DescriptiveData, CSSM_PRIVILEGE Privilege);
```
