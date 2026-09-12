> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_confirmcredresult](https://developer.apple.com/documentation/security/cssm_tp_confirmcredresult)

# CSSM_TP_ConfirmCredResult

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_ConfirmCredResult(CSSM_TP_HANDLE TPHandle, const SecAsn1Item *ReferenceIdentifier, const CSSM_TP_CALLERAUTH_CONTEXT *CallerAuthCredentials, const CSSM_TP_CONFIRM_RESPONSE *Responses, const CSSM_TP_AUTHORITY_ID *PreferredAuthority);
```
