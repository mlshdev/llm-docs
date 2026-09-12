> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/enumeratorforcontactfetchrequest:error:](https://developer.apple.com/documentation/contacts/cncontactstore/enumeratorforcontactfetchrequest:error:)

# enumeratorForContactFetchRequest:error:

**Interface language:** Objective-C

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Enumerates a contact fetch request.

## Declaration

```objectivec
- (CNFetchResult<NSEnumerator<CNContact *> *> *) enumeratorForContactFetchRequest:(CNContactFetchRequest *) request error:(NSError **) error;
```

## Parameters

- `request`: The contact fetch request.
- `error`: Error information, if an error occurred.

<a id="Return-Value"></a>

## Return Value

An enumerator of the records matching the result, or `nil` if there was an error.

<a id="Discussion"></a>

## Discussion

Executes the fetch request and returns an enumerator for the results. This can prevent all events from loading into memory at once. An error that occurs during enumeration may throw an exception.

## See Also

### Fetching contacts

- [enumerateContactsWithFetchRequest:error:usingBlock:](enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedMeContactWithKeysToFetch:error:](unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContactWithIdentifier:keysToFetch:error:](unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContactsMatchingPredicate:keysToFetch:error:](unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.
