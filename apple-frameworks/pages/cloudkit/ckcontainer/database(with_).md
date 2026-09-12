> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/database(with:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/database(with:))

# database(with:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the database with the specified scope.

## Declaration

```swift
func database(with databaseScope: CKDatabase.Scope) -> CKDatabase
```

## Parameters

- `databaseScope`: The database’s scope. See [CKDatabase.Scope](../ckdatabase/scope.md) for the available options.

## See Also

### Getting the Public and Private Databases

- [privateCloudDatabase](privateclouddatabase.md): The user’s private database.
- [publicCloudDatabase](publicclouddatabase.md): The app’s public database.
- [sharedCloudDatabase](sharedclouddatabase.md): The database that contains shared data.

# databaseWithDatabaseScope: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the database with the specified scope.

## Declaration

```objectivec
- (CKDatabase *) databaseWithDatabaseScope:(CKDatabaseScope) databaseScope;
```

## Parameters

- `databaseScope`: The database’s scope. See [CKDatabaseScope](../ckdatabase/scope.md) for the available options.

## See Also

### Getting the Public and Private Databases

- [privateCloudDatabase](privateclouddatabase.md): The user’s private database.
- [publicCloudDatabase](publicclouddatabase.md): The app’s public database.
- [sharedCloudDatabase](sharedclouddatabase.md): The database that contains shared data.
