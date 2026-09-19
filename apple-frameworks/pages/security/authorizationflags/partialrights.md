> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/authorizationflags/partialrights

# partialRights (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A flag that permits the Security Server to grant rights on an individual basis.

## Declaration

```swift
static var partialRights: AuthorizationFlags { get }
```

<a id="Discussion"></a>

## Discussion

If this and the [extendRights](extendrights.md) flags are set, the Security Server grants or denies rights on an individual basis and all rights are checked.

# kAuthorizationFlagPartialRights (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A flag that permits the Security Server to grant rights on an individual basis.

## Declaration

```objectivec
kAuthorizationFlagPartialRights
```

<a id="Discussion"></a>

## Discussion

If this and the [kAuthorizationFlagExtendRights](extendrights.md) flags are set, the Security Server grants or denies rights on an individual basis and all rights are checked.
