> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/delete(_:)-29lsm](https://developer.apple.com/documentation/contacts/cnsaverequest/delete(_:)-29lsm)

# delete(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Deletes a group from the contact store.

## Declaration

```swift
func delete(_ group: CNMutableGroup)
```

## Parameters

- `group`: The group to delete.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made add request on the group. The group to be deleted must already exist in the contact store. If it does not, the delete request fails, the `CNErrorCodeRecordDoesNotExist` error is thrown, and the `CNErrorUserInfoAffectedRecordsKey` array is updated to contain that object.

## See Also

### Saving group changes

- [add(\_:toContainerWithIdentifier:)](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [update(\_:)](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [addMember(\_:to:)](addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember(\_:from:)](removemember%28__from_%29.md): Removes a contact as a member of a group.

# deleteGroup: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Deletes a group from the contact store.

## Declaration

```objectivec
- (void) deleteGroup:(CNMutableGroup *) group;
```

## Parameters

- `group`: The group to delete.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made add request on the group. The group to be deleted must already exist in the contact store. If it does not, the delete request fails, the `CNErrorCodeRecordDoesNotExist` error is thrown, and the `CNErrorUserInfoAffectedRecordsKey` array is updated to contain that object.

## See Also

### Saving group changes

- [addGroup:toContainerWithIdentifier:](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [updateGroup:](update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [addMember:toGroup:](addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember:fromGroup:](removemember%28__from_%29.md): Removes a contact as a member of a group.
