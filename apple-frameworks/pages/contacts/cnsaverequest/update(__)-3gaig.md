> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/update(_:)-3gaig](https://developer.apple.com/documentation/contacts/cnsaverequest/update(_:)-3gaig)

# update(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Updates an existing contact in the contact store.

## Declaration

```swift
func update(_ contact: CNMutableContact)
```

## Parameters

- `contact`: The contact to update.

<a id="Discussion"></a>

## Discussion

The contact to be updated must already exist in the contact store. If it does not, the update request fails, the `CNErrorCodeRecordDoesNotExist` error occurs, and the `CNErrorUserInfoAffectedRecordsKey` array is updated to contain the object. Note that the contact may be modified when the save request is executing.

## See Also

### Saving contact changes

- [add(\_:toContainerWithIdentifier:)](add%28__tocontainerwithidentifier_%29-7eut4.md): Adds the specified contact to the contact store.
- [delete(\_:)](delete%28__%29-8m1tc.md): Deletes a contact from the contact store.

# updateContact: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Updates an existing contact in the contact store.

## Declaration

```objectivec
- (void) updateContact:(CNMutableContact *) contact;
```

## Parameters

- `contact`: The contact to update.

<a id="Discussion"></a>

## Discussion

The contact to be updated must already exist in the contact store. If it does not, the update request fails, the `CNErrorCodeRecordDoesNotExist` error occurs, and the `CNErrorUserInfoAffectedRecordsKey` array is updated to contain the object. Note that the contact may be modified when the save request is executing.

## See Also

### Saving contact changes

- [addContact:toContainerWithIdentifier:](add%28__tocontainerwithidentifier_%29-7eut4.md): Adds the specified contact to the contact store.
- [deleteContact:](delete%28__%29-8m1tc.md): Deletes a contact from the contact store.
