> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangerequest/resulttype](https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/resulttype)

# resultType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type of result that this request returns.

## Declaration

```swift
var resultType: NSPersistentHistoryResultType { get set }
```

<a id="Discussion"></a>

## Discussion

This value defaults to [NSPersistentHistoryResultType.transactionsAndChanges](../nspersistenthistoryresulttype/transactionsandchanges.md).

## See Also

### Configuring the Request

- [fetchRequest](fetchrequest.md): The specified fetch request, when retrieving history.

# resultType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type of result that this request returns.

## Declaration

```objectivec
@property NSPersistentHistoryResultType resultType;
```

<a id="Discussion"></a>

## Discussion

This value defaults to [NSPersistentHistoryResultTypeTransactionsAndChanges](../nspersistenthistoryresulttype/transactionsandchanges.md).

## See Also

### Configuring the Request

- [fetchRequest](fetchrequest.md): The specified fetch request, when retrieving history.
