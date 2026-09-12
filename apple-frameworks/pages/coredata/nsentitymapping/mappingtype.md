> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/mappingtype](https://developer.apple.com/documentation/coredata/nsentitymapping/mappingtype)

# mappingType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The mapping type for the entity mapping.

## Declaration

```swift
var mappingType: NSEntityMappingType { get set }
```

<a id="Discussion"></a>

## Discussion

If you specify a custom entity mapping type, you must specify a value for the migration policy class name as well (see [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md)).

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.

# mappingType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The mapping type for the entity mapping.

## Declaration

```objectivec
@property NSEntityMappingType mappingType;
```

<a id="Discussion"></a>

## Discussion

If you specify a custom entity mapping type, you must specify a value for the migration policy class name as well (see [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md)).

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.
