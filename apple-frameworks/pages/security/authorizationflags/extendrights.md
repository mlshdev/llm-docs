> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationflags/extendrights](https://developer.apple.com/documentation/security/authorizationflags/extendrights)

# extendRights (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A flag that permits the Security Server to attempt to grant the rights requested.

## Declaration

```swift
static var extendRights: AuthorizationFlags { get }
```

<a id="Discussion"></a>

## Discussion

Once the Security Server denies one right, it ignores the remaining requested rights.

# kAuthorizationFlagExtendRights (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A flag that permits the Security Server to attempt to grant the rights requested.

## Declaration

```objectivec
kAuthorizationFlagExtendRights
```

<a id="Discussion"></a>

## Discussion

Once the Security Server denies one right, it ignores the remaining requested rights.
