> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority/localizedname](https://developer.apple.com/documentation/collaboration/cbidentityauthority/localizedname)

# localizedName (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the localized name of the identity authority.

## Declaration

```swift
var localizedName: String { get }
```

<a id="return-value"></a>

## Return Value

The computer’s name if the authority is local, or Managed Network Directory if the authority is managed.

## See Also

### Accessing Identity Authorities

- [local()](local%28%29.md): Returns the identity authority on the local system.
- [managed()](managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
- [default()](default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.

# localizedName (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the localized name of the identity authority.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localizedName;
```

<a id="return-value"></a>

## Return Value

The computer’s name if the authority is local, or Managed Network Directory if the authority is managed.

## See Also

### Accessing Identity Authorities

- [localIdentityAuthority](local%28%29.md): Returns the identity authority on the local system.
- [managedIdentityAuthority](managed%28%29.md): Returns the identity authority that contains all the identities in bound network directory servers.
- [defaultIdentityAuthority](default%28%29.md): Returns an identity authority that contains the identities in both the local and the network-bound authorities.
