> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactsortorder](https://developer.apple.com/documentation/contacts/cncontactsortorder)

# CNContactSortOrder (Swift)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Indicates the sorting order for contacts.

## Declaration

```swift
enum CNContactSortOrder
```

<a id="overview"></a>

## Overview

The value [CNContactSortOrder.userDefault](cncontactsortorder/userdefault.md) is the user’s preferred sort order.

## Topics

### Sort Orders

- [CNContactSortOrder.none](cncontactsortorder/none.md): No sorting order.
- [CNContactSortOrder.userDefault](cncontactsortorder/userdefault.md): The user’s default sorting order.
- [CNContactSortOrder.givenName](cncontactsortorder/givenname.md): Sorting contacts by given name.
- [CNContactSortOrder.familyName](cncontactsortorder/familyname.md): Sorting contacts by family name.

### Initializers

- [init(rawValue:)](cncontactsortorder/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Comparing Contacts

- [descriptorForAllComparatorKeys()](cncontact/descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [comparator(forNameSortOrder:)](cncontact/comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [isUnifiedWithContact(withIdentifier:)](cncontact/isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.

# CNContactSortOrder (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Indicates the sorting order for contacts.

## Declaration

```objectivec
enum CNContactSortOrder : NSInteger;
```

<a id="overview"></a>

## Overview

The value [CNContactSortOrderUserDefault](cncontactsortorder/userdefault.md) is the user’s preferred sort order.

## Topics

### Sort Orders

- [CNContactSortOrderNone](cncontactsortorder/none.md): No sorting order.
- [CNContactSortOrderUserDefault](cncontactsortorder/userdefault.md): The user’s default sorting order.
- [CNContactSortOrderGivenName](cncontactsortorder/givenname.md): Sorting contacts by given name.
- [CNContactSortOrderFamilyName](cncontactsortorder/familyname.md): Sorting contacts by family name.

## See Also

### Comparing Contacts

- [descriptorForAllComparatorKeys](cncontact/descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [comparatorForNameSortOrder:](cncontact/comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [isUnifiedWithContactWithIdentifier:](cncontact/isunifiedwithcontact%28withidentifier_%29.md): Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.
