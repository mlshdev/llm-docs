> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_encryptdatap

# CSSM_EncryptDataP

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_EncryptDataP(CSSM_CC_HANDLE CCHandle, const SecAsn1Item *ClearBufs, uint32 ClearBufCount, CSSM_DATA_PTR CipherBufs, uint32 CipherBufCount, CSSM_SIZE *bytesEncrypted, CSSM_DATA_PTR RemData, CSSM_PRIVILEGE Privilege);
```
