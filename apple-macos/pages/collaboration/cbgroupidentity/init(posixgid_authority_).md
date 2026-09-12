> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbgroupidentity/init(posixgid:authority:)](https://developer.apple.com/documentation/collaboration/cbgroupidentity/init(posixgid:authority:))

# init(posixGID:authority:) (Swift)

**Framework:** Collaboration  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns the group identity with the given POSIX GID in the specified identity authority.

## Declaration

```swift
init?(posixGID gid: gid_t, authority: CBIdentityAuthority)
```

## Parameters

- `gid`: The GID of the group identity you are searching for.
- `authority`: An identity authority in which to search for the group identity.

<a id="return-value"></a>

## Return Value

The group identity object with the given GID in the specified identity authority, or `nil` if no identity exists with the specified GID.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

# groupIdentityWithPosixGID:authority: (Objective-C)

**Framework:** Collaboration  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns the group identity with the given POSIX GID in the specified identity authority.

## Declaration

```objectivec
+ (CBGroupIdentity *) groupIdentityWithPosixGID:(gid_t) gid authority:(CBIdentityAuthority *) authority;
```

## Parameters

- `gid`: The GID of the group identity you are searching for.
- `authority`: An identity authority in which to search for the group identity.

<a id="return-value"></a>

## Return Value

The group identity object with the given GID in the specified identity authority, or `nil` if no identity exists with the specified GID.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)
