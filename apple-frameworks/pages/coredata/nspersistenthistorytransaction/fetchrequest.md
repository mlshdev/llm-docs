> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction/fetchrequest](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/fetchrequest)

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A fetch request that has the persistent history transaction as the entity.

## Declaration

```swift
class var fetchRequest: NSFetchRequest<any NSFetchRequestResult>? { get }
```

## See Also

### Customizing History Fetch Requests

- [entityDescription](entitydescription.md): The entity description of the persistent history transaction entity.
- [entityDescription(with:)](entitydescription%28with_%29.md): Requests an entity description using the provided context for the managed object type affected by the transaction.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A fetch request that has the persistent history transaction as the entity.

## Declaration

```objectivec
@property (class, readonly, nullable) NSFetchRequest * fetchRequest;
```

## See Also

### Customizing History Fetch Requests

- [entityDescription](entitydescription.md): The entity description of the persistent history transaction entity.
- [entityDescriptionWithContext:](entitydescription%28with_%29.md): Requests an entity description using the provided context for the managed object type affected by the transaction.
