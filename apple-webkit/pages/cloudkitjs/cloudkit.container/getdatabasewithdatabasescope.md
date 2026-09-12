> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.container/getdatabasewithdatabasescope](https://developer.apple.com/documentation/cloudkitjs/cloudkit.container/getdatabasewithdatabasescope)

# getDatabaseWithDatabaseScope

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Returns the specified (public, private, or shared) database.

## Declaration

```
CloudKit.Database getDatabaseWithDatabaseScope(
	CloudKit.DatabaseScope databaseScope
);
```

## Parameters

- `databaseScope`: Specifies the type of database to return.

<a id="return-value"></a>

## Return Value

The specified database.

<a id="Discussion"></a>

## Discussion

This is a convenience method that you can use instead of the specific properties.

## See Also

### Getting the Public and Private Databases

- [publicCloudDatabase](publicclouddatabase.md): The database containing the data shared by all users.
- [privateCloudDatabase](privateclouddatabase.md): The database containing the user’s private data.
- [sharedCloudDatabase](sharedclouddatabase.md): The database containing shared records accepted by the current user.
