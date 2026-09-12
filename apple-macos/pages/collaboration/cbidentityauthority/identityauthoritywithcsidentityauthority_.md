> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority/identityauthoritywithcsidentityauthority:](https://developer.apple.com/documentation/collaboration/cbidentityauthority/identityauthoritywithcsidentityauthority:)

# identityAuthorityWithCSIdentityAuthority:

**Interface language:** Objective-C

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns an identity authority specified by a given Core Services Identity authority object.

## Declaration

```objectivec
+ (CBIdentityAuthority *) identityAuthorityWithCSIdentityAuthority:(CSIdentityAuthorityRef) CSIdentityAuthority;
```

## Parameters

- `CSIdentityAuthority`: The Core Services Identity opaque object.

<a id="return-value"></a>

## Return Value

The identity authority object for use with the Collaboration framework.

<a id="Discussion"></a>

## Discussion

This method, along with [CSIdentityAuthority](csidentityauthority.md), is used for interoperability with the Core Services Identity API.

## See Also

### Interacting with the Core Services Identity API

- [CSIdentityAuthority](csidentityauthority.md): Returns an identity authority for use with the Core Services Identity API.
