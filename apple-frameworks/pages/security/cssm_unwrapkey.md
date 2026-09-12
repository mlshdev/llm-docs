> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_unwrapkey](https://developer.apple.com/documentation/security/cssm_unwrapkey)

# CSSM_UnwrapKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_UnwrapKey(CSSM_CC_HANDLE CCHandle, const CSSM_KEY *PublicKey, const CSSM_WRAP_KEY *WrappedKey, uint32 KeyUsage, uint32 KeyAttr, const SecAsn1Item *KeyLabel, const CSSM_RESOURCE_CONTROL_CONTEXT *CredAndAclEntry, CSSM_KEY_PTR UnwrappedKey, CSSM_DATA_PTR DescriptiveData);
```
