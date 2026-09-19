> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistenthistorychange/fetchrequest

# fetchRequest (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A fetch request that has the persistent history change as the entity.

## Declaration

```swift
class var fetchRequest: NSFetchRequest<any NSFetchRequestResult>? { get }
```

## See Also

### Inspecting Change Metadata

- [entityDescription](entitydescription.md): The entity description of the persistent history change entity.
- [entityDescription(with:)](entitydescription%28with_%29.md): Requests an entity description for the managed object type affected by the change using the provided context.

# fetchRequest (Objective-C)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A fetch request that has the persistent history change as the entity.

## Declaration

```objectivec
@property (class, readonly, nullable) NSFetchRequest * fetchRequest;
```

## See Also

### Inspecting Change Metadata

- [entityDescription](entitydescription.md): The entity description of the persistent history change entity.
- [entityDescriptionWithContext:](entitydescription%28with_%29.md): Requests an entity description for the managed object type affected by the change using the provided context.
