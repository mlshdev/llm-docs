> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/comparator(fornamesortorder:)](https://developer.apple.com/documentation/contacts/cncontact/comparator(fornamesortorder:))

# comparator(forNameSortOrder:) (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a comparator to sort contacts with the specified order.

## Declaration

```swift
class func comparator(forNameSortOrder sortOrder: CNContactSortOrder) -> Comparator
```

## Parameters

- `sortOrder`: The preferred sort order, such as by given name.

<a id="Return-Value"></a>

## Return Value

A comparator to order contacts.

## See Also

### Comparing Contacts

- [descriptorForAllComparatorKeys()](descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [isUnifiedWithContact(withIdentifier:)](isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.

# comparatorForNameSortOrder: (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a comparator to sort contacts with the specified order.

## Declaration

```objectivec
+ (NSComparator) comparatorForNameSortOrder:(CNContactSortOrder) sortOrder;
```

## Parameters

- `sortOrder`: The preferred sort order, such as by given name.

<a id="Return-Value"></a>

## Return Value

A comparator to order contacts.

## See Also

### Comparing Contacts

- [descriptorForAllComparatorKeys](descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [isUnifiedWithContactWithIdentifier:](isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.
