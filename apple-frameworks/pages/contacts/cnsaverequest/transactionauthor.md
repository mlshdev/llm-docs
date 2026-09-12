> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/transactionauthor](https://developer.apple.com/documentation/contacts/cnsaverequest/transactionauthor)

# transactionAuthor (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A string that identifies the author of the transaction.

## Declaration

```swift
var transactionAuthor: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a string to identify a transaction author when you save changes. Then, when you configure a [CNChangeHistoryFetchRequest](../cnchangehistoryfetchrequest.md), provide the same string in [excludedTransactionAuthors](../cnchangehistoryfetchrequest/excludedtransactionauthors.md) to prevent fetching changes that the author already knows about.

## See Also

### Configuring the save request

- [shouldRefetchContacts](shouldrefetchcontacts.md): A Boolean value that indicates whether to refetch the added and updated contacts after the save request executes.

# transactionAuthor (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A string that identifies the author of the transaction.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * transactionAuthor;
```

<a id="Discussion"></a>

## Discussion

Specify a string to identify a transaction author when you save changes. Then, when you configure a [CNChangeHistoryFetchRequest](../cnchangehistoryfetchrequest.md), provide the same string in [excludedTransactionAuthors](../cnchangehistoryfetchrequest/excludedtransactionauthors.md) to prevent fetching changes that the author already knows about.

## See Also

### Configuring the save request

- [shouldRefetchContacts](shouldrefetchcontacts.md): A Boolean value that indicates whether to refetch the added and updated contacts after the save request executes.
