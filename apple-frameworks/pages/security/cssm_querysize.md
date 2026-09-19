> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_querysize

# CSSM_QuerySize

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_QuerySize(CSSM_CC_HANDLE CCHandle, CSSM_BOOL Encrypt, uint32 QuerySizeCount, CSSM_QUERY_SIZE_DATA_PTR DataBlockSizes);
```
