> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/resourcesimportrequest/sourceappidentifier

# sourceAppIdentifier

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The application that exported the content.

## Declaration

```swift
let sourceAppIdentifier: MigrationAppIdentifier
```

<a id="discussion"></a>

## Discussion

Use this identifier to validate that the imported data comes from a trusted source.

## See Also

### Inspecting import request properties

- [MigrationAppIdentifier](../migrationappidentifier.md): A type that identifies an app on a different platform.
- [sourceVersion](sourceversion.md): The data format version provided by the source application.
