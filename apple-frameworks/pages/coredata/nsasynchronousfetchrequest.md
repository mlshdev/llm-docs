> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsasynchronousfetchrequest](https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest)

# NSAsynchronousFetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A fetch request that retrieves results asynchronously and supports progress notification.

## Declaration

```swift
class NSAsynchronousFetchRequest<ResultType> where ResultType : NSFetchRequestResult
```

## Topics

### Initializing a Request

- [init(fetchRequest:completionBlock:)](nsasynchronousfetchrequest/init%28fetchrequest_completionblock_%29.md): Initializes a new asynchronous fetch request configured with the provided fetch request and completion block.

### Preparing a Request

- [completionBlock](nsasynchronousfetchrequest/completionblock.md): The block that is executed when the fetch request has completed.
- [estimatedResultCount](nsasynchronousfetchrequest/estimatedresultcount.md): A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.
- [fetchRequest](nsasynchronousfetchrequest/fetchrequest.md): The underlying fetch request that is executed asynchronously.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fetch requests

- [NSFetchRequest](nsfetchrequest.md): A description of search criteria used to retrieve data from a persistent store.
- [NSAsynchronousFetchResult](nsasynchronousfetchresult.md): A fetch result object that encompasses the response from an executed asynchronous fetch request.
- [NSFetchedResultsController](nsfetchedresultscontroller.md): A controller that you use to manage the results of a Core Data fetch request and to display data to the user.

# NSAsynchronousFetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A fetch request that retrieves results asynchronously and supports progress notification.

## Declaration

```objectivec
@interface NSAsynchronousFetchRequest : NSPersistentStoreRequest
```

## Topics

### Initializing a Request

- [initWithFetchRequest:completionBlock:](nsasynchronousfetchrequest/init%28fetchrequest_completionblock_%29.md): Initializes a new asynchronous fetch request configured with the provided fetch request and completion block.

### Preparing a Request

- [completionBlock](nsasynchronousfetchrequest/completionblock.md): The block that is executed when the fetch request has completed.
- [estimatedResultCount](nsasynchronousfetchrequest/estimatedresultcount.md): A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.
- [fetchRequest](nsasynchronousfetchrequest/fetchrequest.md): The underlying fetch request that is executed asynchronously.

## Relationships

### Inherits From

- [NSPersistentStoreRequest](nspersistentstorerequest.md)

## See Also

### Fetch requests

- [NSFetchRequest](nsfetchrequest.md): A description of search criteria used to retrieve data from a persistent store.
- [NSAsynchronousFetchResult](nsasynchronousfetchresult.md): A fetch result object that encompasses the response from an executed asynchronous fetch request.
- [NSFetchedResultsController](nsfetchedresultscontroller.md): A controller that you use to manage the results of a Core Data fetch request and to display data to the user.
