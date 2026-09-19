> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/authorizationrights

# AuthorizationRights (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An authorization item set designated to represent a set of rights.

## Declaration

```swift
typealias AuthorizationRights = AuthorizationItemSet
```

<a id="Discussion"></a>

## Discussion

The argument value of each item in the set is as defined for the specific right it belongs to. Argument values may not contain pointers so they remain portable between different address spaces. This set is actually an instance of an [AuthorizationItemSet](authorizationitemset.md).

# AuthorizationRights (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An authorization item set designated to represent a set of rights.

## Declaration

```objectivec
typedef AuthorizationItemSet AuthorizationRights;
```

<a id="Discussion"></a>

## Discussion

The argument value of each item in the set is as defined for the specific right it belongs to. Argument values may not contain pointers so they remain portable between different address spaces. This set is actually an instance of an [AuthorizationItemSet](authorizationitemset.md).
