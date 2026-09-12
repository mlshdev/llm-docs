> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsasynchronousfetchresult/fetchrequest](https://developer.apple.com/documentation/coredata/nsasynchronousfetchresult/fetchrequest)

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The underlying fetch request that was executed.

## Declaration

```swift
var fetchRequest: NSAsynchronousFetchRequest<ResultType> { get }
```

## See Also

### Getting Information About a Result

- [finalResult](finalresult.md): The results that were received from the fetch request.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The underlying fetch request that was executed.

## Declaration

```objectivec
@property (strong, readonly) NSAsynchronousFetchRequest<id<NSFetchRequestResult>> * fetchRequest;
```

## See Also

### Getting Information About a Result

- [finalResult](finalresult.md): The results that were received from the fetch request.
