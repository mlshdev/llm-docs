> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/predicateforcontactsingroup(withidentifier:)](https://developer.apple.com/documentation/contacts/cncontact/predicateforcontactsingroup(withidentifier:))

# predicateForContactsInGroup(withIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the contacts that are members in the specified group.

## Declaration

```swift
class func predicateForContactsInGroup(withIdentifier groupIdentifier: String) -> NSPredicate
```

## Parameters

- `groupIdentifier`: The group identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch contacts from [CNContactStore](../cncontactstore.md).

## See Also

### Getting Search Predicates

- [predicateForContacts(matchingName:)](predicateforcontacts%28matchingname_%29.md): Returns a predicate to find the contacts matching the specified name.
- [predicateForContacts(withIdentifiers:)](predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInContainer(withIdentifier:)](predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContacts(matching:)](predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
- [predicateForContacts(matchingEmailAddress:)](predicateforcontacts%28matchingemailaddress_%29.md): Returns a predicate to find the contacts whose email address matches the specified value.

# predicateForContactsInGroupWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the contacts that are members in the specified group.

## Declaration

```objectivec
+ (NSPredicate *) predicateForContactsInGroupWithIdentifier:(NSString *) groupIdentifier;
```

## Parameters

- `groupIdentifier`: The group identifier to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that can be used to fetch contacts from [CNContactStore](../cncontactstore.md).

## See Also

### Getting Search Predicates

- [predicateForContactsMatchingName:](predicateforcontacts%28matchingname_%29.md): Returns a predicate to find the contacts matching the specified name.
- [predicateForContactsWithIdentifiers:](predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInContainerWithIdentifier:](predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContactsMatchingPhoneNumber:](predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
- [predicateForContactsMatchingEmailAddress:](predicateforcontacts%28matchingemailaddress_%29.md): Returns a predicate to find the contacts whose email address matches the specified value.
