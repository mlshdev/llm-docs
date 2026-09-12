> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationrequestwithoptions](https://developer.apple.com/documentation/appmigrationkit/migrationrequestwithoptions)

# MigrationRequestWithOptions

**Framework:** AppMigrationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object that exposes properties of the migration request.

## Declaration

```swift
struct MigrationRequestWithOptions<OptionsType> where OptionsType : CaseIterable, OptionsType : Hashable, OptionsType : RawRepresentable, OptionsType : Sendable, OptionsType.RawValue == String
```

## Topics

### Creating a migration request instance

- [init(destinationPlatform:options:)](migrationrequestwithoptions/init%28destinationplatform_options_%29.md): Creates a request instance.

### Inspecting migration request properties

- [destinationPlatform](migrationrequestwithoptions/destinationplatform.md): The destination platform of the migration request.
- [MigrationPlatform](migrationplatform.md): A type that identifies the platform used by the other device in a migration.
- [options](migrationrequestwithoptions/options.md): Export options requested by the destination device.

### Declaring default options

- [MigrationDefaultSupportedOptions](migrationdefaultsupportedoptions.md): Options supported by default for migration requests.
- [MigrationRequest](migrationrequest.md): A migration request that uses the default supported options.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Exporting resources

- [exportResources(to:request:)](resourcesexportingwithoptions/exportresources%28to_request_%29.md): Exports resources from the app, in response to a request from the migration system.
- [ResourcesArchiver](resourcesarchiver.md): An object your app uses to archive resources during an export operation.
