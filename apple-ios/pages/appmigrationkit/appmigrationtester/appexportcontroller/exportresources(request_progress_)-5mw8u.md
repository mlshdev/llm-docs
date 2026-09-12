> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/appexportcontroller/exportresources(request:progress:)-5mw8u](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/appexportcontroller/exportresources(request:progress:)-5mw8u)

# exportResources(request:progress:)

**Framework:** AppMigrationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells the migration extension to begin exporting its resources.

## Declaration

```swift
final func exportResources(request: MigrationRequest? = nil, progress: Progress? = nil) async throws -> AppMigrationTester.ResourcesExportResult
```

## Parameters

- `request`: An optional migration request instance to pass to the app extension’s export method. This value defaults to `nil`.
- `progress`: An optional [Progress](https://developer.apple.com/documentation/foundation/progress) object the extension uses to report its progress back to the unit test. This value defaults to `nil`.

<a id="return-value"></a>

## Return Value

The results of the export.

## See Also

### Testing resource export

- [exportResources(request:progress:)](exportresources%28request_progress_%29-15m4v.md): Tells the migration extension to begin exporting its resources, using options defined by the destination platform.
- [AppMigrationTester.ResourcesExportResult](../resourcesexportresult.md): The result of exporting resources to another device.
