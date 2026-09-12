> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_rename_t](https://developer.apple.com/documentation/endpointsecurity/es_event_rename_t)

# es_event_rename_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the renaming of a file.

## Declaration

```swift
struct es_event_rename_t
```

## Topics

### Inspecting Event Properties

- [source](es_event_rename_t/source.md): The source file to rename.
- [destination](es_event_rename_t/destination.md): The destination of the rename operation.
- [destination_type](es_event_rename_t/destination_type.md): A property that indicates whether the destination is a new path or an existing file.
- [es_destination_type_t](es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved](es_event_rename_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(source:destination_type:destination:reserved:)](es_event_rename_t/init%28source_destination_type_destination_reserved_%29.md)

## See Also

### File-System Event Types

- [es_file_t](es_file_t.md): A type that represents a file related to an Endpoint Security event.
- [es_event_access_t](es_event_access_t.md): A type for an event that indicates the checking of a file’s access permission.
- [es_event_clone_t](es_event_clone_t.md): A type for an event that indicates the cloning of a file.
- [es_event_copyfile_t](es_event_copyfile_t.md): A type for an event that indicates the copying of a file by use of a system call.
- [es_event_create_t](es_event_create_t.md): A type for an event that indicates the creation of a file.
- [es_event_dup_t](es_event_dup_t.md): A type for an event that indicates the duplication of a file descriptor.
- [es_event_fcntl_t](es_event_fcntl_t.md): A type for an event that indicates the manipulation of a file descriptor.
- [es_event_open_t](es_event_open_t.md): A type for an event that indicates the opening of a file.
- [es_event_close_t](es_event_close_t.md): A type for an event that indicates the closing of a file.
- [es_event_truncate_t](es_event_truncate_t.md): A type for an event that indicates the truncation of a file.
- [es_event_exchangedata_t](es_event_exchangedata_t.md): A type for an event that indicates the exchange of data between two files.
- [es_event_write_t](es_event_write_t.md): A type for an event that indicates the writing of data to a file.
- [es_event_lookup_t](es_event_lookup_t.md): A type for an event that indicates the lookup of a file’s path.
- [es_event_searchfs_t](es_event_searchfs_t.md): A type for an event that indicates searching a volume or mounted file system.

# es_event_rename_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the renaming of a file.

## Declaration

```objectivec
typedef struct { ... } es_event_rename_t;
```

## Topics

### Inspecting Event Properties

- [source](es_event_rename_t/source.md): The source file to rename.
- [destination](es_event_rename_t/destination.md): The destination of the rename operation.
- [destination_type](es_event_rename_t/destination_type.md): A property that indicates whether the destination is a new path or an existing file.
- [es_destination_type_t](es_destination_type_t.md): A type that indicates how a file event presents its destination to the client.
- [reserved](es_event_rename_t/reserved.md): An unused field reserved for future use.

## See Also

### File-System Event Types

- [es_file_t](es_file_t.md): A type that represents a file related to an Endpoint Security event.
- [es_event_access_t](es_event_access_t.md): A type for an event that indicates the checking of a file’s access permission.
- [es_event_clone_t](es_event_clone_t.md): A type for an event that indicates the cloning of a file.
- [es_event_copyfile_t](es_event_copyfile_t.md): A type for an event that indicates the copying of a file by use of a system call.
- [es_event_create_t](es_event_create_t.md): A type for an event that indicates the creation of a file.
- [es_event_dup_t](es_event_dup_t.md): A type for an event that indicates the duplication of a file descriptor.
- [es_event_fcntl_t](es_event_fcntl_t.md): A type for an event that indicates the manipulation of a file descriptor.
- [es_event_open_t](es_event_open_t.md): A type for an event that indicates the opening of a file.
- [es_event_close_t](es_event_close_t.md): A type for an event that indicates the closing of a file.
- [es_event_truncate_t](es_event_truncate_t.md): A type for an event that indicates the truncation of a file.
- [es_event_exchangedata_t](es_event_exchangedata_t.md): A type for an event that indicates the exchange of data between two files.
- [es_event_write_t](es_event_write_t.md): A type for an event that indicates the writing of data to a file.
- [es_event_lookup_t](es_event_lookup_t.md): A type for an event that indicates the lookup of a file’s path.
- [es_event_searchfs_t](es_event_searchfs_t.md): A type for an event that indicates searching a volume or mounted file system.
