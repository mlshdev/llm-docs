> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/migrationstatus/clearimportstatus()

# clearImportStatus()

**Framework:** AppMigrationKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Sets the import status to a nil value to prevent further notification.

## Declaration

```swift
static func clearImportStatus()
```

<a id="discussion"></a>

## Discussion

Calling this method sets [importStatus](importstatus.md) to `nil`, which indicates that the app has notified the person using the app of the migration’s completion, and doesn’t need further notifications.

## See Also

### Accessing the import status

- [importStatus](importstatus.md): A property to indicate the status of import from another device into the app.
