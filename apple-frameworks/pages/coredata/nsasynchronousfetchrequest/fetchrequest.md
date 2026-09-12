> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsasynchronousfetchrequest/fetchrequest](https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/fetchrequest)

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The underlying fetch request that is executed asynchronously.

## Declaration

```swift
var fetchRequest: NSFetchRequest<ResultType> { get }
```

## See Also

### Preparing a Request

- [completionBlock](completionblock.md): The block that is executed when the fetch request has completed.
- [estimatedResultCount](estimatedresultcount.md): A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The underlying fetch request that is executed asynchronously.

## Declaration

```objectivec
@property (strong, readonly) NSFetchRequest<id<NSFetchRequestResult>> * fetchRequest;
```

## See Also

### Preparing a Request

- [completionBlock](completionblock.md): The block that is executed when the fetch request has completed.
- [estimatedResultCount](estimatedresultcount.md): A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.
