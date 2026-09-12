> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryfetchrequest/shouldunifyresults](https://developer.apple.com/documentation/contacts/cnchangehistoryfetchrequest/shouldunifyresults)

# shouldUnifyResults (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the fetch should return contact changes as unified contacts.

## Declaration

```swift
var shouldUnifyResults: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the fetch returns unified contact history. Otherwise the system returns individual contact history. A unified contact is the aggregation of properties from a set of linked individual contacts. If an individual contact is not linked then the unified contact is simply that individual contact.

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.

# shouldUnifyResults (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the fetch should return contact changes as unified contacts.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldUnifyResults;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the fetch returns unified contact history. Otherwise the system returns individual contact history. A unified contact is the aggregation of properties from a set of linked individual contacts. If an individual contact is not linked then the unified contact is simply that individual contact.

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.
