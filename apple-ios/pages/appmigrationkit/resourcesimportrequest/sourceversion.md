> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/resourcesimportrequest/sourceversion

# sourceVersion

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The data format version provided by the source application.

## Declaration

```swift
let sourceVersion: String
```

<a id="discussion"></a>

## Discussion

Use this value to distinguish between potentially incompatible versions of the app’s data.

## See Also

### Inspecting import request properties

- [sourceAppIdentifier](sourceappidentifier.md): The application that exported the content.
- [MigrationAppIdentifier](../migrationappidentifier.md): A type that identifies an app on a different platform.
