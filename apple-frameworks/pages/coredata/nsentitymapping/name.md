> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/name](https://developer.apple.com/documentation/coredata/nsentitymapping/name)

# name (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the entity mapping.

## Declaration

```swift
var name: String! { get set }
```

<a id="Discussion"></a>

## Discussion

The name is used only as a means of distinguishing mappings in a model. If not specified, the value defaults to SOURCE-\>DESTINATION.

## See Also

### Managing Mapping Information

- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.

# name (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the entity mapping.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The name is used only as a means of distinguishing mappings in a model. If not specified, the value defaults to SOURCE-\>DESTINATION.

## See Also

### Managing Mapping Information

- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
- [userInfo](userinfo.md): The user info dictionary for the entity mapping.
