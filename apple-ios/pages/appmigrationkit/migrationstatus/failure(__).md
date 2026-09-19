> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/migrationstatus/failure(_:)

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
