> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytransaction/entitydescription](https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/entitydescription)

# entityDescription (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The entity description of the persistent history transaction entity.

## Declaration

```swift
class var entityDescription: NSEntityDescription? { get }
```

<a id="Discussion"></a>

## Discussion

The entity description of [NSPersistentHistoryTransaction](../nspersistenthistorytransaction.md) lists the properties of the persistent history change. This can be useful for filtering your request.

## See Also

### Customizing History Fetch Requests

- [fetchRequest](fetchrequest.md): A fetch request that has the persistent history transaction as the entity.
- [entityDescription(with:)](entitydescription%28with_%29.md): Requests an entity description using the provided context for the managed object type affected by the transaction.

# entityDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The entity description of the persistent history transaction entity.

## Declaration

```objectivec
@property (class, readonly, nullable) NSEntityDescription * entityDescription;
```

<a id="Discussion"></a>

## Discussion

The entity description of [NSPersistentHistoryTransaction](../nspersistenthistorytransaction.md) lists the properties of the persistent history change. This can be useful for filtering your request.

## See Also

### Customizing History Fetch Requests

- [fetchRequest](fetchrequest.md): A fetch request that has the persistent history transaction as the entity.
- [entityDescriptionWithContext:](entitydescription%28with_%29.md): Requests an entity description using the provided context for the managed object type affected by the transaction.
