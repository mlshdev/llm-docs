> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/parentgroups()](https://developer.apple.com/documentation/addressbook/abgroup/parentgroups())

# parentGroups() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array containing a group’s parents—that is, the groups that a group belongs to.

## Declaration

```swift
func parentGroups() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

If this group doesn’t belong to any groups, this method returns an empty array.

## See Also

### Managing subgroups

- [addSubgroup(\_:)](addsubgroup%28__%29.md): Adds a subgroup to another group.
- [removeSubgroup(\_:)](removesubgroup%28__%29.md): Removes a subgroup from a group.
- [subgroups()](subgroups%28%29.md): Returns an array containing a group’s subgroups.

# parentGroups (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array containing a group’s parents—that is, the groups that a group belongs to.

## Declaration

```objectivec
- (NSArray *) parentGroups;
```

<a id="Discussion"></a>

## Discussion

If this group doesn’t belong to any groups, this method returns an empty array.

## See Also

### Managing subgroups

- [addSubgroup:](addsubgroup%28__%29.md): Adds a subgroup to another group.
- [removeSubgroup:](removesubgroup%28__%29.md): Removes a subgroup from a group.
- [subgroups](subgroups%28%29.md): Returns an array containing a group’s subgroups.
