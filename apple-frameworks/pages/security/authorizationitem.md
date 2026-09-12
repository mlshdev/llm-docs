> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationitem](https://developer.apple.com/documentation/security/authorizationitem)

# AuthorizationItem (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure containing information about an authorization right or the authorization environment.

## Declaration

```swift
struct AuthorizationItem
```

<a id="Overview"></a>

## Overview

When using an authorization item to contain a right, set the [name](authorizationitem/name.md) field to the name of the right—for example, `"com.myOrganization.myProduct.myRight"`, the [valueLength](authorizationitem/valuelength.md) and [flags](authorizationitem/flags.md) fields to `0`, and the value field to `nil`. For more information on naming rights, read [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995)

When using an authorization item for the [AuthorizationExecuteWithPrivileges](authorizationexecutewithprivileges.md) function, set the [name](authorizationitem/name.md) field to [kAuthorizationRightExecute](kauthorizationrightexecute.md), and the [flags](authorizationitem/flags.md) field to `0`. Set the [value](authorizationitem/value.md) field to the full POSIX pathname of the tool to execute and the [valueLength](authorizationitem/valuelength.md) field to the byte length of the value in the [value](authorizationitem/value.md) field.

When using an authorization item to contain environment data, set the [name](authorizationitem/name.md) field to the name of the environment data—for example, [kAuthorizationEnvironmentUsername](kauthorizationenvironmentusername.md)—and the [flags](authorizationitem/flags.md) field to `0`. Set the [value](authorizationitem/value.md) field, in this case, to the actual user name and the [valueLength](authorizationitem/valuelength.md) field to the byte length of the value in the [value](authorizationitem/value.md) field.

## Topics

### Initializers

- [init(name:valueLength:value:flags:)](authorizationitem/init%28name_valuelength_value_flags_%29.md): Creates a new authorization item.

### Instance Properties

- [flags](authorizationitem/flags.md): Reserved option bits.
- [name](authorizationitem/name.md): The required name of the authorization right or environment data.
- [value](authorizationitem/value.md): A pointer to information pertaining to the name field.
- [valueLength](authorizationitem/valuelength.md): The number of bytes in the value field.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# AuthorizationItem (Objective-C)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A structure containing information about an authorization right or the authorization environment.

## Declaration

```objectivec
typedef struct { ... } AuthorizationItem;
```

<a id="Overview"></a>

## Overview

When using an authorization item to contain a right, set the [name](authorizationitem/name.md) field to the name of the right—for example, `"com.myOrganization.myProduct.myRight"`, the [valueLength](authorizationitem/valuelength.md) and [flags](authorizationitem/flags.md) fields to `0`, and the value field to `nil`. For more information on naming rights, read [Authorization Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/authorization_concepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000995)

When using an authorization item for the [AuthorizationExecuteWithPrivileges](authorizationexecutewithprivileges.md) function, set the [name](authorizationitem/name.md) field to [kAuthorizationRightExecute](kauthorizationrightexecute.md), and the [flags](authorizationitem/flags.md) field to `0`. Set the [value](authorizationitem/value.md) field to the full POSIX pathname of the tool to execute and the [valueLength](authorizationitem/valuelength.md) field to the byte length of the value in the [value](authorizationitem/value.md) field.

When using an authorization item to contain environment data, set the [name](authorizationitem/name.md) field to the name of the environment data—for example, [kAuthorizationEnvironmentUsername](kauthorizationenvironmentusername.md)—and the [flags](authorizationitem/flags.md) field to `0`. Set the [value](authorizationitem/value.md) field, in this case, to the actual user name and the [valueLength](authorizationitem/valuelength.md) field to the byte length of the value in the [value](authorizationitem/value.md) field.

## Topics

### Instance Properties

- [flags](authorizationitem/flags.md): Reserved option bits.
- [name](authorizationitem/name.md): The required name of the authorization right or environment data.
- [value](authorizationitem/value.md): A pointer to information pertaining to the name field.
- [valueLength](authorizationitem/valuelength.md): The number of bytes in the value field.
