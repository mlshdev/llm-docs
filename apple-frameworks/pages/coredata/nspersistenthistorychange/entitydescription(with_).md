> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychange/entitydescription(with:)](https://developer.apple.com/documentation/coredata/nspersistenthistorychange/entitydescription(with:))

# entityDescription(with:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests an entity description for the managed object type affected by the change using the provided context.

## Declaration

```swift
class func entityDescription(with context: NSManagedObjectContext) -> NSEntityDescription?
```

## Parameters

- `context`: The managed object context for this request.

<a id="return-value"></a>

## Return Value

The entity description ([NSEntityDescription](../nsentitydescription.md)) of the persistent history transaction entity.

## See Also

### Inspecting Change Metadata

- [fetchRequest](fetchrequest.md): A fetch request that has the persistent history change as the entity.
- [entityDescription](entitydescription.md): The entity description of the persistent history change entity.

# entityDescriptionWithContext: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Requests an entity description for the managed object type affected by the change using the provided context.

## Declaration

```objectivec
+ (NSEntityDescription *) entityDescriptionWithContext:(NSManagedObjectContext *) context;
```

## Parameters

- `context`: The managed object context for this request.

<a id="return-value"></a>

## Return Value

The entity description ([NSEntityDescription](../nsentitydescription.md)) of the persistent history transaction entity.

## See Also

### Inspecting Change Metadata

- [fetchRequest](fetchrequest.md): A fetch request that has the persistent history change as the entity.
- [entityDescription](entitydescription.md): The entity description of the persistent history change entity.
