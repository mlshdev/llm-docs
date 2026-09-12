> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/init(name:authority:)](https://developer.apple.com/documentation/collaboration/cbidentity/init(name:authority:))

# init(name:authority:) (Swift)

**Framework:** Collaboration  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns the identity object with the given name from the specified identity authority.

## Declaration

```swift
init?(name: String, authority: CBIdentityAuthority)
```

## Parameters

- `name`: The name of the identity.
- `authority`: The identity authority to search.

<a id="return-value"></a>

## Return Value

The identity object, or `nil` if no identity is found with the specified name.

<a id="Discussion"></a>

## Discussion

The name is compared against all valid identity names, including full names, short names, email addresses, and aliases.

## See Also

### Finding Identities

- [init(persistentReference:)](init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.
- [init(uuidString:authority:)](init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.

# identityWithName:authority: (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the identity object with the given name from the specified identity authority.

## Declaration

```objectivec
+ (CBIdentity *) identityWithName:(NSString *) name authority:(CBIdentityAuthority *) authority;
```

## Parameters

- `name`: The name of the identity.
- `authority`: The identity authority to search.

<a id="return-value"></a>

## Return Value

The identity object, or `nil` if no identity is found with the specified name.

<a id="Discussion"></a>

## Discussion

The name is compared against all valid identity names, including full names, short names, email addresses, and aliases.

## See Also

### Finding Identities

- [identityWithCSIdentity:](identitywithcsidentity_.md): Returns an identity object created from the specified Core Services Identity opaque object.
- [identityWithPersistentReference:](init%28persistentreference_%29.md): Returns the identity object matching the persistent reference data.
- [identityWithUUIDString:authority:](init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.
