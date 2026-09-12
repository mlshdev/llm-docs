> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_querykeysizeinbits](https://developer.apple.com/documentation/security/cssm_querykeysizeinbits)

# CSSM_QueryKeySizeInBits

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_QueryKeySizeInBits(CSSM_CSP_HANDLE CSPHandle, CSSM_CC_HANDLE CCHandle, const CSSM_KEY *Key, CSSM_KEY_SIZE_PTR KeySize);
```
