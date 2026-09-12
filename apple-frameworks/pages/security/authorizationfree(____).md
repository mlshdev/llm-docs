> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationfree(_:_:)](https://developer.apple.com/documentation/security/authorizationfree(_:_:))

# AuthorizationFree(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Frees the memory associated with an authorization reference.

## Declaration

```swift
func AuthorizationFree(_ authorization: AuthorizationRef, _ flags: AuthorizationFlags) -> OSStatus
```

## Parameters

- `authorization`: The authorization reference to free.
- `flags`: A bit mask. In most cases, pass the constant [kAuthorizationFlagDefaults](authorizationflags/kauthorizationflagdefaults.md). To remove all shared and non-shared authorizations, pass the constant [destroyRights](authorizationflags/destroyrights.md).

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this function when your application no longer needs the authorization reference you created using the function [AuthorizationCreate(\_:\_:\_:\_:)](authorizationcreate%28________%29.md).

# AuthorizationFree (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Frees the memory associated with an authorization reference.

## Declaration

```objectivec
OSStatus AuthorizationFree(AuthorizationRef authorization, AuthorizationFlags flags);
```

## Parameters

- `authorization`: The authorization reference to free.
- `flags`: A bit mask. In most cases, pass the constant [kAuthorizationFlagDefaults](authorizationflags/kauthorizationflagdefaults.md). To remove all shared and non-shared authorizations, pass the constant [kAuthorizationFlagDestroyRights](authorizationflags/destroyrights.md).

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this function when your application no longer needs the authorization reference you created using the function [AuthorizationCreate](authorizationcreate%28________%29.md).
