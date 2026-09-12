> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore/currenthistorytoken](https://developer.apple.com/documentation/contacts/cncontactstore/currenthistorytoken)

# currentHistoryToken (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The current history token.

## Declaration

```swift
var currentHistoryToken: Data? { get }
```

<a id="Discussion"></a>

## Discussion

When fetching contacts or change history events, use the token on [CNFetchResult](../cnfetchresult.md) instead.

# currentHistoryToken (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The current history token.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * currentHistoryToken;
```

<a id="Discussion"></a>

## Discussion

When fetching contacts or change history events, use the token on [CNFetchResult](../cnfetchresult.md) instead.

## See Also

### Fetching change history info

- [enumeratorForChangeHistoryFetchRequest:error:](enumeratorforchangehistoryfetchrequest_error_.md): Enumerates a change history fetch request.
