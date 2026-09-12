> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_submitcredrequest](https://developer.apple.com/documentation/security/cssm_tp_submitcredrequest)

# CSSM_TP_SubmitCredRequest

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_SubmitCredRequest(CSSM_TP_HANDLE TPHandle, const CSSM_TP_AUTHORITY_ID *PreferredAuthority, CSSM_TP_AUTHORITY_REQUEST_TYPE RequestType, const CSSM_TP_REQUEST_SET *RequestInput, const CSSM_TP_CALLERAUTH_CONTEXT *CallerAuthContext, sint32 *EstimatedTime, CSSM_DATA_PTR ReferenceIdentifier);
```
