> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationflags](https://developer.apple.com/documentation/security/authorizationflags)

# AuthorizationFlags (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags used to specify authorization options.

## Declaration

```swift
struct AuthorizationFlags
```

<a id="overview"></a>

## Overview

These flags instruct the Security Server how to proceed with the function in which you pass them. You bitwise `OR` them together to specify more than one at a time. Set all unused bits to `0` to allow for future expansion.

Use these flags in calls to the [AuthorizationCreate(\_:\_:\_:\_:)](authorizationcreate%28________%29.md), [AuthorizationFree(\_:\_:)](authorizationfree%28____%29.md), [AuthorizationCopyRights(\_:\_:\_:\_:\_:)](authorizationcopyrights%28__________%29.md), and [AuthorizationCopyRightsAsync(\_:\_:\_:\_:\_:)](authorizationcopyrightsasync%28__________%29.md) functions.

## Topics

### Initializers

- [init(rawValue:)](authorizationflags/init%28rawvalue_%29.md): Initializes an authorization flags structure.

### Type Properties

- [interactionAllowed](authorizationflags/interactionallowed.md): A flag that permits user interaction as needed.
- [extendRights](authorizationflags/extendrights.md): A flag that permits the Security Server to attempt to grant the rights requested.
- [partialRights](authorizationflags/partialrights.md): A flag that permits the Security Server to grant rights on an individual basis.
- [destroyRights](authorizationflags/destroyrights.md): A flag that instructs the Security Server to revoke authorization.
- [preAuthorize](authorizationflags/preauthorize.md): A flag that instructs the Security Server to preauthorize the rights requested.
- [noData](authorizationflags/nodata.md): Private flag. Do not use.
- [skipInternalAuth](authorizationflags/skipinternalauth.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# AuthorizationFlags (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags used to specify authorization options.

## Declaration

```objectivec
enum AuthorizationFlags : UInt32;
```

<a id="overview"></a>

## Overview

These flags instruct the Security Server how to proceed with the function in which you pass them. You bitwise `OR` them together to specify more than one at a time. Set all unused bits to `0` to allow for future expansion.

Use these flags in calls to the [AuthorizationCreate](authorizationcreate%28________%29.md), [AuthorizationFree](authorizationfree%28____%29.md), [AuthorizationCopyRights](authorizationcopyrights%28__________%29.md), and [AuthorizationCopyRightsAsync](authorizationcopyrightsasync%28__________%29.md) functions.

## Topics

### Type Properties

- [kAuthorizationFlagDefaults](authorizationflags/kauthorizationflagdefaults.md): An empty flag set that you use as a placeholder when you don’t want any of the other flags.
- [kAuthorizationFlagInteractionAllowed](authorizationflags/interactionallowed.md): A flag that permits user interaction as needed.
- [kAuthorizationFlagExtendRights](authorizationflags/extendrights.md): A flag that permits the Security Server to attempt to grant the rights requested.
- [kAuthorizationFlagPartialRights](authorizationflags/partialrights.md): A flag that permits the Security Server to grant rights on an individual basis.
- [kAuthorizationFlagDestroyRights](authorizationflags/destroyrights.md): A flag that instructs the Security Server to revoke authorization.
- [kAuthorizationFlagPreAuthorize](authorizationflags/preauthorize.md): A flag that instructs the Security Server to preauthorize the rights requested.
- [kAuthorizationFlagNoData](authorizationflags/nodata.md): Private flag. Do not use.
- [kAuthorizationFlagSkipInternalAuth](authorizationflags/skipinternalauth.md)
