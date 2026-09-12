> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbgroupidentity/posixgid](https://developer.apple.com/documentation/collaboration/cbgroupidentity/posixgid)

# posixGID (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the POSIX GID of the identity.

## Declaration

```swift
var posixGID: gid_t { get }
```

<a id="return-value"></a>

## Return Value

The POSIX GID of the group identity.

<a id="Discussion"></a>

## Discussion

The POSIX GID is an integer that can identify a group within an identity authority. GIDs are not guaranteed to be unique within an identity authority.

# posixGID (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the POSIX GID of the identity.

## Declaration

```objectivec
@property (nonatomic, readonly) gid_t posixGID;
```

<a id="return-value"></a>

## Return Value

The POSIX GID of the group identity.

<a id="Discussion"></a>

## Discussion

The POSIX GID is an integer that can identify a group within an identity authority. GIDs are not guaranteed to be unique within an identity authority.

## See Also

### Group Identity Attributes

- [members](members.md): Deprecated. Returns the members of the group.
