> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorization-services-result-codes](https://developer.apple.com/documentation/security/authorization-services-result-codes)

# Authorization Services Result Codes (Swift)

**Framework:** Security  
**Kind:** API Collection

Recognize result codes specific to the authorization services API.

<a id="overview"></a>

## Overview

Use the [SecCopyErrorMessageString(\_:\_:)](seccopyerrormessagestring%28____%29.md) function to obtain a human readable string corresponding to these status codes.

The functions of the [Authorization Services](authorization-services.md) API may also return the general codes listed in [Security Framework Result Codes](security-framework-result-codes.md).

## Topics

### Codes

- [errAuthorizationSuccess](errauthorizationsuccess.md): The operation completed successfully.
- [errAuthorizationInvalidSet](errauthorizationinvalidset.md): The set parameter is invalid.
- [errAuthorizationInvalidRef](errauthorizationinvalidref.md): The authorization parameter is invalid.
- [errAuthorizationInvalidTag](errauthorizationinvalidtag.md): The tag parameter is invalid.
- [errAuthorizationInvalidPointer](errauthorizationinvalidpointer.md): The authorizedRights parameter is invalid.
- [errAuthorizationDenied](errauthorizationdenied.md): The Security Server denied authorization for one or more requested rights.
- [errAuthorizationCanceled](errauthorizationcanceled.md): The user canceled the operation.
- [errAuthorizationInteractionNotAllowed](errauthorizationinteractionnotallowed.md): The Security Server denied authorization because no user interaction is allowed.
- [errAuthorizationInternal](errauthorizationinternal.md): An unrecognized internal error occurred.
- [errAuthorizationExternalizeNotAllowed](errauthorizationexternalizenotallowed.md): The Security Server denied externalization of the authorization reference.
- [errAuthorizationInternalizeNotAllowed](errauthorizationinternalizenotallowed.md): The Security Server denied internalization of the authorization reference.
- [errAuthorizationInvalidFlags](errauthorizationinvalidflags.md): The flags parameter is invalid.
- [errAuthorizationToolExecuteFailure](errauthorizationtoolexecutefailure.md): The tool failed to execute.
- [errAuthorizationToolEnvironmentError](errauthorizationtoolenvironmenterror.md): The attempt to execute the tool failed to return a success or an error code.
- [errAuthorizationBadAddress](errauthorizationbadaddress.md): The requested socket address is invalid.

# Authorization Services Result Codes (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Recognize result codes specific to the authorization services API.

<a id="overview"></a>

## Overview

Use the [SecCopyErrorMessageString](seccopyerrormessagestring%28____%29.md) function to obtain a human readable string corresponding to these status codes.

The functions of the [Authorization Services](authorization-services.md) API may also return the general codes listed in [Security Framework Result Codes](security-framework-result-codes.md).

## Topics

### Codes

- [errAuthorizationSuccess](errauthorizationsuccess.md): The operation completed successfully.
- [errAuthorizationInvalidSet](errauthorizationinvalidset.md): The set parameter is invalid.
- [errAuthorizationInvalidRef](errauthorizationinvalidref.md): The authorization parameter is invalid.
- [errAuthorizationInvalidTag](errauthorizationinvalidtag.md): The tag parameter is invalid.
- [errAuthorizationInvalidPointer](errauthorizationinvalidpointer.md): The authorizedRights parameter is invalid.
- [errAuthorizationDenied](errauthorizationdenied.md): The Security Server denied authorization for one or more requested rights.
- [errAuthorizationCanceled](errauthorizationcanceled.md): The user canceled the operation.
- [errAuthorizationInteractionNotAllowed](errauthorizationinteractionnotallowed.md): The Security Server denied authorization because no user interaction is allowed.
- [errAuthorizationInternal](errauthorizationinternal.md): An unrecognized internal error occurred.
- [errAuthorizationExternalizeNotAllowed](errauthorizationexternalizenotallowed.md): The Security Server denied externalization of the authorization reference.
- [errAuthorizationInternalizeNotAllowed](errauthorizationinternalizenotallowed.md): The Security Server denied internalization of the authorization reference.
- [errAuthorizationInvalidFlags](errauthorizationinvalidflags.md): The flags parameter is invalid.
- [errAuthorizationToolExecuteFailure](errauthorizationtoolexecutefailure.md): The tool failed to execute.
- [errAuthorizationToolEnvironmentError](errauthorizationtoolenvironmenterror.md): The attempt to execute the tool failed to return a success or an error code.
- [errAuthorizationBadAddress](errauthorizationbadaddress.md): The requested socket address is invalid.
