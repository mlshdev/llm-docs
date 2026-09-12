> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/removesubgroup(_:)](https://developer.apple.com/documentation/addressbook/abgroup/removesubgroup(_:))

# removeSubgroup(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes a subgroup from a group.

## Declaration

```swift
func removeSubgroup(_ group: ABGroup!) -> Bool
```

## Parameters

- `group`: The subgroup to be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `group` argument is not a subgroup, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false). If `group` is `nil`, this method raises an exception.

## See Also

### Managing subgroups

- [addSubgroup(\_:)](addsubgroup%28__%29.md): Adds a subgroup to another group.
- [parentGroups()](parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
- [subgroups()](subgroups%28%29.md): Returns an array containing a group’s subgroups.

# removeSubgroup: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes a subgroup from a group.

## Declaration

```objectivec
- (BOOL) removeSubgroup:(ABGroup *) group;
```

## Parameters

- `group`: The subgroup to be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `group` argument is not a subgroup, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false). If `group` is `nil`, this method raises an exception.

## See Also

### Managing subgroups

- [addSubgroup:](addsubgroup%28__%29.md): Adds a subgroup to another group.
- [parentGroups](parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
- [subgroups](subgroups%28%29.md): Returns an array containing a group’s subgroups.
