> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/predicateforcontacts(matchingname:)](https://developer.apple.com/documentation/contacts/cncontact/predicateforcontacts(matchingname:))

# predicateForContacts(matchingName:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the contacts matching the specified name.

## Declaration

```swift
class func predicateForContacts(matchingName name: String) -> NSPredicate
```

## Parameters

- `name`: The contact name to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch contacts from [CNContactStore](../cncontactstore.md).

<a id="Discussion"></a>

## Discussion

The name can contain any number of words.

## See Also

### Getting Search Predicates

- [predicateForContacts(withIdentifiers:)](predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInGroup(withIdentifier:)](predicateforcontactsingroup%28withidentifier_%29.md): Returns a predicate to find the contacts that are members in the specified group.
- [predicateForContactsInContainer(withIdentifier:)](predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContacts(matching:)](predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
- [predicateForContacts(matchingEmailAddress:)](predicateforcontacts%28matchingemailaddress_%29.md): Returns a predicate to find the contacts whose email address matches the specified value.

# predicateForContactsMatchingName: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate to find the contacts matching the specified name.

## Declaration

```objectivec
+ (NSPredicate *) predicateForContactsMatchingName:(NSString *) name;
```

## Parameters

- `name`: The contact name to be matched.

<a id="Return-Value"></a>

## Return Value

A predicate that you can use to fetch contacts from [CNContactStore](../cncontactstore.md).

<a id="Discussion"></a>

## Discussion

The name can contain any number of words.

## See Also

### Getting Search Predicates

- [predicateForContactsWithIdentifiers:](predicateforcontacts%28withidentifiers_%29.md): Returns a predicate to find the contacts matching the specified identifiers.
- [predicateForContactsInGroupWithIdentifier:](predicateforcontactsingroup%28withidentifier_%29.md): Returns a predicate to find the contacts that are members in the specified group.
- [predicateForContactsInContainerWithIdentifier:](predicateforcontactsincontainer%28withidentifier_%29.md): Returns a predicate to find the contacts in the specified container.
- [predicateForContactsMatchingPhoneNumber:](predicateforcontacts%28matching_%29.md): Returns a predicate to find the contacts whose phone number matches the specified value.
- [predicateForContactsMatchingEmailAddress:](predicateforcontacts%28matchingemailaddress_%29.md): Returns a predicate to find the contacts whose email address matches the specified value.
