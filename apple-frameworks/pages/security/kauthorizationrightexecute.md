> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kauthorizationrightexecute](https://developer.apple.com/documentation/security/kauthorizationrightexecute)

# kAuthorizationRightExecute (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The type for an authorization item requesting the right to execute with privileges.

## Declaration

```swift
var kAuthorizationRightExecute: String { get }
```

<a id="Discussion"></a>

## Discussion

In addition to this right, you should obtain whatever rights the tool needs to perform its operation on your behalf. The [AuthorizationItem](authorizationitem.md) should contain the full path of the tool you wish to execute in the `value` and `valueLength` fields.  In the future we will limit the right to only execute the requested path, and we will display this information to the user.

# kAuthorizationRightExecute (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The type for an authorization item requesting the right to execute with privileges.

## Declaration

```objectivec
#define kAuthorizationRightExecute
```

<a id="Discussion"></a>

## Discussion

In addition to this right, you should obtain whatever rights the tool needs to perform its operation on your behalf. The [AuthorizationItem](authorizationitem.md) should contain the full path of the tool you wish to execute in the `value` and `valueLength` fields.  In the future we will limit the right to only execute the requested path, and we will display this information to the user.
