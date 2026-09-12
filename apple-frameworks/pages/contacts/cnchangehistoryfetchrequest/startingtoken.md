> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryfetchrequest/startingtoken](https://developer.apple.com/documentation/contacts/cnchangehistoryfetchrequest/startingtoken)

# startingToken (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An opaque token that indicates a point in history in the user’s Contacts database.

## Declaration

```swift
var startingToken: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify [nil](../../objectivec/nil-227m0.md) to receive a [CNChangeHistoryDropEverythingEvent](../cnchangehistorydropeverythingevent.md), followed by an add event for every contact and group in the Contacts database.

Save the [currentHistoryToken](../cnfetchresult/currenthistorytoken.md) from a successful fetch result in your app, then specify it here to receive changes after that point in history.

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.

# startingToken (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An opaque token that indicates a point in history in the user’s Contacts database.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * startingToken;
```

<a id="Discussion"></a>

## Discussion

Specify [nil](../../objectivec/nil-227m0.md) to receive a [CNChangeHistoryDropEverythingEvent](../cnchangehistorydropeverythingevent.md), followed by an add event for every contact and group in the Contacts database.

Save the [currentHistoryToken](../cnfetchresult/currenthistorytoken.md) from a successful fetch result in your app, then specify it here to receive changes after that point in history.

## See Also

### Configuring the fetch request

- [additionalContactKeyDescriptors](additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
