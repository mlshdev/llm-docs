> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/update(_:)-8h6f6](https://developer.apple.com/documentation/contacts/cnsaverequest/update(_:)-8h6f6)

# update(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Updates an existing group in the contact store.

## Declaration

```swift
func update(_ group: CNMutableGroup)
```

## Parameters

- `group`: The group to update.

<a id="Discussion"></a>

## Discussion

The group to be updated must already exist in the contact store. If it does not, the update request fails, the `CNErrorCodeRecordDoesNotExist` error is thrown, and the `CNErrorUserInfoAffectedRecordsKey` array is updated to contain that object.

## See Also

### Saving group changes

- [add(\_:toContainerWithIdentifier:)](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [delete(\_:)](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember(\_:to:)](addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember(\_:from:)](removemember%28__from_%29.md): Removes a contact as a member of a group.

# updateGroup: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Updates an existing group in the contact store.

## Declaration

```objectivec
- (void) updateGroup:(CNMutableGroup *) group;
```

## Parameters

- `group`: The group to update.

<a id="Discussion"></a>

## Discussion

The group to be updated must already exist in the contact store. If it does not, the update request fails, the `CNErrorCodeRecordDoesNotExist` error is thrown, and the `CNErrorUserInfoAffectedRecordsKey` array is updated to contain that object.

## See Also

### Saving group changes

- [addGroup:toContainerWithIdentifier:](add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [deleteGroup:](delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember:toGroup:](addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember:fromGroup:](removemember%28__from_%29.md): Removes a contact as a member of a group.
