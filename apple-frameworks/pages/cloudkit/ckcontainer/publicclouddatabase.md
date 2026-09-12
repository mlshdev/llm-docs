> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/publicclouddatabase](https://developer.apple.com/documentation/cloudkit/ckcontainer/publicclouddatabase)

# publicCloudDatabase (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The app’s public database.

## Declaration

```swift
var publicCloudDatabase: CKDatabase { get }
```

<a id="discussion"></a>

## Discussion

This database is available regardless of whether the user’s device has an iCloud account. The contents of the public database are readable by all users of the app, and users have write access to the records, and other objects, they create. The public database’s contents are visible in the developer portal, where you can assign roles to users and restrict access as necessary.

Data in the public database counts toward your app’s iCloud storage quota.

## See Also

### Getting the Public and Private Databases

- [privateCloudDatabase](privateclouddatabase.md): The user’s private database.
- [sharedCloudDatabase](sharedclouddatabase.md): The database that contains shared data.
- [database(with:)](database%28with_%29.md): Returns the database with the specified scope.

# publicCloudDatabase (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The app’s public database.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) CKDatabase * publicCloudDatabase;
```

<a id="discussion"></a>

## Discussion

This database is available regardless of whether the user’s device has an iCloud account. The contents of the public database are readable by all users of the app, and users have write access to the records, and other objects, they create. The public database’s contents are visible in the developer portal, where you can assign roles to users and restrict access as necessary.

Data in the public database counts toward your app’s iCloud storage quota.

## See Also

### Getting the Public and Private Databases

- [privateCloudDatabase](privateclouddatabase.md): The user’s private database.
- [sharedCloudDatabase](sharedclouddatabase.md): The database that contains shared data.
- [databaseWithDatabaseScope:](database%28with_%29.md): Returns the database with the specified scope.
