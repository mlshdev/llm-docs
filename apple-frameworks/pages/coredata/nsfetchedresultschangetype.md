> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultschangetype](https://developer.apple.com/documentation/coredata/nsfetchedresultschangetype)

# NSFetchedResultsChangeType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that specify the possible types of changes that are reported.

## Declaration

```swift
enum NSFetchedResultsChangeType
```

## Topics

### Constants

- [NSFetchedResultsChangeType.insert](nsfetchedresultschangetype/insert.md): Specifies that an object was inserted.
- [NSFetchedResultsChangeType.delete](nsfetchedresultschangetype/delete.md): Specifies that an object was deleted.
- [NSFetchedResultsChangeType.move](nsfetchedresultschangetype/move.md): Specifies that an object was moved.
- [NSFetchedResultsChangeType.update](nsfetchedresultschangetype/update.md): Specifies that an object was changed.

### Initializers

- [init(rawValue:)](nsfetchedresultschangetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to Changes

- [NSFetchedResultsControllerDelegate](nsfetchedresultscontrollerdelegate.md): A delegate protocol that describes the methods that the associated fetched results controller calls when the fetch results change.
- [NSFetchedResultsSectionInfo](nsfetchedresultssectioninfo.md): A protocol that defines the interface for section objects vended by a fetched results controller.
- [NSFetchRequestResultType](nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

# NSFetchedResultsChangeType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Constants that specify the possible types of changes that are reported.

## Declaration

```objectivec
enum NSFetchedResultsChangeType : NSUInteger;
```

## Topics

### Constants

- [NSFetchedResultsChangeInsert](nsfetchedresultschangetype/insert.md): Specifies that an object was inserted.
- [NSFetchedResultsChangeDelete](nsfetchedresultschangetype/delete.md): Specifies that an object was deleted.
- [NSFetchedResultsChangeMove](nsfetchedresultschangetype/move.md): Specifies that an object was moved.
- [NSFetchedResultsChangeUpdate](nsfetchedresultschangetype/update.md): Specifies that an object was changed.

## See Also

### Responding to Changes

- [NSFetchedResultsControllerDelegate](nsfetchedresultscontrollerdelegate.md): A delegate protocol that describes the methods that the associated fetched results controller calls when the fetch results change.
- [NSFetchedResultsSectionInfo](nsfetchedresultssectioninfo.md): A protocol that defines the interface for section objects vended by a fetched results controller.
- [NSFetchRequestResultType](nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.
