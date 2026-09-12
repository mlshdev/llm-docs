> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/csidentity](https://developer.apple.com/documentation/collaboration/cbidentity/csidentity)

# CSIdentity

**Interface language:** Objective-C

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns an opaque object for use with the Core Services Identity API.

## Declaration

```objectivec
@property (readonly) CSIdentityRef CSIdentity;
```

<a id="return-value"></a>

## Return Value

The opaque object for use with the Core Services Identity API.

<a id="discussion"></a>

## Discussion

This method, along with [identityWithCSIdentity:](identitywithcsidentity_.md), is used for interoperability with the Core Services Identity API.

## See Also

### Storing Identities

- [persistentReference](persistentreference.md): Returns a persistent reference to store a reference to an identity.
