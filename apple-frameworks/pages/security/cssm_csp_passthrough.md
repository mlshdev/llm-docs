> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_csp_passthrough](https://developer.apple.com/documentation/security/cssm_csp_passthrough)

# CSSM_CSP_PassThrough

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_CSP_PassThrough(CSSM_CC_HANDLE CCHandle, uint32 PassThroughId, const void *InData, void **OutData);
```
