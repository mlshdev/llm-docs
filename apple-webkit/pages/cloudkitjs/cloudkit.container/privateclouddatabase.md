> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/privateclouddatabase](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/privateclouddatabase)

# privateCloudDatabase

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The database containing the user’s private data.

## Declaration

```
readonly attribute CloudKit.Database privateCloudDatabase;
```

## See Also

### Getting the Public and Private Databases

- [publicCloudDatabase](publicclouddatabase.md): The database containing the data shared by all users.
- [sharedCloudDatabase](sharedclouddatabase.md): The database containing shared records accepted by the current user.
- [getDatabaseWithDatabaseScope](getdatabasewithdatabasescope.md): Returns the specified (public, private, or shared) database.
