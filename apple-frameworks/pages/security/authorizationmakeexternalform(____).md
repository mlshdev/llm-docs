> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationmakeexternalform(_:_:)](https://developer.apple.com/documentation/security/authorizationmakeexternalform(_:_:))

# AuthorizationMakeExternalForm(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates an external representation of an authorization reference.

## Declaration

```swift
func AuthorizationMakeExternalForm(_ authorization: AuthorizationRef, _ extForm: UnsafeMutablePointer<AuthorizationExternalForm>) -> OSStatus
```

## Parameters

- `authorization`: An authorization reference referring to the authorization session.
- `extForm`: A pointer to an external authorization reference. On return, this points to the external representation of the authorization reference.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function creates an external representation of an authorization reference so that you can transmit it between processes. Authorizations are bound by session, process, and time limits, so you cannot store the authorization reference for another process to use. Instead, you must create an external representation of the authorization reference and pass it securely to the other process. Use the function [AuthorizationCreateFromExternalForm(\_:\_:)](authorizationcreatefromexternalform%28____%29.md) to internalize the external representation of the authorization reference.

If it is necessary for your application to perform some privileged operations, it is good programming practice to isolate all of the privileged operations in a separate process, referred to as a *helper tool* (see [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995) for details). In this case, you must pass your authorization reference to the helper tool so that Authorization Services can tell that the helper tool is operating on behalf of your application. Doing so allows the authorization dialog to show your application’s path rather than the path to the helper tool and it allows the system to determine whether the authorization dialog should have keyboard focus.

# AuthorizationMakeExternalForm (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates an external representation of an authorization reference.

## Declaration

```objectivec
OSStatus AuthorizationMakeExternalForm(AuthorizationRef authorization, AuthorizationExternalForm *extForm);
```

## Parameters

- `authorization`: An authorization reference referring to the authorization session.
- `extForm`: A pointer to an external authorization reference. On return, this points to the external representation of the authorization reference.

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function creates an external representation of an authorization reference so that you can transmit it between processes. Authorizations are bound by session, process, and time limits, so you cannot store the authorization reference for another process to use. Instead, you must create an external representation of the authorization reference and pass it securely to the other process. Use the function [AuthorizationCreateFromExternalForm](authorizationcreatefromexternalform%28____%29.md) to internalize the external representation of the authorization reference.

If it is necessary for your application to perform some privileged operations, it is good programming practice to isolate all of the privileged operations in a separate process, referred to as a *helper tool* (see [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995) for details). In this case, you must pass your authorization reference to the helper tool so that Authorization Services can tell that the helper tool is operating on behalf of your application. Doing so allows the authorization dialog to show your application’s path rather than the path to the helper tool and it allows the system to determine whether the authorization dialog should have keyboard focus.
