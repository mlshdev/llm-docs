> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryfetchrequest/includegroupchanges](https://developer.apple.com/documentation/contacts/cnchangehistoryfetchrequest/includegroupchanges)

# includeGroupChanges (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the fetch should also return group changes.

## Declaration

```swift
var includeGroupChanges: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Specify [true](https://developer.apple.com/documentation/swift/true) to receive group changes. Default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.

# includeGroupChanges (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the fetch should also return group changes.

## Declaration

```objectivec
@property (nonatomic) BOOL includeGroupChanges;
```

<a id="Discussion"></a>

## Discussion

Specify [true](https://developer.apple.com/documentation/swift/true) to receive group changes. Default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.
