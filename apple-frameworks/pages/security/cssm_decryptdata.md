> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_decryptdata

# CSSM_DecryptData

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_DecryptData(CSSM_CC_HANDLE CCHandle, const SecAsn1Item *CipherBufs, uint32 CipherBufCount, CSSM_DATA_PTR ClearBufs, uint32 ClearBufCount, CSSM_SIZE *bytesDecrypted, CSSM_DATA_PTR RemData);
```
