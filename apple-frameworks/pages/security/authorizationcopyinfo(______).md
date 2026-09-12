> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcopyinfo(_:_:_:)](https://developer.apple.com/documentation/security/authorizationcopyinfo(_:_:_:))

# AuthorizationCopyInfo(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves supporting data such as the user name and other information gathered during evaluation of authorization.

## Declaration

```swift
func AuthorizationCopyInfo(_ authorization: AuthorizationRef, _ tag: AuthorizationString?, _ info: UnsafeMutablePointer<UnsafeMutablePointer<AuthorizationItemSet>?>) -> OSStatus
```

## Parameters

- `authorization`: An authorization reference referring to the authorization session.
- `tag`: An [AuthorizationString](authorizationstring.md) specifying the type of data the Security Server should return. Pass `nil` to retrieve all available information.
- `info`: A pointer to an authorization set the Security Server creates. On return, this set contains side-band authorization data. When this set is no longer needed, free the memory associated with it by calling the function [AuthorizationFreeItemSet(\_:)](authorizationfreeitemset%28__%29.md).

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

## Mentioned In

- [Extending authorization services with plug-ins](extending-authorization-services-with-plug-ins.md)

<a id="Discussion"></a>

## Discussion

An authorization plug-in can store the results of an authentication operation by calling the [SetContextValue](authorizationcallbacks/setcontextvalue.md) function. You can use the [AuthorizationCopyInfo(\_:\_:\_:)](authorizationcopyinfo%28______%29.md) function to retrieve this information.

# AuthorizationCopyInfo (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves supporting data such as the user name and other information gathered during evaluation of authorization.

## Declaration

```objectivec
OSStatus AuthorizationCopyInfo(AuthorizationRef authorization, AuthorizationString tag, AuthorizationItemSet **info);
```

## Parameters

- `authorization`: An authorization reference referring to the authorization session.
- `tag`: An [AuthorizationString](authorizationstring.md) specifying the type of data the Security Server should return. Pass `nil` to retrieve all available information.
- `info`: A pointer to an authorization set the Security Server creates. On return, this set contains side-band authorization data. When this set is no longer needed, free the memory associated with it by calling the function [AuthorizationFreeItemSet](authorizationfreeitemset%28__%29.md).

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

## Mentioned In

- [Extending authorization services with plug-ins](extending-authorization-services-with-plug-ins.md)

<a id="Discussion"></a>

## Discussion

An authorization plug-in can store the results of an authentication operation by calling the [SetContextValue](authorizationcallbacks/setcontextvalue.md) function. You can use the [AuthorizationCopyInfo](authorizationcopyinfo%28______%29.md) function to retrieve this information.
