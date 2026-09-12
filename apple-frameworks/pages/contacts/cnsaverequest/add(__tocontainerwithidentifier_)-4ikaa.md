> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/add(_:tocontainerwithidentifier:)-4ikaa](https://developer.apple.com/documentation/contacts/cnsaverequest/add(_:tocontainerwithidentifier:)-4ikaa)

# add(\_:toContainerWithIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Adds a group to the contact store.

## Declaration

```swift
func add(_ group: CNMutableGroup, toContainerWithIdentifier identifier: String?)
```

## Parameters

- `group`: The group to add.
- `identifier`: The identifier of the container to add the new group. To add the new group to the default container, set `identifier` to `nil`.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made delete request for the group.

## See Also

### Saving group changes

- [update(\_:)](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [delete(\_:)](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember(\_:to:)](addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember(\_:from:)](removemember%28__from_%29.md): Removes a contact as a member of a group.

# addGroup:toContainerWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Adds a group to the contact store.

## Declaration

```objectivec
- (void) addGroup:(CNMutableGroup *) group toContainerWithIdentifier:(NSString *) identifier;
```

## Parameters

- `group`: The group to add.
- `identifier`: The identifier of the container to add the new group. To add the new group to the default container, set `identifier` to `nil`.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made delete request for the group.

## See Also

### Saving group changes

- [updateGroup:](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [deleteGroup:](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember:toGroup:](addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember:fromGroup:](removemember%28__from_%29.md): Removes a contact as a member of a group.
