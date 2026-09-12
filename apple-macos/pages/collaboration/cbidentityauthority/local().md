> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority/local()](https://developer.apple.com/documentation/collaboration/cbidentityauthority/local())

# local() (Swift)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the identity authority on the local system.

## Declaration

```swift
class func local() -> CBIdentityAuthority
```

<a id="return-value"></a>

## Return Value

The identity authority on the local system.

<a id="Discussion"></a>

## Discussion

Any identities stored on the local system are contained within this identity authority.

## See Also

### Accessing Identity Authorities

- [localizedName](localizedname.md): Returns the localized name of the identity authority.
- [managed()](managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
- [default()](default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.

# localIdentityAuthority (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the identity authority on the local system.

## Declaration

```objectivec
+ (CBIdentityAuthority *) localIdentityAuthority;
```

<a id="return-value"></a>

## Return Value

The identity authority on the local system.

<a id="Discussion"></a>

## Discussion

Any identities stored on the local system are contained within this identity authority.

## See Also

### Accessing Identity Authorities

- [localizedName](localizedname.md): Returns the localized name of the identity authority.
- [managedIdentityAuthority](managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
- [defaultIdentityAuthority](default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.
