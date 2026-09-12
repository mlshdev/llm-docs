> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/enumeratecontacts(with:usingblock:)](https://developer.apple.com/documentation/contacts/cncontactstore/enumeratecontacts(with:usingblock:))

# enumerateContacts(with:usingBlock:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.

## Declaration

```swift
func enumerateContacts(with fetchRequest: CNContactFetchRequest, usingBlock block: (CNContact, UnsafeMutablePointer<ObjCBool>) -> Void) throws
```

## Parameters

- `fetchRequest`: The contact fetch request that specifies the search criteria.
- `block`: Called for each contact matching the fetch request.

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if enumeration of all contacts matching a contact fetch request executes successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method waits until the enumeration is finished. If there are no results, the block is not called and the method returns [true](https://developer.apple.com/documentation/swift/true).

This method can fetch all contacts without keeping all of them at once in memory, which is expensive.

> **Handling Errors in Swift**

> In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching contacts

- [unifiedMeContactWithKeys(toFetch:)](unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContact(withIdentifier:keysToFetch:)](unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContacts(matching:keysToFetch:)](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.

# enumerateContactsWithFetchRequest:error:usingBlock: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.

## Declaration

```objectivec
- (BOOL) enumerateContactsWithFetchRequest:(CNContactFetchRequest *) fetchRequest error:(NSError **) error usingBlock:(void (^)(CNContact *contact, BOOL *stop)) block;
```

## Parameters

- `fetchRequest`: The contact fetch request that specifies the search criteria.
- `error`: Error information, if an error occurred.
- `block`: Called for each contact matching the fetch request.

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if enumeration of all contacts matching a contact fetch request executes successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method waits until the enumeration is finished. If there are no results, the block is not called and the method returns [true](https://developer.apple.com/documentation/swift/true).

This method can fetch all contacts without keeping all of them at once in memory, which is expensive.

> **Handling Errors in Swift**

> In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure. You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## See Also

### Fetching contacts

- [unifiedMeContactWithKeysToFetch:error:](unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContactWithIdentifier:keysToFetch:error:](unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContactsMatchingPredicate:keysToFetch:error:](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.
- [enumeratorForContactFetchRequest:error:](enumeratorforcontactfetchrequest_error_.md): Enumerates a contact fetch request.
