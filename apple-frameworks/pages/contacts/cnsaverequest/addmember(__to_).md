> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/addmember(_:to:)](https://developer.apple.com/documentation/contacts/cnsaverequest/addmember(_:to:))

# addMember(\_:to:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Adds a contact as a member of a group.

## Declaration

```swift
func addMember(_ contact: CNContact, to group: CNGroup)
```

## Parameters

- `contact`: The contact to add to the group membership.
- `group`: The group to add the contact to its membership.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made remove membership request on the contact from the group.

## See Also

### Saving group changes

- [add(\_:toContainerWithIdentifier:)](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [update(\_:)](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [delete(\_:)](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [removeMember(\_:from:)](removemember%28__from_%29.md): Removes a contact as a member of a group.

# addMember:toGroup: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Adds a contact as a member of a group.

## Declaration

```objectivec
- (void) addMember:(CNContact *) contact toGroup:(CNGroup *) group;
```

## Parameters

- `contact`: The contact to add to the group membership.
- `group`: The group to add the contact to its membership.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made remove membership request on the contact from the group.

## See Also

### Saving group changes

- [addGroup:toContainerWithIdentifier:](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [updateGroup:](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [deleteGroup:](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [removeMember:fromGroup:](removemember%28__from_%29.md): Removes a contact as a member of a group.
