> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesimportrequest](https://developer.apple.com/documentation/appmigrationkit/resourcesimportrequest)

# ResourcesImportRequest

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that exposes properties of the resources import request.

## Declaration

```swift
struct ResourcesImportRequest
```

## Topics

### Creating an import request for testing

- [init(sourceAppIdentifier:sourceVersion:)](resourcesimportrequest/init%28sourceappidentifier_sourceversion_%29.md): Creates a resources import request instance for use in a unit test.

### Inspecting import request properties

- [sourceAppIdentifier](resourcesimportrequest/sourceappidentifier.md): The application that exported the content.
- [MigrationAppIdentifier](migrationappidentifier.md): A type that identifies an app on a different platform.
- [sourceVersion](resourcesimportrequest/sourceversion.md): The data format version provided by the source application.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Importing resources

- [importResources(at:request:)](resourcesimporting/importresources%28at_request_%29.md): Imports resources to the app, in response to a request from the migration system.
