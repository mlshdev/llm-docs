> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryfetchrequest/additionalcontactkeydescriptors](https://developer.apple.com/documentation/contacts/cnchangehistoryfetchrequest/additionalcontactkeydescriptors)

# additionalContactKeyDescriptors (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.

## Declaration

```swift
var additionalContactKeyDescriptors: [any CNKeyDescriptor]? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the system only fetches [CNContactIdentifierKey](../cncontactidentifierkey.md) if you do not include a list of additional key descriptors. The system always fetches [CNContactIdentifierKey](../cncontactidentifierkey.md), whether you request it or not.

For a list of possible keys, see [Contact Keys](../contact-keys.md).

## See Also

### Configuring the fetch request

- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.

# additionalContactKeyDescriptors (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<id<CNKeyDescriptor>> * additionalContactKeyDescriptors;
```

<a id="Discussion"></a>

## Discussion

By default, the system only fetches [CNContactIdentifierKey](../cncontactidentifierkey.md) if you do not include a list of additional key descriptors. The system always fetches [CNContactIdentifierKey](../cncontactidentifierkey.md), whether you request it or not.

For a list of possible keys, see [Contact Keys](../contact-keys.md).

## See Also

### Configuring the fetch request

- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.
