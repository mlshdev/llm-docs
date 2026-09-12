> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/appimportcontroller/importresources(from:importrequest:progress:)](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/appimportcontroller/importresources(from:importrequest:progress:))

# importResources(from:importRequest:progress:)

**Framework:** AppMigrationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells the migration extension to begin importing transportable resources into the app extension.

## Declaration

```swift
final func importResources(from extractedResourceURL: URL, importRequest: ResourcesImportRequest? = nil, progress: Progress? = nil) async throws
```

## Parameters

- `extractedResourceURL`: A file URL pointing to a directory that contains the resources to import.
- `importRequest`: An optional migration request instance to pass to the app extension’s import method. If this value is `nil`, the framework uses a default request. This value defaults to `nil`.
- `progress`: An optional [Progress](https://developer.apple.com/documentation/foundation/progress) object the extension uses to report its progress back to the unit test. This value defaults to `nil`.

<a id="discussion"></a>

## Discussion

Clean your app state before starting an import test, since the app extension runs on a clean app state. In particular, remove any files you previously wrote to the app container and ensure it’s empty. This simulates how the extension normally runs during a migration.
