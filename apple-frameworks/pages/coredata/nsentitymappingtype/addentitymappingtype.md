> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymappingtype/addentitymappingtype](https://developer.apple.com/documentation/coredata/nsentitymappingtype/addentitymappingtype)

# NSEntityMappingType.addEntityMappingType (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that this is a new entity in the destination model.

## Declaration

```swift
case addEntityMappingType
```

<a id="Discussion"></a>

## Discussion

Instances of the entity only exist in the destination.

## See Also

### Constants

- [NSEntityMappingType.undefinedEntityMappingType](undefinedentitymappingtype.md): Specifies that the developer handles destination instance creation.
- [NSEntityMappingType.customEntityMappingType](customentitymappingtype.md): Specifies a custom mapping.
- [NSEntityMappingType.removeEntityMappingType](removeentitymappingtype.md): Specifies that this entity is not present in the destination model.
- [NSEntityMappingType.copyEntityMappingType](copyentitymappingtype.md): Specifies that source instances are migrated as-is.
- [NSEntityMappingType.transformEntityMappingType](transformentitymappingtype.md): Specifies that entity exists in source and destination and is mapped.

# NSAddEntityMappingType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that this is a new entity in the destination model.

## Declaration

```objectivec
NSAddEntityMappingType
```

<a id="Discussion"></a>

## Discussion

Instances of the entity only exist in the destination.

## See Also

### Constants

- [NSUndefinedEntityMappingType](undefinedentitymappingtype.md): Specifies that the developer handles destination instance creation.
- [NSCustomEntityMappingType](customentitymappingtype.md): Specifies a custom mapping.
- [NSRemoveEntityMappingType](removeentitymappingtype.md): Specifies that this entity is not present in the destination model.
- [NSCopyEntityMappingType](copyentitymappingtype.md): Specifies that source instances are migrated as-is.
- [NSTransformEntityMappingType](transformentitymappingtype.md): Specifies that entity exists in source and destination and is mapped.
