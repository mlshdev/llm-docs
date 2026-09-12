> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/publicclouddatabase](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/publicclouddatabase)

# publicCloudDatabase

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The database containing the data shared by all users.

## Declaration

```
readonly attribute CloudKit.Database publicCloudDatabase;
```

## See Also

### Getting the Public and Private Databases

- [privateCloudDatabase](privateclouddatabase.md): The database containing the user’s private data.
- [sharedCloudDatabase](sharedclouddatabase.md): The database containing shared records accepted by the current user.
- [getDatabaseWithDatabaseScope](getdatabasewithdatabasescope.md): Returns the specified (public, private, or shared) database.
