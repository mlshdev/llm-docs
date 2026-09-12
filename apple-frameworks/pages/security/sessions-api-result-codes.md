> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sessions-api-result-codes](https://developer.apple.com/documentation/security/sessions-api-result-codes)

# Sessions API Result Codes (Swift)

**Framework:** Security  
**Kind:** API Collection

Recognize result codes specific to the sessions API.

<a id="Discussion"></a>

## Discussion

Use the [SecCopyErrorMessageString(\_:\_:)](seccopyerrormessagestring%28____%29.md) function to obtain a human readable string corresponding to these status codes.

The functions of the sessions API may also return result codes from the authorization services API listed in [Authorization Services Result Codes](authorization-services-result-codes.md) or the general codes listed in [Security Framework Result Codes](security-framework-result-codes.md).

## Topics

### Codes

- [errSessionSuccess](errsessionsuccess.md): The operation completed successfully.
- [errSessionInvalidId](errsessioninvalidid.md): Detected an invalid session ID.
- [errSessionInvalidAttributes](errsessioninvalidattributes.md): Detected an invalid set of request attribute bits.
- [errSessionAuthorizationDenied](errsessionauthorizationdenied.md): Authorization denied.
- [errSessionValueNotSet](errsessionvaluenotset.md): The requested session attribute has not been set.
- [errSessionInternal](errsessioninternal.md): An unrecognized internal error occurred.
- [errSessionInvalidFlags](errsessioninvalidflags.md): Encountered invalid flags or options.

# Sessions API Result Codes (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Recognize result codes specific to the sessions API.

<a id="Discussion"></a>

## Discussion

Use the [SecCopyErrorMessageString](seccopyerrormessagestring%28____%29.md) function to obtain a human readable string corresponding to these status codes.

The functions of the sessions API may also return result codes from the authorization services API listed in [Authorization Services Result Codes](authorization-services-result-codes.md) or the general codes listed in [Security Framework Result Codes](security-framework-result-codes.md).

## Topics

### Codes

- [errSessionSuccess](errsessionsuccess.md): The operation completed successfully.
- [errSessionInvalidId](errsessioninvalidid.md): Detected an invalid session ID.
- [errSessionInvalidAttributes](errsessioninvalidattributes.md): Detected an invalid set of request attribute bits.
- [errSessionAuthorizationDenied](errsessionauthorizationdenied.md): Authorization denied.
- [errSessionValueNotSet](errsessionvaluenotset.md): The requested session attribute has not been set.
- [errSessionInternal](errsessioninternal.md): An unrecognized internal error occurred.
- [errSessionInvalidFlags](errsessioninvalidflags.md): Encountered invalid flags or options.
