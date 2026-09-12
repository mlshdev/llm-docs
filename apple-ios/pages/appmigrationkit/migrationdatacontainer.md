> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationdatacontainer](https://developer.apple.com/documentation/appmigrationkit/migrationdatacontainer)

# MigrationDataContainer

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object describing an app’s data container

## Declaration

```swift
struct MigrationDataContainer
```

## Topics

### Identifying the app

- [bundleIdentifier](migrationdatacontainer/bundleidentifier.md): The app’s bundle identifier.

### Accessing app directories

- [containerRootDirectory](migrationdatacontainer/containerrootdirectory.md): The root container directory of the app.
- [applicationSupportDirectory](migrationdatacontainer/applicationsupportdirectory.md): The application support directory within the container.
- [documentsDirectory](migrationdatacontainer/documentsdirectory.md): The documents directory within the app container.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing migration data

- [appContainer](appmigrationextension/appcontainer.md): The data container of the containing app.
