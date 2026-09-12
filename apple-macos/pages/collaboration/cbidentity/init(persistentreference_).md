> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/init(persistentreference:)](https://developer.apple.com/documentation/collaboration/cbidentity/init(persistentreference:))

# init(persistentReference:) (Swift)

**Framework:** Collaboration  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns the identity object matching the persistent reference data.

## Declaration

```swift
init?(persistentReference data: Data)
```

## Parameters

- `data`: The persistent data object that refers to an identity.

<a id="return-value"></a>

## Return Value

The identity object matching the persistent data object, or `nil` if the identity is not found.

<a id="Discussion"></a>

## Discussion

A persistent reference is an opaque data object suitable for persistent storage.

## See Also

### Finding Identities

- [init(name:authority:)](init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [init(uuidString:authority:)](init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.

# identityWithPersistentReference: (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the identity object matching the persistent reference data.

## Declaration

```objectivec
+ (CBIdentity *) identityWithPersistentReference:(NSData *) data;
```

## Parameters

- `data`: The persistent data object that refers to an identity.

<a id="return-value"></a>

## Return Value

The identity object matching the persistent data object, or `nil` if the identity is not found.

<a id="Discussion"></a>

## Discussion

A persistent reference is an opaque data object suitable for persistent storage.

## See Also

### Finding Identities

- [identityWithCSIdentity:](identitywithcsidentity_.md): Returns an identity object created from the specified Core Services Identity opaque object.
- [identityWithName:authority:](init%28name_authority_%29.md): Returns the identity object with the given name from the specified identity authority.
- [identityWithUUIDString:authority:](init%28uuidstring_authority_%29-13vns.md): Deprecated. Returns the identity object with the given UUID from the specified identity authority.
