> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/appmigrationextension/appcontainer

# appContainer

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The data container of the containing app.

## Declaration

```swift
var appContainer: MigrationDataContainer { get }
```

<a id="discussion"></a>

## Discussion

To access the containing app’s data, your app requires the `com.apple.developer.app-migration.data-container-access` entitlement.

## Default Implementations

### AppMigrationExtension Implementations

- [appContainer](appcontainer-44kyi.md): The data container of the containing app.

## See Also

### Accessing migration data

- [MigrationDataContainer](../migrationdatacontainer.md): An object describing an app’s data container
