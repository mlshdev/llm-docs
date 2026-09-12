> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationflags/destroyrights](https://developer.apple.com/documentation/security/authorizationflags/destroyrights)

# destroyRights (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A flag that instructs the Security Server to revoke authorization.

## Declaration

```swift
static var destroyRights: AuthorizationFlags { get }
```

<a id="Discussion"></a>

## Discussion

If this flag is set, the Security Server revokes authorization from the process as well as from any other process that is sharing the authorization. If not set, the Security Server revokes authorization from the process but not from other processes that share the authorization.

# kAuthorizationFlagDestroyRights (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A flag that instructs the Security Server to revoke authorization.

## Declaration

```objectivec
kAuthorizationFlagDestroyRights
```

<a id="Discussion"></a>

## Discussion

If this flag is set, the Security Server revokes authorization from the process as well as from any other process that is sharing the authorization. If not set, the Security Server revokes authorization from the process but not from other processes that share the authorization.
