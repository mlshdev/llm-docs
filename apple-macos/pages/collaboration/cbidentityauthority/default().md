> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority/default()](https://developer.apple.com/documentation/collaboration/cbidentityauthority/default())

# default() (Swift)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns an identity authority that contains the identities in both the local and the network-bound authorities.

## Declaration

```swift
class func `default`() -> CBIdentityAuthority
```

<a id="return-value"></a>

## Return Value

The local and network-bound identity authorities.

<a id="Discussion"></a>

## Discussion

The default identity authority is the logical union of the identities in the local and managed authorities.

## See Also

### Accessing Identity Authorities

- [localizedName](localizedname.md): Returns the localized name of the identity authority.
- [local()](local%28%29.md): Returns the identity authority on the local system.
- [managed()](managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.

# defaultIdentityAuthority (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns an identity authority that contains the identities in both the local and the network-bound authorities.

## Declaration

```objectivec
+ (CBIdentityAuthority *) defaultIdentityAuthority;
```

<a id="return-value"></a>

## Return Value

The local and network-bound identity authorities.

<a id="Discussion"></a>

## Discussion

The default identity authority is the logical union of the identities in the local and managed authorities.

## See Also

### Accessing Identity Authorities

- [localizedName](localizedname.md): Returns the localized name of the identity authority.
- [localIdentityAuthority](local%28%29.md): Returns the identity authority on the local system.
- [managedIdentityAuthority](managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
