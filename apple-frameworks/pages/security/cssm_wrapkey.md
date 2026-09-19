> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_wrapkey

# CSSM_WrapKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_WrapKey(CSSM_CC_HANDLE CCHandle, const CSSM_ACCESS_CREDENTIALS *AccessCred, const CSSM_KEY *Key, const SecAsn1Item *DescriptiveData, CSSM_WRAP_KEY_PTR WrappedKey);
```
