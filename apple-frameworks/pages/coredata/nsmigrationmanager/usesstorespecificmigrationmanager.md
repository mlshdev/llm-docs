> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationmanager/usesstorespecificmigrationmanager](https://developer.apple.com/documentation/coredata/nsmigrationmanager/usesstorespecificmigrationmanager)

# usesStoreSpecificMigrationManager (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the migration manager tries to use a store specific migration manager to perform the  migration.

## Declaration

```swift
var usesStoreSpecificMigrationManager: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses a store-specific migration manager, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses a store-specific migration manager, otherwise [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

A store-specific migration manager class is not guaranteed to perform any of the migration manager delegate callbacks or update values for the observable properties.

## See Also

### Customizing the Manager

- [userInfo](userinfo.md): The user info for the migration manager.

# usesStoreSpecificMigrationManager (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the migration manager tries to use a store specific migration manager to perform the  migration.

## Declaration

```objectivec
@property BOOL usesStoreSpecificMigrationManager;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses a store-specific migration manager, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses a store-specific migration manager, otherwise [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

A store-specific migration manager class is not guaranteed to perform any of the migration manager delegate callbacks or update values for the observable properties.

## See Also

### Customizing the Manager

- [userInfo](userinfo.md): The user info for the migration manager.
