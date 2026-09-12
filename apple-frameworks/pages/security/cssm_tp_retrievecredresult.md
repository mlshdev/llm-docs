> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_retrievecredresult](https://developer.apple.com/documentation/security/cssm_tp_retrievecredresult)

# CSSM_TP_RetrieveCredResult

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_RetrieveCredResult(CSSM_TP_HANDLE TPHandle, const SecAsn1Item *ReferenceIdentifier, const CSSM_TP_CALLERAUTH_CONTEXT *CallerAuthCredentials, sint32 *EstimatedTime, CSSM_BOOL *ConfirmationRequired, CSSM_TP_RESULT_SET_PTR*RetrieveOutput);
```
