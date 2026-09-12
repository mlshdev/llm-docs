> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorization-name-tags](https://developer.apple.com/documentation/security/authorization-name-tags)

# Authorization Name Tags

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** API Collection

Use name tags to define authorization security items.

<a id="overview"></a>

## Overview

These tags are possible values for the `name` field of an [AuthorizationItem](authorizationitem.md) structure. This is not an all-inclusive set. You determine the name of the right to request. These environment tags are for future use.

## Topics

### Constants

- [kAuthorizationEnvironmentUsername](kauthorizationenvironmentusername.md): The type for an authorization item containing a user name.
- [kAuthorizationEnvironmentPassword](kauthorizationenvironmentpassword.md): The type for an authorization item containing a password.
- [kAuthorizationEnvironmentShared](kauthorizationenvironmentshared.md): The type for an authorization item containing a shared right.
- [kAuthorizationRightExecute](kauthorizationrightexecute.md): The type for an authorization item requesting the right to execute with privileges.
- [kAuthorizationEnvironmentPrompt](kauthorizationenvironmentprompt.md): The type for an authorization item containing the name of the item that should be passed into the environment when specifying invocation-specific additional text.
- [kAuthorizationEnvironmentIcon](kauthorizationenvironmenticon.md): The type for an authorization item containing the name of the item that should be passed into the environment when specifying an alternate icon.
- [kAuthorizationPamResult](kauthorizationpamresult.md): The type for an authorization item containing a return code from a Pluggable Authentication Module (PAM).
