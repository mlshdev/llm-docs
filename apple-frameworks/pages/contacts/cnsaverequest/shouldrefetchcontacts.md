> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest/shouldrefetchcontacts](https://developer.apple.com/documentation/contacts/cnsaverequest/shouldrefetchcontacts)

# shouldRefetchContacts (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · visionOS 1.0+

A Boolean value that indicates whether to refetch the added and updated contacts after the save request executes.

## Declaration

```swift
var shouldRefetchContacts: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), so the save request refetches added and updated contacts. Set to [false](https://developer.apple.com/documentation/swift/false) to suppress the refetch behavior and reduce the save request’s execution time.

## See Also

### Configuring the save request

- [transactionAuthor](transactionauthor.md): A string that identifies the author of the transaction.

# shouldRefetchContacts (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · visionOS 1.0+

A Boolean value that indicates whether to refetch the added and updated contacts after the save request executes.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldRefetchContacts;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), so the save request refetches added and updated contacts. Set to [false](https://developer.apple.com/documentation/swift/false) to suppress the refetch behavior and reduce the save request’s execution time.

## See Also

### Configuring the save request

- [transactionAuthor](transactionauthor.md): A string that identifies the author of the transaction.
