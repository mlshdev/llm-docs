> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_gettimevalue

# CSSM_GetTimeValue

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_GetTimeValue(CSSM_CSP_HANDLE CSPHandle, CSSM_ALGORITHMS TimeAlgorithm, SecAsn1Item *TimeData);
```
