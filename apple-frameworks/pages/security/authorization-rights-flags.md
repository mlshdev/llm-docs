> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorization-rights-flags](https://developer.apple.com/documentation/security/authorization-rights-flags)

# Authorization Rights Flags (Swift)

**Framework:** Security  
**Kind:** API Collection

Recognize the values the Security Server sets in an authorization item’s flag field.

<a id="overview"></a>

## Overview

Look for these values in the [flags](authorizationitem/flags.md) field of an [AuthorizationItem](authorizationitem.md), for example among the set of items in the `authorizedRights` parameter returned by a call to the [AuthorizationCopyInfo(\_:\_:\_:)](authorizationcopyinfo%28______%29.md) function.

## Topics

### Constants

- [kAuthorizationFlagCanNotPreAuthorize](kauthorizationflagcannotpreauthorize.md): Indicates the Security Server could not preauthorizethe right.

# Authorization Rights Flags (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Recognize the values the Security Server sets in an authorization item’s flag field.

<a id="overview"></a>

## Overview

Look for these values in the [flags](authorizationitem/flags.md) field of an [AuthorizationItem](authorizationitem.md), for example among the set of items in the `authorizedRights` parameter returned by a call to the [AuthorizationCopyInfo](authorizationcopyinfo%28______%29.md) function.

## Topics

### Constants

- [kAuthorizationFlagCanNotPreAuthorize](kauthorizationflagcannotpreauthorize.md): Indicates the Security Server could not preauthorizethe right.
