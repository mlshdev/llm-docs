> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationcreatefromexternalform(_:_:)](https://developer.apple.com/documentation/security/authorizationcreatefromexternalform(_:_:))

# AuthorizationCreateFromExternalForm(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Internalizes the external representation of an authorization reference.

## Declaration

```swift
func AuthorizationCreateFromExternalForm(_ extForm: UnsafePointer<AuthorizationExternalForm>, _ authorization: UnsafeMutablePointer<AuthorizationRef?>) -> OSStatus
```

## Parameters

- `extForm`: A pointer to the external representation of the authorization reference you retrieve from the calling process.
- `authorization`: A pointer to an authorization reference. On return, this points to the local copy of the authorization reference. The Security Server allocates the authorization reference for you, so you do not need to call the function [AuthorizationCreate(\_:\_:\_:\_:)](authorizationcreate%28________%29.md).

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

When passing an authorization reference between processes, use this function to internalize the external representation of the authorization reference you created using the function [AuthorizationMakeExternalForm(\_:\_:)](authorizationmakeexternalform%28____%29.md).

# AuthorizationCreateFromExternalForm (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Internalizes the external representation of an authorization reference.

## Declaration

```objectivec
OSStatus AuthorizationCreateFromExternalForm(const AuthorizationExternalForm *extForm, AuthorizationRef*authorization);
```

## Parameters

- `extForm`: A pointer to the external representation of the authorization reference you retrieve from the calling process.
- `authorization`: A pointer to an authorization reference. On return, this points to the local copy of the authorization reference. The Security Server allocates the authorization reference for you, so you do not need to call the function [AuthorizationCreate](authorizationcreate%28________%29.md).

<a id="return-value"></a>

## Return Value

A result code. See [Authorization Services Result Codes](authorization-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

When passing an authorization reference between processes, use this function to internalize the external representation of the authorization reference you created using the function [AuthorizationMakeExternalForm](authorizationmakeexternalform%28____%29.md).
