> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/isunifiedwithcontact(withidentifier:)](https://developer.apple.com/documentation/contacts/cncontact/isunifiedwithcontact(withidentifier:))

# isUnifiedWithContact(withIdentifier:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.

## Declaration

```swift
func isUnifiedWithContact(withIdentifier contactIdentifier: String) -> Bool
```

## Parameters

- `contactIdentifier`: An identifier for an existing contact. If this string is empty, the method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current contact is a unified contact and if `contactIdentifier` represents one of the contacts that contributes to the unified information; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Contacts

- [descriptorForAllComparatorKeys()](descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [comparator(forNameSortOrder:)](comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.

# isUnifiedWithContactWithIdentifier: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean indicating whether the current contact is a unified contact and includes a contact with the specified identifier.

## Declaration

```objectivec
- (BOOL) isUnifiedWithContactWithIdentifier:(NSString *) contactIdentifier;
```

## Parameters

- `contactIdentifier`: An identifier for an existing contact. If this string is empty, the method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Return-Value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current contact is a unified contact and if `contactIdentifier` represents one of the contacts that contributes to the unified information; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Contacts

- [descriptorForAllComparatorKeys](descriptorforallcomparatorkeys%28%29.md): Fetches all the keys required for the contact sort comparator.
- [comparatorForNameSortOrder:](comparator%28fornamesortorder_%29.md): Returns a comparator to sort contacts with the specified order.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.
