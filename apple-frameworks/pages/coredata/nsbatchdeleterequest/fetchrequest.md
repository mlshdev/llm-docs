> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/fetchrequest

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fetch request that identifies the managed objects to delete.

## Declaration

```swift
@NSCopying var fetchRequest: NSFetchRequest<any NSFetchRequestResult> { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the fetch request that identifies the managed objects to delete. If you initialize `NSBatchDeleteRequest` with an array of [NSManagedObjectID](../nsmanagedobjectid.md), Core Data automatically generates a fetch request with a predicate that matches the identifiers in that array.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fetch request that identifies the managed objects to delete.

## Declaration

```objectivec
@property (copy, readonly) NSFetchRequest * fetchRequest;
```

<a id="Discussion"></a>

## Discussion

This property contains the fetch request that identifies the managed objects to delete. If you initialize `NSBatchDeleteRequest` with an array of [NSManagedObjectID](../nsmanagedobjectid.md), Core Data automatically generates a fetch request with a predicate that matches the identifiers in that array.
