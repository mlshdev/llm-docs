> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/userinfo](https://developer.apple.com/documentation/coredata/nsmigrationmanager/userinfo)

# userInfo (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user info for the migration manager.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the user info dictionary to aid the customization of your migration process.

## See Also

### Customizing the Manager

- [usesStoreSpecificMigrationManager](usesstorespecificmigrationmanager.md): A Boolean value that indicates whether the migration manager tries to use a store specific migration manager to perform the migration.

# userInfo (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user info for the migration manager.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

You can use the user info dictionary to aid the customization of your migration process.

## See Also

### Customizing the Manager

- [usesStoreSpecificMigrationManager](usesstorespecificmigrationmanager.md): A Boolean value that indicates whether the migration manager tries to use a store specific migration manager to perform the migration.
