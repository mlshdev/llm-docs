> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/estimatedresultcount

# estimatedResultCount (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.

## Declaration

```swift
var estimatedResultCount: Int { get set }
```

## See Also

### Preparing a Request

- [completionBlock](completionblock.md): The block that is executed when the fetch request has completed.
- [fetchRequest](fetchrequest.md): The underlying fetch request that is executed asynchronously.

# estimatedResultCount (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A configuration parameter that assists Core Data with scheduling the asynchronous fetch request.

## Declaration

```objectivec
@property (nonatomic) NSInteger estimatedResultCount;
```

## See Also

### Preparing a Request

- [completionBlock](completionblock.md): The block that is executed when the fetch request has completed.
- [fetchRequest](fetchrequest.md): The underlying fetch request that is executed asynchronously.
