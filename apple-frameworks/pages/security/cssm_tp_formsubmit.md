> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_formsubmit](https://developer.apple.com/documentation/security/cssm_tp_formsubmit)

# CSSM_TP_FormSubmit

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_FormSubmit(CSSM_TP_HANDLE TPHandle, CSSM_TP_FORM_TYPE FormType, const SecAsn1Item *Form, const CSSM_TP_AUTHORITY_ID *ClearanceAuthority, const CSSM_TP_AUTHORITY_ID *RepresentedAuthority, CSSM_ACCESS_CREDENTIALS_PTR Credentials);
```
