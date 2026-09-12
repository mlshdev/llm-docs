> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityfoundation/sfauthorization/obtain(withrights:flags:environment:authorizedrights:)](https://developer.apple.com/documentation/securityfoundation/sfauthorization/obtain(withrights:flags:environment:authorizedrights:))

# obtain(withRights:flags:environment:authorizedRights:) (Swift)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.

## Declaration

```swift
func obtain(withRights rights: UnsafePointer<AuthorizationRights>!, flags: AuthorizationFlags, environment: UnsafePointer<AuthorizationEnvironment>!, authorizedRights: UnsafeMutablePointer<UnsafeMutablePointer<AuthorizationRights>?>!) throws
```

## Parameters

- `rights`: A pointer to a set of authorization rights you create. Pass `NULL` if the application requires no rights at this time.
- `flags`: A bit mask for specifying authorization options. Use the following option sets:

  - Pass the constant [kAuthorizationFlagDefaults](https://developer.apple.com/documentation/security/authorizationflags/kauthorizationflagdefaults) if no options are necessary.
  - Specify the [extendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) mask to request rights. You can also specify the [interactionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [partialRights](https://developer.apple.com/documentation/security/authorizationflags/partialrights) and [extendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to request partial rights. You can also specify the [interactionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [preAuthorize](https://developer.apple.com/documentation/security/authorizationflags/preauthorize) and [extendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to preauthorize rights.
  - Specify the [destroyRights](https://developer.apple.com/documentation/security/authorizationflags/destroyrights) mask to prevent the Security framework from preserving the rights obtained during this call.
- `environment`: Data used when authorizing or preauthorizing rights. In macOS 10.3 and later, you can pass icon or prompt data to be used in the authentication dialog box. Possible values for this parameter are listed in `Security/AuthorizationTags.h`. If you are not passing any data in this parameter, pass the constant [kAuthorizationEmptyEnvironment](https://developer.apple.com/documentation/security/kauthorizationemptyenvironment).
- `authorizedRights`: A pointer to a newly allocated [AuthorizationRights](https://developer.apple.com/documentation/security/authorizationrights) structure. On return, this structure contains the rights granted by the Security framework. If you do not require this information, pass `NULL`. If you specify the [preAuthorize](https://developer.apple.com/documentation/security/authorizationflags/preauthorize) mask in the `flags` parameter, the method returns all the requested rights, including those not granted, but the flags of the rights that could not be preauthorized include the [kAuthorizationFlagCanNotPreAuthorize](https://developer.apple.com/documentation/security/kauthorizationflagcannotpreauthorize) bit. Free the memory associated with this set of rights by calling the Authorization Services function [AuthorizationFreeItemSet(\_:)](https://developer.apple.com/documentation/security/authorizationfreeitemset%28_:%29).

<a id="Return-value"></a>

## Return value

[true](https://developer.apple.com/documentation/swift/true) if operation completes successfully.

<a id="Discussion"></a>

## Discussion

There are three main reasons to use this method. The first reason is to preauthorize rights by specifying the `kAuthorizationFlagPreAuthorize`, `kAuthorizationFlagInteractionAllowed`, and `kAuthorizationFlagExtendRights` masks as authorization options. Preauthorization is most useful when a right has a zero timeout. For example, you can preauthorize in the application and if it succeeds, call the helper tool and request authorization. This eliminates calling the helper tool if the Security framework cannot later authorize the specified rights.

The second reason to use this method is to authorize rights before performing a privileged operation by specifying the `kAuthorizationFlagInteractionAllowed`, and `kAuthorizationFlagExtendRights` masks as authorization options.

The third reason to use this method is to authorize partial rights. By specifying the `kAuthorizationFlagPartialRights`, `kAuthorizationFlagInteractionAllowed`, and `kAuthorizationFlagExtendRights` masks as authorization options, the Security framework grants all rights it can authorize. On return, the authorized set contains all the rights.

If you do not specify the `kAuthorizationFlagPartialRights` mask and the Security framework denies at least one right, then the method returns [false](https://developer.apple.com/documentation/swift/false) and the `error` parameter returns `errAuthorizationDenied`.

If you do not specify the `kAuthorizationFlagInteractionAllowed` mask and the Security framework requires user interaction, then the method returns [false](https://developer.apple.com/documentation/swift/false) and the `error` parameter returns `errAuthorizationInteractionNotAllowed`.

If you specify the `kAuthorizationFlagInteractionAllowed` mask and the user cancels the authentication process, then the method returns [false](https://developer.apple.com/documentation/swift/false) and the `error` parameter returns `errAuthorizationCanceled`.

> **Handling Errors in Swift**

> In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Authorizing rights

- [obtain(withRight:flags:)](obtain%28withright_flags_%29.md): Authorizes and preauthorizes one specific right.

# obtainWithRights:flags:environment:authorizedRights:error: (Objective-C)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.

## Declaration

```objectivec
- (BOOL) obtainWithRights:(const AuthorizationRights *) rights flags:(AuthorizationFlags) flags environment:(const AuthorizationEnvironment *) environment authorizedRights:(AuthorizationRights **) authorizedRights error:(NSError **) error;
```

## Parameters

- `rights`: A pointer to a set of authorization rights you create. Pass `NULL` if the application requires no rights at this time.
- `flags`: A bit mask for specifying authorization options. Use the following option sets:

  - Pass the constant [kAuthorizationFlagDefaults](https://developer.apple.com/documentation/security/authorizationflags/kauthorizationflagdefaults) if no options are necessary.
  - Specify the [kAuthorizationFlagExtendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) mask to request rights. You can also specify the [kAuthorizationFlagInteractionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [kAuthorizationFlagPartialRights](https://developer.apple.com/documentation/security/authorizationflags/partialrights) and [kAuthorizationFlagExtendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to request partial rights. You can also specify the [kAuthorizationFlagInteractionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [kAuthorizationFlagPreAuthorize](https://developer.apple.com/documentation/security/authorizationflags/preauthorize) and [kAuthorizationFlagExtendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to preauthorize rights.
  - Specify the [kAuthorizationFlagDestroyRights](https://developer.apple.com/documentation/security/authorizationflags/destroyrights) mask to prevent the Security framework from preserving the rights obtained during this call.
- `environment`: Data used when authorizing or preauthorizing rights. In macOS 10.3 and later, you can pass icon or prompt data to be used in the authentication dialog box. Possible values for this parameter are listed in `Security/AuthorizationTags.h`. If you are not passing any data in this parameter, pass the constant [kAuthorizationEmptyEnvironment](https://developer.apple.com/documentation/security/kauthorizationemptyenvironment).
- `authorizedRights`: A pointer to a newly allocated [AuthorizationRights](https://developer.apple.com/documentation/security/authorizationrights) structure. On return, this structure contains the rights granted by the Security framework. If you do not require this information, pass `NULL`. If you specify the [kAuthorizationFlagPreAuthorize](https://developer.apple.com/documentation/security/authorizationflags/preauthorize) mask in the `flags` parameter, the method returns all the requested rights, including those not granted, but the flags of the rights that could not be preauthorized include the [kAuthorizationFlagCanNotPreAuthorize](https://developer.apple.com/documentation/security/kauthorizationflagcannotpreauthorize) bit. Free the memory associated with this set of rights by calling the Authorization Services function [AuthorizationFreeItemSet](https://developer.apple.com/documentation/security/authorizationfreeitemset%28_:%29).
- `error`: On completion, the result code returned by the method. See “Result Codes” in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Return-value"></a>

## Return value

[true](https://developer.apple.com/documentation/swift/true) if operation completes successfully.

<a id="Discussion"></a>

## Discussion

There are three main reasons to use this method. The first reason is to preauthorize rights by specifying the `kAuthorizationFlagPreAuthorize`, `kAuthorizationFlagInteractionAllowed`, and `kAuthorizationFlagExtendRights` masks as authorization options. Preauthorization is most useful when a right has a zero timeout. For example, you can preauthorize in the application and if it succeeds, call the helper tool and request authorization. This eliminates calling the helper tool if the Security framework cannot later authorize the specified rights.

The second reason to use this method is to authorize rights before performing a privileged operation by specifying the `kAuthorizationFlagInteractionAllowed`, and `kAuthorizationFlagExtendRights` masks as authorization options.

The third reason to use this method is to authorize partial rights. By specifying the `kAuthorizationFlagPartialRights`, `kAuthorizationFlagInteractionAllowed`, and `kAuthorizationFlagExtendRights` masks as authorization options, the Security framework grants all rights it can authorize. On return, the authorized set contains all the rights.

If you do not specify the `kAuthorizationFlagPartialRights` mask and the Security framework denies at least one right, then the method returns [false](https://developer.apple.com/documentation/swift/false) and the `error` parameter returns `errAuthorizationDenied`.

If you do not specify the `kAuthorizationFlagInteractionAllowed` mask and the Security framework requires user interaction, then the method returns [false](https://developer.apple.com/documentation/swift/false) and the `error` parameter returns `errAuthorizationInteractionNotAllowed`.

If you specify the `kAuthorizationFlagInteractionAllowed` mask and the user cancels the authentication process, then the method returns [false](https://developer.apple.com/documentation/swift/false) and the `error` parameter returns `errAuthorizationCanceled`.

> **Handling Errors in Swift**

> In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Authorizing rights

- [permitWithRights:flags:environment:authorizedRights:](permitwithrights_flags_environment_authorizedrights_.md): Deprecated. Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [permitWithRight:flags:](permitwithright_flags_.md): Deprecated. Authorizes and preauthorizes one specific right.
- [obtainWithRight:flags:error:](obtain%28withright_flags_%29.md): Authorizes and preauthorizes one specific right.
