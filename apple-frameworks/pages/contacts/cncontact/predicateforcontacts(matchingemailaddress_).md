> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/predicateforcontacts(matchingemailaddress:)](https://developer.apple.com/documentation/contacts/cncontact/predicateforcontacts(matchingemailaddress:))

# predicateForContacts(matchingEmailAddress:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

Returns a predicate to find the contacts whose email address matches the specified value.

## Declaration

```swift
class func predicateForContacts(matchingEmailAddress emailAddress: String) -> NSPredicate
```

## Parameters

- `emailAddress`: The email address to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch contacts from [CNContactStore](../cncontactstore.md).

## See Also

### Getting Search Predicates

- [predicateForContacts(matchingName:)](predicateforcontacts%28matchingname_%29.md): Returns a predicate to find the contacts matching the specified name.
- [predicateForContacts(withIdentifiers:)](predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInGroup(withIdentifier:)](predicateforcontactsingroup%28withidentifier_%29.md): Returns a predicate to find the contacts that are members in the specified group.
- [predicateForContactsInContainer(withIdentifier:)](predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContacts(matching:)](predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.

# predicateForContactsMatchingEmailAddress: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

Returns a predicate to find the contacts whose email address matches the specified value.

## Declaration

```objectivec
+ (NSPredicate *) predicateForContactsMatchingEmailAddress:(NSString *) emailAddress;
```

## Parameters

- `emailAddress`: The email address to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch contacts from [CNContactStore](../cncontactstore.md).

## See Also

### Getting Search Predicates

- [predicateForContactsMatchingName:](predicateforcontacts%28matchingname_%29.md): Returns a predicate to find the contacts matching the specified name.
- [predicateForContactsWithIdentifiers:](predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInGroupWithIdentifier:](predicateforcontactsingroup%28withidentifier_%29.md): Returns a predicate to find the contacts that are members in the specified group.
- [predicateForContactsInContainerWithIdentifier:](predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContactsMatchingPhoneNumber:](predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
