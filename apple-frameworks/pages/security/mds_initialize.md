> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/mds_initialize](https://developer.apple.com/documentation/security/mds_initialize)

# MDS_Initialize

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN MDS_Initialize(const CSSM_GUID *pCallerGuid, const CSSM_MEMORY_FUNCS *pMemoryFunctions, MDS_FUNCS_PTR pDlFunctions, MDS_HANDLE *hMds);
```
