> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/removemember(_:from:)](https://developer.apple.com/documentation/contacts/cnsaverequest/removemember(_:from:))

# removeMember(\_:from:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes a contact as a member of a group.

## Declaration

```swift
func removeMember(_ contact: CNContact, from group: CNGroup)
```

## Parameters

- `contact`: The contact to remove from the group membership.
- `group`: The group to remove the contact from its membership.

<a id="Discussion"></a>

## Discussion

This method removes the contact from the group, but does not delete it from the contact store. This method overrides any previously made add membership request on the contact to the group.

## See Also

### Saving group changes

- [add(\_:toContainerWithIdentifier:)](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [update(\_:)](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [delete(\_:)](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember(\_:to:)](addmember%28__to_%29.md): Adds a contact as a member of a group.

# removeMember:fromGroup: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Removes a contact as a member of a group.

## Declaration

```objectivec
- (void) removeMember:(CNContact *) contact fromGroup:(CNGroup *) group;
```

## Parameters

- `contact`: The contact to remove from the group membership.
- `group`: The group to remove the contact from its membership.

<a id="Discussion"></a>

## Discussion

This method removes the contact from the group, but does not delete it from the contact store. This method overrides any previously made add membership request on the contact to the group.

## See Also

### Saving group changes

- [addGroup:toContainerWithIdentifier:](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [updateGroup:](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [deleteGroup:](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember:toGroup:](addmember%28__to_%29.md): Adds a contact as a member of a group.
