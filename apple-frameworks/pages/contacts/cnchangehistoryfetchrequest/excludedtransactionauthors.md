> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryfetchrequest/excludedtransactionauthors](https://developer.apple.com/documentation/contacts/cnchangehistoryfetchrequest/excludedtransactionauthors)

# excludedTransactionAuthors (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An array of strings that identify transaction authors to exclude from the fetch results.

## Declaration

```swift
var excludedTransactionAuthors: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify authors using the same string(s) that you use in [CNSaveRequest](../cnsaverequest.md)’s [transactionAuthor](../cnsaverequest/transactionauthor.md) to suppress processing changes that you already know about.

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.

# excludedTransactionAuthors (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An array of strings that identify transaction authors to exclude from the fetch results.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * excludedTransactionAuthors;
```

<a id="Discussion"></a>

## Discussion

Specify authors using the same string(s) that you use in [CNSaveRequest](../cnsaverequest.md)’s [transactionAuthor](../cnsaverequest/transactionauthor.md) to suppress processing changes that you already know about.

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.
