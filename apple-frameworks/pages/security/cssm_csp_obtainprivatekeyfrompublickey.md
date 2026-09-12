> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_obtainprivatekeyfrompublickey](https://developer.apple.com/documentation/security/cssm_csp_obtainprivatekeyfrompublickey)

# CSSM_CSP_ObtainPrivateKeyFromPublicKey

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_ObtainPrivateKeyFromPublicKey(CSSM_CSP_HANDLE CSPHandle, const CSSM_KEY *PublicKey, CSSM_KEY_PTR PrivateKey);
```
