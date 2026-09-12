> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityfoundation/sfauthorization/init(flags:rights:environment:)](https://developer.apple.com/documentation/securityfoundation/sfauthorization/init(flags:rights:environment:))

# init(flags:rights:environment:) (Swift)

**Framework:** Security Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Initializes an authorization object with the specified flags, rights, and environment.

## Declaration

```swift
init!(flags: AuthorizationFlags, rights: UnsafePointer<AuthorizationRights>!, environment: UnsafePointer<AuthorizationEnvironment>!)
```

## Parameters

- `flags`: A bit mask for specifying authorization options. Use the following option sets:

  - Pass the constant [kAuthorizationFlagDefaults](https://developer.apple.com/documentation/security/authorizationflags/kauthorizationflagdefaults) if no options are necessary.
  - Specify the [extendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) mask to request rights. You can also specify the [interactionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [partialRights](https://developer.apple.com/documentation/security/authorizationflags/partialrights) and [extendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to request partial rights. You can also specify the [interactionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [preAuthorize](https://developer.apple.com/documentation/security/authorizationflags/preauthorize) and [extendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to preauthorize rights.
  - Specify the [destroyRights](https://developer.apple.com/documentation/security/authorizationflags/destroyrights) mask to prevent the Security framework from preserving the rights obtained during this call.
- `rights`: A pointer to a set of authorization rights you create. Pass `NULL` if the application requires no rights at this time.
- `environment`: Data used when authorizing or preauthorizing rights. In macOS 10.3 and later, you can pass icon or prompt data to be used in the authentication dialog box. Possible values for this parameter are listed in `Security/AuthorizationTags.h`. If you are not passing any data in this parameter, pass the constant [kAuthorizationEmptyEnvironment](https://developer.apple.com/documentation/security/kauthorizationemptyenvironment).

<a id="Return-value"></a>

## Return value

The authorization object.

<a id="Discussion"></a>

## Discussion

You can use this method to initialize an authorization object. Normally, such initialization is not required, as you pass in flags, rights, and environmental data when you request authorization.

## See Also

### Allocating and initializing an authorization object

- [authorization()](authorization%28%29.md): Returns an authorization object initialized with a default environment, flags, and rights.
- [authorization(with:rights:environment:)](authorization%28with_rights_environment_%29.md): Returns an authorization object initialized with the specified flags, rights and environment.
- [init()](init%28%29.md): Initializes an authorization object with default environment, flags, and rights.

# initWithFlags:rights:environment: (Objective-C)

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Initializes an authorization object with the specified flags, rights, and environment.

## Declaration

```objectivec
- (id) initWithFlags:(AuthorizationFlags) flags rights:(const AuthorizationRights *) rights environment:(const AuthorizationEnvironment *) environment;
```

## Parameters

- `flags`: A bit mask for specifying authorization options. Use the following option sets:

  - Pass the constant [kAuthorizationFlagDefaults](https://developer.apple.com/documentation/security/authorizationflags/kauthorizationflagdefaults) if no options are necessary.
  - Specify the [kAuthorizationFlagExtendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) mask to request rights. You can also specify the [kAuthorizationFlagInteractionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [kAuthorizationFlagPartialRights](https://developer.apple.com/documentation/security/authorizationflags/partialrights) and [kAuthorizationFlagExtendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to request partial rights. You can also specify the [kAuthorizationFlagInteractionAllowed](https://developer.apple.com/documentation/security/authorizationflags/interactionallowed) mask to allow user interaction.
  - Specify the [kAuthorizationFlagPreAuthorize](https://developer.apple.com/documentation/security/authorizationflags/preauthorize) and [kAuthorizationFlagExtendRights](https://developer.apple.com/documentation/security/authorizationflags/extendrights) masks to preauthorize rights.
  - Specify the [kAuthorizationFlagDestroyRights](https://developer.apple.com/documentation/security/authorizationflags/destroyrights) mask to prevent the Security framework from preserving the rights obtained during this call.
- `rights`: A pointer to a set of authorization rights you create. Pass `NULL` if the application requires no rights at this time.
- `environment`: Data used when authorizing or preauthorizing rights. In macOS 10.3 and later, you can pass icon or prompt data to be used in the authentication dialog box. Possible values for this parameter are listed in `Security/AuthorizationTags.h`. If you are not passing any data in this parameter, pass the constant [kAuthorizationEmptyEnvironment](https://developer.apple.com/documentation/security/kauthorizationemptyenvironment).

<a id="Return-value"></a>

## Return value

The authorization object.

<a id="Discussion"></a>

## Discussion

You can use this method to initialize an authorization object. Normally, such initialization is not required, as you pass in flags, rights, and environmental data when you request authorization.

## See Also

### Allocating and initializing an authorization object

- [authorization](authorization%28%29.md): Returns an authorization object initialized with a default environment, flags, and rights.
- [authorizationWithFlags:rights:environment:](authorization%28with_rights_environment_%29.md): Returns an authorization object initialized with the specified flags, rights and environment.
- [init](init%28%29.md): Initializes an authorization object with default environment, flags, and rights.
