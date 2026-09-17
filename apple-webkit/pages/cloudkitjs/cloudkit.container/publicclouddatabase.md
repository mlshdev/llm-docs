> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/publicclouddatabase

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
