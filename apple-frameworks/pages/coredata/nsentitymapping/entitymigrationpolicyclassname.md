> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/entitymigrationpolicyclassname](https://developer.apple.com/documentation/coredata/nsentitymapping/entitymigrationpolicyclassname)

# entityMigrationPolicyClassName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The class name of the migration policy for the entity mapping.

## Declaration

```swift
var entityMigrationPolicyClassName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If not specified, the default migration class name is [NSEntityMigrationPolicy](../nsentitymigrationpolicy.md). You can specify a subclass to provide custom behavior.

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.

# entityMigrationPolicyClassName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The class name of the migration policy for the entity mapping.

## Declaration

```objectivec
@property (copy, nullable) NSString * entityMigrationPolicyClassName;
```

<a id="Discussion"></a>

## Discussion

If not specified, the default migration class name is [NSEntityMigrationPolicy](../nsentitymigrationpolicy.md). You can specify a subclass to provide custom behavior.

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.
