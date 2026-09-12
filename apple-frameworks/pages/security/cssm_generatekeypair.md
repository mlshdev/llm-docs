> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_generatekeypair](https://developer.apple.com/documentation/security/cssm_generatekeypair)

# CSSM_GenerateKeyPair

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_GenerateKeyPair(CSSM_CC_HANDLE CCHandle, uint32 PublicKeyUsage, uint32 PublicKeyAttr, const SecAsn1Item *PublicKeyLabel, CSSM_KEY_PTR PublicKey, uint32 PrivateKeyUsage, uint32 PrivateKeyAttr, const SecAsn1Item *PrivateKeyLabel, const CSSM_RESOURCE_CONTROL_CONTEXT *CredAndAclEntry, CSSM_KEY_PTR PrivateKey);
```
