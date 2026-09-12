> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationstatus/failure(_:)](https://developer.apple.com/documentation/appmigrationkit/migrationstatus/failure(_:))

# MigrationStatus.failure(\_:)

**Framework:** AppMigrationKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The migration failed with an error.

## Declaration

```swift
case failure(any Error)
```

<a id="discussion"></a>

## Discussion

Inspect the associated value to retrieve the [Error](https://developer.apple.com/documentation/swift/error) that caused migration to fail.

## See Also

### Examining migration statuses

- [MigrationStatus.success](success.md): The migration completed successfully.
