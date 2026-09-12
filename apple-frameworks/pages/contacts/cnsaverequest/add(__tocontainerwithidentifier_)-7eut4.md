> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/add(_:tocontainerwithidentifier:)-7eut4](https://developer.apple.com/documentation/contacts/cnsaverequest/add(_:tocontainerwithidentifier:)-7eut4)

# add(\_:toContainerWithIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Adds the specified contact to the contact store.

## Declaration

```swift
func add(_ contact: CNMutableContact, toContainerWithIdentifier identifier: String?)
```

## Parameters

- `contact`: The new contact to add.
- `identifier`: The identifier of the container to add the new contact. To add the new contact to the default container set `identifier` to `nil`.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made deletion requests for the contact. The new contact may be modified by executing the save request.

## See Also

### Saving contact changes

- [update(\_:)](update%28__%29-3gaig.md): Updates an existing contact in the contact store.
- [delete(\_:)](delete%28__%29-8m1tc.md): Deletes a contact from the contact store.

# addContact:toContainerWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Adds the specified contact to the contact store.

## Declaration

```objectivec
- (void) addContact:(CNMutableContact *) contact toContainerWithIdentifier:(NSString *) identifier;
```

## Parameters

- `contact`: The new contact to add.
- `identifier`: The identifier of the container to add the new contact. To add the new contact to the default container set `identifier` to `nil`.

<a id="Discussion"></a>

## Discussion

This method overrides any previously made deletion requests for the contact. The new contact may be modified by executing the save request.

## See Also

### Saving contact changes

- [updateContact:](update%28__%29-3gaig.md): Updates an existing contact in the contact store.
- [deleteContact:](delete%28__%29-8m1tc.md): Deletes a contact from the contact store.
