> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsasynchronousfetchresult](https://developer.apple.com/documentation/coredata/nsasynchronousfetchresult)

# NSAsynchronousFetchResult (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A fetch result object that encompasses the response from an executed asynchronous fetch request.

## Declaration

```swift
class NSAsynchronousFetchResult<ResultType> where ResultType : NSFetchRequestResult
```

## Topics

### Getting Information About a Result

- [fetchRequest](nsasynchronousfetchresult/fetchrequest.md): The underlying fetch request that was executed.
- [finalResult](nsasynchronousfetchresult/finalresult.md): The results that were received from the fetch request.

## Relationships

### Inherits From

- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fetch requests

- [NSFetchRequest](nsfetchrequest.md): A description of search criteria used to retrieve data from a persistent store.
- [NSAsynchronousFetchRequest](nsasynchronousfetchrequest.md): A fetch request that retrieves results asynchronously and supports progress notification.
- [NSFetchedResultsController](nsfetchedresultscontroller.md): A controller that you use to manage the results of a Core Data fetch request and to display data to the user.

# NSAsynchronousFetchResult (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A fetch result object that encompasses the response from an executed asynchronous fetch request.

## Declaration

```objectivec
@interface NSAsynchronousFetchResult : NSPersistentStoreAsynchronousResult
```

## Topics

### Getting Information About a Result

- [fetchRequest](nsasynchronousfetchresult/fetchrequest.md): The underlying fetch request that was executed.
- [finalResult](nsasynchronousfetchresult/finalresult.md): The results that were received from the fetch request.

## Relationships

### Inherits From

- [NSPersistentStoreAsynchronousResult](nspersistentstoreasynchronousresult.md)

## See Also

### Fetch requests

- [NSFetchRequest](nsfetchrequest.md): A description of search criteria used to retrieve data from a persistent store.
- [NSAsynchronousFetchRequest](nsasynchronousfetchrequest.md): A fetch request that retrieves results asynchronously and supports progress notification.
- [NSFetchedResultsController](nsfetchedresultscontroller.md): A controller that you use to manage the results of a Core Data fetch request and to display data to the user.
