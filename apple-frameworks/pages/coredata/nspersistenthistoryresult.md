> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistoryresult](https://developer.apple.com/documentation/coredata/nspersistenthistoryresult)

# NSPersistentHistoryResult (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The result of a request to fetch persistent history.

## Declaration

```swift
class NSPersistentHistoryResult
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Inspecting History Results

- [result](nspersistenthistoryresult/result.md): The result of the history request determined by the persistent history result type.
- [resultType](nspersistenthistoryresult/resulttype.md): The type of result that the persistent history change request returns.
- [NSPersistentHistoryResultType](nspersistenthistoryresulttype.md): The types of results from a persistent history change request.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Requesting History

- [NSPersistentHistoryChangeRequest](nspersistenthistorychangerequest.md): A request to fetch or purge persistent history.

# NSPersistentHistoryResult (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The result of a request to fetch persistent history.

## Declaration

```objectivec
@interface NSPersistentHistoryResult : NSPersistentStoreResult
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Inspecting History Results

- [result](nspersistenthistoryresult/result.md): The result of the history request determined by the persistent history result type.
- [resultType](nspersistenthistoryresult/resulttype.md): The type of result that the persistent history change request returns.
- [NSPersistentHistoryResultType](nspersistenthistoryresulttype.md): The types of results from a persistent history change request.

## Relationships

### Inherits From

- [NSPersistentStoreResult](nspersistentstoreresult.md)

## See Also

### Requesting History

- [NSPersistentHistoryChangeRequest](nspersistenthistorychangerequest.md): A request to fetch or purge persistent history.
