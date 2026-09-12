> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_generatekeyp](https://developer.apple.com/documentation/security/cssm_generatekeyp)

# CSSM_GenerateKeyP

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_GenerateKeyP(CSSM_CC_HANDLE CCHandle, uint32 KeyUsage, uint32 KeyAttr, const SecAsn1Item *KeyLabel, const CSSM_RESOURCE_CONTROL_CONTEXT *CredAndAclEntry, CSSM_KEY_PTR Key, CSSM_PRIVILEGE Privilege);
```
