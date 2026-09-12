> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/descriptorforallcomparatorkeys()](https://developer.apple.com/documentation/contacts/cncontact/descriptorforallcomparatorkeys())

# descriptorForAllComparatorKeys() (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches all the keys required for the contact sort comparator.

## Declaration

```swift
class func descriptorForAllComparatorKeys() -> any CNKeyDescriptor
```

<a id="Return-Value"></a>

## Return Value

A descriptor object that defines the keys required by the sort comparator.

<a id="Discussion"></a>

## Discussion

Use the returned object to specify the keys you want to fetch from the database. For example, use it when creating a [CNContactFetchRequest](../cncontactfetchrequest.md) object.

## See Also

### Comparing Contacts

- [comparator(forNameSortOrder:)](comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [isUnifiedWithContact(withIdentifier:)](isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.

# descriptorForAllComparatorKeys (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Fetches all the keys required for the contact sort comparator.

## Declaration

```objectivec
+ (id<CNKeyDescriptor>) descriptorForAllComparatorKeys;
```

<a id="Return-Value"></a>

## Return Value

A descriptor object that defines the keys required by the sort comparator.

<a id="Discussion"></a>

## Discussion

Use the returned object to specify the keys you want to fetch from the database. For example, use it when creating a [CNContactFetchRequest](../cncontactfetchrequest.md) object.

## See Also

### Comparing Contacts

- [comparatorForNameSortOrder:](comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [isUnifiedWithContactWithIdentifier:](isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.
