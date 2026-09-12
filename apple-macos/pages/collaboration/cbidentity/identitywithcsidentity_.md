> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/identitywithcsidentity:](https://developer.apple.com/documentation/collaboration/cbidentity/identitywithcsidentity:)

# identityWithCSIdentity:

**Interface language:** Objective-C

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns an identity object created from the specified Core Services Identity opaque object.

## Declaration

```objectivec
+ (CBIdentity *) identityWithCSIdentity:(CSIdentityRef) csIdentity;
```

## Parameters

- `csIdentity`: The Core Services Identity opaque object.

<a id="return-value"></a>

## Return Value

The identity object for use with the Collaboration framework.

<a id="Discussion"></a>

## Discussion

This method is used for interoperability with the Core Services Identity API.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

### Finding Identities

- [identityWithName:authority:](init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [identityWithPersistentReference:](init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.
- [identityWithUUIDString:authority:](init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.
