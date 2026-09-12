> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/init(uuidstring:authority:)-13vns](https://developer.apple.com/documentation/collaboration/cbidentity/init(uuidstring:authority:)-13vns)

# init(uuidString:authority:) (Swift)

**Framework:** Collaboration  
**Kind:** Initializer  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Returns the identity object with the given UUID from the specified identity authority.

> Use +identityWithUniqueIdentifier:authority: instead.

## Declaration

```swift
init?(uuidString uuid: String, authority: CBIdentityAuthority)
```

## Parameters

- `uuid`: The UUID of the identity you are searching for.
- `authority`: The identity authority to search.

<a id="return-value"></a>

## Return Value

The identity object, or `nil` if no identity is found with the matching criteria.

## See Also

### Finding Identities

- [init(name:authority:)](init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [init(persistentReference:)](init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.

# identityWithUUIDString:authority: (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Returns the identity object with the given UUID from the specified identity authority.

> Use +identityWithUniqueIdentifier:authority: instead.

## Declaration

```objectivec
+ (CBIdentity *) identityWithUUIDString:(NSString *) uuid authority:(CBIdentityAuthority *) authority;
```

## Parameters

- `uuid`: The UUID of the identity you are searching for.
- `authority`: The identity authority to search.

<a id="return-value"></a>

## Return Value

The identity object, or `nil` if no identity is found with the matching criteria.

## See Also

### Finding Identities

- [identityWithCSIdentity:](identitywithcsidentity_.md): Returns an identity object created from the specified Core Services Identity opaque object.
- [identityWithName:authority:](init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [identityWithPersistentReference:](init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.
