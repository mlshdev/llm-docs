> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesexportingwithoptions/exportresources(to:request:)](https://developer.apple.com/documentation/appmigrationkit/resourcesexportingwithoptions/exportresources(to:request:))

# exportResources(to:request:)

**Framework:** AppMigrationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Exports resources from the app, in response to a request from the migration system.

## Declaration

```swift
func exportResources(to archiver: sending ResourcesArchiver, request: MigrationRequestWithOptions<Self.OptionsType>) async throws
```

## Parameters

- `archiver`: An archiver to receive files from your app. Call [appendItem(at:pathInArchive:)](../resourcesarchiver/appenditem%28at_pathinarchive_%29.md) with each item to export.
- `request`: A request object that describes the destination of the migration.

<a id="discussion"></a>

## Discussion

Implement this method in your app extension to export files from your app to the destination device.

## See Also

### Exporting resources

- [ResourcesArchiver](../resourcesarchiver.md): An object your app uses to archive resources during an export operation.
- [MigrationRequestWithOptions](../migrationrequestwithoptions.md): An object that exposes properties of the migration request.
