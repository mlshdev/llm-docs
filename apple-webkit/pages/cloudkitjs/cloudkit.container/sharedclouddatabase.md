> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/sharedclouddatabase](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/sharedclouddatabase)

# sharedCloudDatabase

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The database containing shared records accepted by the current user.

## Declaration

```
readonly attribute CloudKit.Database sharedCloudDatabase;
```

<a id="Discussion"></a>

## Discussion

The shared database allows the current user (a participant) to access records shared by other users (owners). Shared records are stored in the owner’s container and count towards the owner’s iCloud account storage quota.

## See Also

### Getting the Public and Private Databases

- [publicCloudDatabase](publicclouddatabase.md): The database containing the data shared by all users.
- [privateCloudDatabase](privateclouddatabase.md): The database containing the user’s private data.
- [getDatabaseWithDatabaseScope](getdatabasewithdatabasescope.md): Returns the specified (public, private, or shared) database.
