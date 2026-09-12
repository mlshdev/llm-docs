> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/appimportcontroller/registerimportcompletion(with:)](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/appimportcontroller/registerimportcompletion(with:))

# registerImportCompletion(with:)

**Framework:** AppMigrationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Tells your app that import completed with a given status.

## Declaration

```swift
final func registerImportCompletion(with status: MigrationStatus) async throws
```

## Parameters

- `status`: A status value that indicates success or failure of the import.

<a id="discussion"></a>

## Discussion

Use this method in a unit test to evaluate how your app handles a post-migration launch. You can uses success or failure statuses to see the different messages presented to the person using the app.
