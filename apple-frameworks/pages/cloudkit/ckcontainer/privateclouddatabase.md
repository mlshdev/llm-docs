> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/privateclouddatabase](https://developer.apple.com/documentation/cloudkit/ckcontainer/privateclouddatabase)

# privateCloudDatabase (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The user’s private database.

## Declaration

```swift
var privateCloudDatabase: CKDatabase { get }
```

<a id="discussion"></a>

## Discussion

The user’s private database is only available if the device has an iCloud account. Only the user can access their private database, by default. They own all of the database’s content and can view and modify that content. Data in the private database isn’t visible in the developer portal.

Data in the private database counts toward the user’s iCloud storage quota.

If there isn’t an iCloud account on the user’s device, this property still returns a database, but any attempt to use it results in an error. To determine if there is an iCloud account on the device, use the [accountStatus(completionHandler:)](accountstatus%28completionhandler_%29.md) method.

## See Also

### Getting the Public and Private Databases

- [publicCloudDatabase](publicclouddatabase.md): The app’s public database.
- [sharedCloudDatabase](sharedclouddatabase.md): The database that contains shared data.
- [database(with:)](database%28with_%29.md): Returns the database with the specified scope.

# privateCloudDatabase (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The user’s private database.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKDatabase * privateCloudDatabase;
```

<a id="discussion"></a>

## Discussion

The user’s private database is only available if the device has an iCloud account. Only the user can access their private database, by default. They own all of the database’s content and can view and modify that content. Data in the private database isn’t visible in the developer portal.

Data in the private database counts toward the user’s iCloud storage quota.

If there isn’t an iCloud account on the user’s device, this property still returns a database, but any attempt to use it results in an error. To determine if there is an iCloud account on the device, use the [accountStatusWithCompletionHandler:](accountstatus%28completionhandler_%29.md) method.

## See Also

### Getting the Public and Private Databases

- [publicCloudDatabase](publicclouddatabase.md): The app’s public database.
- [sharedCloudDatabase](sharedclouddatabase.md): The database that contains shared data.
- [databaseWithDatabaseScope:](database%28with_%29.md): Returns the database with the specified scope.
