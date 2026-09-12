> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority/managed()](https://developer.apple.com/documentation/collaboration/cbidentityauthority/managed())

# managed() (Swift)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the identity authority that contains all the identities in bound network directory servers.

## Declaration

```swift
class func managed() -> CBIdentityAuthority
```

<a id="return-value"></a>

## Return Value

The identity authorities in bound network directory servers.

<a id="Discussion"></a>

## Discussion

If you are bound to a network directory server (such as an LDAP server) that has an identity authority, use this method to search those authorities.

## See Also

### Accessing Identity Authorities

- [localizedName](localizedname.md): Returns the localized name of the identity authority.
- [local()](local%28%29.md): Returns the identity authority on the local system.
- [default()](default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.

# managedIdentityAuthority (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the identity authority that contains all the identities in bound network directory servers.

## Declaration

```objectivec
+ (CBIdentityAuthority *) managedIdentityAuthority;
```

<a id="return-value"></a>

## Return Value

The identity authorities in bound network directory servers.

<a id="Discussion"></a>

## Discussion

If you are bound to a network directory server (such as an LDAP server) that has an identity authority, use this method to search those authorities.

## See Also

### Accessing Identity Authorities

- [localizedName](localizedname.md): Returns the localized name of the identity authority.
- [localIdentityAuthority](local%28%29.md): Returns the identity authority on the local system.
- [defaultIdentityAuthority](default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.
