> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbuseridentity/posixuid](https://developer.apple.com/documentation/collaboration/cbuseridentity/posixuid)

# posixUID (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the POSIX UID of the identity.

## Declaration

```swift
var posixUID: uid_t { get }
```

<a id="return-value"></a>

## Return Value

The POSIX UID of the identity.

<a id="Discussion"></a>

## Discussion

The POSIX UID is a integer that can identify a user within an identity authority. UIDs are not guaranteed to be unique within an identity authority.

## See Also

### Using UIDs

- [init(posixUID:authority:)](init%28posixuid_authority_%29.md): Returns the user identity with the given POSIX UID in the specified identity authority.

# posixUID (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the POSIX UID of the identity.

## Declaration

```objectivec
@property (nonatomic, readonly) uid_t posixUID;
```

<a id="return-value"></a>

## Return Value

The POSIX UID of the identity.

<a id="Discussion"></a>

## Discussion

The POSIX UID is a integer that can identify a user within an identity authority. UIDs are not guaranteed to be unique within an identity authority.

## See Also

### Using UIDs

- [userIdentityWithPosixUID:authority:](init%28posixuid_authority_%29.md): Returns the user identity with the given POSIX UID in the specified identity authority.
