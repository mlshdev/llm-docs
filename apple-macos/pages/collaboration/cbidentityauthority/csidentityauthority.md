> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentityauthority/csidentityauthority](https://developer.apple.com/documentation/collaboration/cbidentityauthority/csidentityauthority)

# CSIdentityAuthority

**Interface language:** Objective-C

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an identity authority for use with the Core Services Identity API.

## Declaration

```objectivec
@property (readonly) CSIdentityAuthorityRef CSIdentityAuthority;
```

<a id="return-value"></a>

## Return Value

The opaque authority object for use with the Core Services Identity API.

<a id="discussion"></a>

## Discussion

This method, along with [identityAuthorityWithCSIdentityAuthority:](identityauthoritywithcsidentityauthority_.md), is used for interoperability with the Core Services Identity API.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

### Interacting with the Core Services Identity API

- [identityAuthorityWithCSIdentityAuthority:](identityauthoritywithcsidentityauthority_.md): Returns an identity authority specified by a given Core Services Identity authority object.
