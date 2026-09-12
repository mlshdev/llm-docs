> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/unifiedcontact(withidentifier:keystofetch:)](https://developer.apple.com/documentation/contacts/cncontactstore/unifiedcontact(withidentifier:keystofetch:))

# unifiedContact(withIdentifier:keysToFetch:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches a unified contact for the specified contact identifier.

## Declaration

```swift
func unifiedContact(withIdentifier identifier: String, keysToFetch keys: [any CNKeyDescriptor]) throws -> CNContact
```

## Parameters

- `identifier`: The identifier of the contact to fetch.
- `keys`: The properties to fetch in the returned [CNContact](../cncontact.md) object.

<a id="Return-Value"></a>

## Return Value

A unified contact matching or linked to the identifier.

<a id="Discussion"></a>

## Discussion

Due to unification, the returned contact may have a different identifier than you specify. To fetch a batch of contacts by identifiers, use [predicateForContacts(withIdentifiers:)](../cncontact/predicateforcontacts%28withidentifiers_%29.md) with [unifiedContacts(matching:keysToFetch:)](unifiedcontacts%28matching_keystofetch_%29.md). Fetch only the properties that your app uses. You can combine contact keys and contact key descriptors together.

To include [CNContactNoteKey](../cncontactnotekey.md) in the array of keys in iOS, add the [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md) entitlement to your app. The entitlement requires permission from Apple to use, and you can’t publicly distribute your app until you have permission to use it. For more information about adding the entitlement and getting permission, see [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md).

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching contacts

- [enumerateContacts(with:usingBlock:)](enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedMeContactWithKeys(toFetch:)](unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContacts(matching:keysToFetch:)](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.

# unifiedContactWithIdentifier:keysToFetch:error: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches a unified contact for the specified contact identifier.

## Declaration

```objectivec
- (CNContact *) unifiedContactWithIdentifier:(NSString *) identifier keysToFetch:(NSArray<id<CNKeyDescriptor>> *) keys error:(NSError **) error;
```

## Parameters

- `identifier`: The identifier of the contact to fetch.
- `keys`: The properties to fetch in the returned [CNContact](../cncontact.md) object.
- `error`: Error information, if an error occurrs.

<a id="Return-Value"></a>

## Return Value

A unified contact matching or linked to the identifier.

<a id="Discussion"></a>

## Discussion

Due to unification, the returned contact may have a different identifier than you specify. To fetch a batch of contacts by identifiers, use [predicateForContactsWithIdentifiers:](../cncontact/predicateforcontacts%28withidentifiers_%29.md) with [unifiedContactsMatchingPredicate:keysToFetch:error:](unifiedcontacts%28matching_keystofetch_%29.md). Fetch only the properties that your app uses. You can combine contact keys and contact key descriptors together.

To include [CNContactNoteKey](../cncontactnotekey.md) in the array of keys in iOS, add the [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md) entitlement to your app. The entitlement requires permission from Apple to use, and you can’t publicly distribute your app until you have permission to use it. For more information about adding the entitlement and getting permission, see [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md).

> **Handling Errors in Swift**

> In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching contacts

- [enumerateContactsWithFetchRequest:error:usingBlock:](enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedMeContactWithKeysToFetch:error:](unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContactsMatchingPredicate:keysToFetch:error:](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.
- [enumeratorForContactFetchRequest:error:](enumeratorforcontactfetchrequest_error_.md): Enumerates a contact fetch request.
