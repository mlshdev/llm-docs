> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsasynchronousfetchresult/finalresult

# finalResult (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The results that were received from the fetch request.

## Declaration

```swift
var finalResult: [ResultType]? { get }
```

## See Also

### Getting Information About a Result

- [fetchRequest](fetchrequest.md): The underlying fetch request that was executed.

# finalResult (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The results that were received from the fetch request.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSArray<id<NSFetchRequestResult>> * finalResult;
```

## See Also

### Getting Information About a Result

- [fetchRequest](fetchrequest.md): The underlying fetch request that was executed.
