> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_signdataupdate

# CSSM_SignDataUpdate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_SignDataUpdate(CSSM_CC_HANDLE CCHandle, const SecAsn1Item *DataBufs, uint32 DataBufCount);
```
