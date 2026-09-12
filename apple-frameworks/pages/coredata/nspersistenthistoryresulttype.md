> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistoryresulttype](https://developer.apple.com/documentation/coredata/nspersistenthistoryresulttype)

# NSPersistentHistoryResultType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The types of results from a persistent history change request.

## Declaration

```swift
enum NSPersistentHistoryResultType
```

## Topics

### Result Types

- [NSPersistentHistoryResultType.statusOnly](nspersistenthistoryresulttype/statusonly.md): The status of the persistent history change request.
- [NSPersistentHistoryResultType.count](nspersistenthistoryresulttype/count.md): The number of persistent history changes since the requested date, token, or transaction.
- [NSPersistentHistoryResultType.objectIDs](nspersistenthistoryresulttype/objectids.md): The identifiers of managed objects changed since the requested date, token, or transaction.
- [NSPersistentHistoryResultType.transactionsAndChanges](nspersistenthistoryresulttype/transactionsandchanges.md): The persistent history transactions and changes since the requested date, token, or transaction.
- [NSPersistentHistoryResultType.transactionsOnly](nspersistenthistoryresulttype/transactionsonly.md): The persistent history transactions since the requested date, token, or transaction.
- [NSPersistentHistoryResultType.changesOnly](nspersistenthistoryresulttype/changesonly.md): The persistent history changes since the requested date, token, or transaction.

### Initializers

- [init(rawValue:)](nspersistenthistoryresulttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting History Results

- [result](nspersistenthistoryresult/result.md): The result of the history request determined by the persistent history result type.
- [resultType](nspersistenthistoryresult/resulttype.md): The type of result that the persistent history change request returns.

# NSPersistentHistoryResultType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The types of results from a persistent history change request.

## Declaration

```objectivec
enum NSPersistentHistoryResultType : NSInteger;
```

## Topics

### Result Types

- [NSPersistentHistoryResultTypeStatusOnly](nspersistenthistoryresulttype/statusonly.md): The status of the persistent history change request.
- [NSPersistentHistoryResultTypeCount](nspersistenthistoryresulttype/count.md): The number of persistent history changes since the requested date, token, or transaction.
- [NSPersistentHistoryResultTypeObjectIDs](nspersistenthistoryresulttype/objectids.md): The identifiers of managed objects changed since the requested date, token, or transaction.
- [NSPersistentHistoryResultTypeTransactionsAndChanges](nspersistenthistoryresulttype/transactionsandchanges.md): The persistent history transactions and changes since the requested date, token, or transaction.
- [NSPersistentHistoryResultTypeTransactionsOnly](nspersistenthistoryresulttype/transactionsonly.md): The persistent history transactions since the requested date, token, or transaction.
- [NSPersistentHistoryResultTypeChangesOnly](nspersistenthistoryresulttype/changesonly.md): The persistent history changes since the requested date, token, or transaction.

## See Also

### Inspecting History Results

- [result](nspersistenthistoryresult/result.md): The result of the history request determined by the persistent history result type.
- [resultType](nspersistenthistoryresult/resulttype.md): The type of result that the persistent history change request returns.
