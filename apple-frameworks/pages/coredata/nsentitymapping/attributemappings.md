> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/attributemappings](https://developer.apple.com/documentation/coredata/nsentitymapping/attributemappings)

# attributeMappings (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The array of attribute mappings for the entity mapping.

## Declaration

```swift
var attributeMappings: [NSPropertyMapping]? { get set }
```

<a id="Discussion"></a>

## Discussion

The order of mappings in the array specifies the order in which the mappings will be processed during a migration.

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.

# attributeMappings (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The array of attribute mappings for the entity mapping.

## Declaration

```objectivec
@property (strong, nullable) NSArray<NSPropertyMapping *> * attributeMappings;
```

<a id="Discussion"></a>

## Discussion

The order of mappings in the array specifies the order in which the mappings will be processed during a migration.

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.
