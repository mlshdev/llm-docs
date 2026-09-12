> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbgroupidentity/members](https://developer.apple.com/documentation/collaboration/cbgroupidentity/members)

# members

**Interface language:** Objective-C

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Returns the members of the group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray * members;
```

<a id="return-value"></a>

## Return Value

An array of `CBIdentity` objects each representing a member of the group identity.

<a id="discussion"></a>

## Discussion

This method only returns direct members of a group, it does not return members of members. Both user and group identities can be members of a group, but a group cannot be a member of itself. You also cannot have “circular” membership, i.e. a group be a member of another group that is a member of the first group.

## See Also

### Group Identity Attributes

- [posixGID](posixgid.md): Returns the POSIX GID of the identity.
