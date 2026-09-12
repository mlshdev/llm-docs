> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitymapping/userinfo](https://developer.apple.com/documentation/coredata/nsentitymapping/userinfo)

# userInfo (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user info dictionary for the entity mapping.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the info dictionary in any way that might be useful in your migration. You can set the contents of the dictionary directory or using the appropriate inspector in the Xcode mapping model editor.

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.

# userInfo (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user info dictionary for the entity mapping.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

You can use the info dictionary in any way that might be useful in your migration. You can set the contents of the dictionary directory or using the appropriate inspector in the Xcode mapping model editor.

## See Also

### Managing Mapping Information

- [name](name.md): The name of the entity mapping.
- [mappingType](mappingtype.md): The mapping type for the entity mapping.
- [entityMigrationPolicyClassName](entitymigrationpolicyclassname.md): The class name of the migration policy for the entity mapping.
- [attributeMappings](attributemappings.md): The array of attribute mappings for the entity mapping.
- [relationshipMappings](relationshipmappings.md): The array of relationship mappings for the entity mapping.
