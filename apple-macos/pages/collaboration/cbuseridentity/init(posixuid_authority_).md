> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbuseridentity/init(posixuid:authority:)](https://developer.apple.com/documentation/collaboration/cbuseridentity/init(posixuid:authority:))

# init(posixUID:authority:) (Swift)

**Framework:** Collaboration  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns the user identity with the given POSIX UID in the specified identity authority.

## Declaration

```swift
init?(posixUID uid: uid_t, authority: CBIdentityAuthority)
```

## Parameters

- `uid`: The UID of the identity you are searching for.
- `authority`: The identity authority to search.

<a id="return-value"></a>

## Return Value

The user identity with the given UID in the specified identity authority, or `nil` if no identity exists with the specified UID.

## See Also

### Using UIDs

- [posixUID](posixuid.md): Returns the POSIX UID of the identity.

# userIdentityWithPosixUID:authority: (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the user identity with the given POSIX UID in the specified identity authority.

## Declaration

```objectivec
+ (CBUserIdentity *) userIdentityWithPosixUID:(uid_t) uid authority:(CBIdentityAuthority *) authority;
```

## Parameters

- `uid`: The UID of the identity you are searching for.
- `authority`: The identity authority to search.

<a id="return-value"></a>

## Return Value

The user identity with the given UID in the specified identity authority, or `nil` if no identity exists with the specified UID.

## See Also

### Using UIDs

- [posixUID](posixuid.md): Returns the POSIX UID of the identity.
