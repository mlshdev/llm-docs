> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/addsubgroup(_:)](https://developer.apple.com/documentation/addressbook/abgroup/addsubgroup(_:))

# addSubgroup(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds a subgroup to another group.

## Declaration

```swift
func addSubgroup(_ group: ABGroup!) -> Bool
```

## Parameters

- `group`: The group to add as a subgroup.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `group` argument is already part of the receiver, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false). If adding the group would create a recursion, this method also does nothing and returns [false](https://developer.apple.com/documentation/swift/false). (For example, if the group Animal Lovers is in Dog Lovers, and you add Dog Lovers to Animal Lovers, that would create a recursion, which this method won’t allow.) If the `group` argument is `nil`, this method raises an exception.

## See Also

### Managing subgroups

- [removeSubgroup(\_:)](removesubgroup%28__%29.md): Removes a subgroup from a group.
- [parentGroups()](parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
- [subgroups()](subgroups%28%29.md): Returns an array containing a group’s subgroups.

# addSubgroup: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Adds a subgroup to another group.

## Declaration

```objectivec
- (BOOL) addSubgroup:(ABGroup *) group;
```

## Parameters

- `group`: The group to add as a subgroup.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the `group` argument is already part of the receiver, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false). If adding the group would create a recursion, this method also does nothing and returns [false](https://developer.apple.com/documentation/swift/false). (For example, if the group Animal Lovers is in Dog Lovers, and you add Dog Lovers to Animal Lovers, that would create a recursion, which this method won’t allow.) If the `group` argument is `nil`, this method raises an exception.

## See Also

### Managing subgroups

- [removeSubgroup:](removesubgroup%28__%29.md): Removes a subgroup from a group.
- [parentGroups](parentgroups%28%29.md): Returns an array containing a group’s parents—that is, the groups that a group belongs to.
- [subgroups](subgroups%28%29.md): Returns an array containing a group’s subgroups.
