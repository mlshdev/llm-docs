> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcopyprivilegedreference](https://developer.apple.com/documentation/security/authorizationcopyprivilegedreference)

# AuthorizationCopyPrivilegedReference

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.7)

Retrieves the authorization reference passed by the AuthorizationExecuteWithPrivileges function.

> Use a `launchd`-launched helper tool and/or the Service Management framework for this functionality.

## Declaration

```objectivec
OSStatus AuthorizationCopyPrivilegedReference(AuthorizationRef*authorization, AuthorizationFlags flags);
```

## Parameters

- `authorization`: A pointer to an authorization reference. The Security Server allocates the authorization reference for you, so you do not need to call the function [AuthorizationCreate](authorizationcreate%28________%29.md). On return, it points to a copy of the authorization reference used in the call to the [AuthorizationExecuteWithPrivileges](authorizationexecutewithprivileges.md) function.
- `flags`: Reserved options. Pass the [kAuthorizationFlagDefaults](authorizationflags/kauthorizationflagdefaults.md) constant.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function is deprecated. Use a `launchd`-launched helper tool and/or the Service Management framework for this functionality.

This function retrieves the authorization reference you pass in the function [AuthorizationExecuteWithPrivileges](authorizationexecutewithprivileges.md). The new process can use the authorization reference to verify authorizations obtained by the calling process.
