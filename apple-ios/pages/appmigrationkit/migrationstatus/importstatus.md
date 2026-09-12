> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationstatus/importstatus](https://developer.apple.com/documentation/appmigrationkit/migrationstatus/importstatus)

# importStatus

**Framework:** AppMigrationKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A property to indicate the status of import from another device into the app.

## Declaration

```swift
static var importStatus: MigrationStatus? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` unless a migration completed.

You can use this value to show a notification about the completed migration to the person using the app.

## See Also

### Accessing the import status

- [clearImportStatus()](clearimportstatus%28%29.md): Sets the import status to a nil value to prevent further notification.
