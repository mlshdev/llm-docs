> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesimportrequest/init(sourceappidentifier:sourceversion:)](https://developer.apple.com/documentation/appmigrationkit/resourcesimportrequest/init(sourceappidentifier:sourceversion:))

# init(sourceAppIdentifier:sourceVersion:)

**Framework:** AppMigrationKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a resources import request instance for use in a unit test.

## Declaration

```swift
init(sourceAppIdentifier: MigrationAppIdentifier, sourceVersion: String)
```

## Parameters

- `sourceAppIdentifier`: The application that exported the content.
- `sourceVersion`: The data format version provided by the source application.

<a id="discussion"></a>

## Discussion

You only use this initializer when creating unit tests that call [importResources(from:importRequest:progress:)](../appmigrationtester/appimportcontroller/importresources%28from_importrequest_progress_%29.md). Don’t use it in your app migration extension.
