> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/unifiedmecontactwithkeys(tofetch:)](https://developer.apple.com/documentation/contacts/cncontactstore/unifiedmecontactwithkeys(tofetch:))

# unifiedMeContactWithKeys(toFetch:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Fetches the unified contact that’s the *me* card.

## Declaration

```swift
func unifiedMeContactWithKeys(toFetch keys: [any CNKeyDescriptor]) throws -> CNContact
```

## Parameters

- `keys`: The properties to fetch in the returned [CNContact](../cncontact.md) object.

<a id="Return-Value"></a>

## Return Value

The unified contact that is the *me* card or `nil` if there isn’t one.

<a id="Discussion"></a>

## Discussion

In the user interface, *My Card*  represents the *me* contact. Fetch only the properties your app uses. You can combine contact keys and contact key descriptors together.

To include [CNContactNoteKey](../cncontactnotekey.md) in the array of keys in iOS 13 or later or macOS 13 or later, add the [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md) entitlement to your app. The entitlement requires permission from Apple to use, and you can’t publicly distribute your app until you have permission to use it. For more information about adding the entitlement and getting permission, see [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md).

## See Also

### Fetching contacts

- [enumerateContacts(with:usingBlock:)](enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedContact(withIdentifier:keysToFetch:)](unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContacts(matching:keysToFetch:)](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.

# unifiedMeContactWithKeysToFetch:error: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Fetches the unified contact that’s the *me* card.

## Declaration

```objectivec
- (CNContact *) unifiedMeContactWithKeysToFetch:(NSArray<id<CNKeyDescriptor>> *) keys error:(NSError **) error;
```

## Parameters

- `keys`: The properties to fetch in the returned [CNContact](../cncontact.md) object.
- `error`: Error information, if an error occurs.

<a id="Return-Value"></a>

## Return Value

The unified contact that is the *me* card or `nil` if there isn’t one.

<a id="Discussion"></a>

## Discussion

In the user interface, *My Card*  represents the *me* contact. Fetch only the properties your app uses. You can combine contact keys and contact key descriptors together.

To include [CNContactNoteKey](../cncontactnotekey.md) in the array of keys in iOS 13 or later or macOS 13 or later, add the [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md) entitlement to your app. The entitlement requires permission from Apple to use, and you can’t publicly distribute your app until you have permission to use it. For more information about adding the entitlement and getting permission, see [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md).

## See Also

### Fetching contacts

- [enumerateContactsWithFetchRequest:error:usingBlock:](enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedContactWithIdentifier:keysToFetch:error:](unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContactsMatchingPredicate:keysToFetch:error:](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.
- [enumeratorForContactFetchRequest:error:](enumeratorforcontactfetchrequest_error_.md): Enumerates a contact fetch request.
