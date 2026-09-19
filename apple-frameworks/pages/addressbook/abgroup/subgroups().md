> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abgroup/subgroups()

# subgroups() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array containing a group’s subgroups.

## Declaration

```swift
func subgroups() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

If this group doesn’t contain any groups, this method returns an empty array.

## See Also

### Managing subgroups

- [addSubgroup(\_:)](addsubgroup%28__%29.md): Adds a subgroup to another group.
- [removeSubgroup(\_:)](removesubgroup%28__%29.md): Removes a subgroup from a group.
- [parentGroups()](parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.

# subgroups (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array containing a group’s subgroups.

## Declaration

```objectivec
- (NSArray *) subgroups;
```

<a id="Discussion"></a>

## Discussion

If this group doesn’t contain any groups, this method returns an empty array.

## See Also

### Managing subgroups

- [addSubgroup:](addsubgroup%28__%29.md): Adds a subgroup to another group.
- [removeSubgroup:](removesubgroup%28__%29.md): Removes a subgroup from a group.
- [parentGroups](parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
