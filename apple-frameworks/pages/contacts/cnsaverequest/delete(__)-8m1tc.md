> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/delete(_:)-8m1tc](https://developer.apple.com/documentation/contacts/cnsaverequest/delete(_:)-8m1tc)

# delete(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Deletes a contact from the contact store.

## Declaration

```swift
func delete(_ contact: CNMutableContact)
```

## Parameters

- `contact`: Contact to be delete.

## See Also

### Saving contact changes

- [add(\_:toContainerWithIdentifier:)](add%28__tocontainerwithidentifier_%29-7eut4.md): Adds the specified contact to the contact store.
- [update(\_:)](update%28__%29-3gaig.md): Updates an existing contact in the contact store.

# deleteContact: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Deletes a contact from the contact store.

## Declaration

```objectivec
- (void) deleteContact:(CNMutableContact *) contact;
```

## Parameters

- `contact`: Contact to be delete.

## See Also

### Saving contact changes

- [addContact:toContainerWithIdentifier:](add%28__tocontainerwithidentifier_%29-7eut4.md): Adds the specified contact to the contact store.
- [updateContact:](update%28__%29-3gaig.md): Updates an existing contact in the contact store.
