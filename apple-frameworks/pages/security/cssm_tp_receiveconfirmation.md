> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_tp_receiveconfirmation](https://developer.apple.com/documentation/security/cssm_tp_receiveconfirmation)

# CSSM_TP_ReceiveConfirmation

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
CSSM_RETURN CSSM_TP_ReceiveConfirmation(CSSM_TP_HANDLE TPHandle, const SecAsn1Item *ReferenceIdentifier, CSSM_TP_CONFIRM_RESPONSE_PTR*Responses, sint32 *ElapsedTime);
```
