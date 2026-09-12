> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsasynchronousfetchrequest/completionblock](https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/completionblock)

# completionBlock (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The block that is executed when the fetch request has completed.

## Declaration

```swift
var completionBlock: NSPersistentStoreAsynchronousFetchResultCompletionBlock? { get }
```

## See Also

### Preparing a Request

- [estimatedResultCount](estimatedresultcount.md): A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.
- [fetchRequest](fetchrequest.md): The underlying fetch request that is executed asynchronously.

# completionBlock (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The block that is executed when the fetch request has completed.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSPersistentStoreAsynchronousFetchResultCompletionBlock completionBlock;
```

## See Also

### Preparing a Request

- [estimatedResultCount](estimatedresultcount.md): A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.
- [fetchRequest](fetchrequest.md): The underlying fetch request that is executed asynchronously.
