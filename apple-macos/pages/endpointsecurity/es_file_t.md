> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_file_t](https://developer.apple.com/documentation/endpointsecurity/es_file_t)

# es_file_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that represents a file related to an Endpoint Security event.

## Declaration

```swift
struct es_file_t
```

## Topics

### Inspecting File Properties

- [path](es_file_t/path.md): The file’s path.
- [path_truncated](es_file_t/path_truncated.md): A Boolean value that indicates whether Endpoint Security truncated the path string.
- [stat](es_file_t/stat.md): The file’s metadata, such as file size, user and group identifiers, and access and modification dates.

### Initializers

- [init()](es_file_t/init%28%29.md)
- [init(path:path_truncated:stat:)](es_file_t/init%28path_path_truncated_stat_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### File-System Event Types

- [es_event_access_t](es_event_access_t.md): A type for an event that indicates the checking of a file’s access permission.
- [es_event_clone_t](es_event_clone_t.md): A type for an event that indicates the cloning of a file.
- [es_event_copyfile_t](es_event_copyfile_t.md): A type for an event that indicates the copying of a file by use of a system call.
- [es_event_create_t](es_event_create_t.md): A type for an event that indicates the creation of a file.
- [es_event_dup_t](es_event_dup_t.md): A type for an event that indicates the duplication of a file descriptor.
- [es_event_fcntl_t](es_event_fcntl_t.md): A type for an event that indicates the manipulation of a file descriptor.
- [es_event_open_t](es_event_open_t.md): A type for an event that indicates the opening of a file.
- [es_event_close_t](es_event_close_t.md): A type for an event that indicates the closing of a file.
- [es_event_rename_t](es_event_rename_t.md): A type for an event that indicates the renaming of a file.
- [es_event_truncate_t](es_event_truncate_t.md): A type for an event that indicates the truncation of a file.
- [es_event_exchangedata_t](es_event_exchangedata_t.md): A type for an event that indicates the exchange of data between two files.
- [es_event_write_t](es_event_write_t.md): A type for an event that indicates the writing of data to a file.
- [es_event_lookup_t](es_event_lookup_t.md): A type for an event that indicates the lookup of a file’s path.
- [es_event_searchfs_t](es_event_searchfs_t.md): A type for an event that indicates searching a volume or mounted file system.

# es_file_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type that represents a file related to an Endpoint Security event.

## Declaration

```objectivec
typedef struct { ... } es_file_t;
```

## Topics

### Inspecting File Properties

- [path](es_file_t/path.md): The file’s path.
- [path_truncated](es_file_t/path_truncated.md): A Boolean value that indicates whether Endpoint Security truncated the path string.
- [stat](es_file_t/stat.md): The file’s metadata, such as file size, user and group identifiers, and access and modification dates.

## See Also

### File-System Event Types

- [es_event_access_t](es_event_access_t.md): A type for an event that indicates the checking of a file’s access permission.
- [es_event_clone_t](es_event_clone_t.md): A type for an event that indicates the cloning of a file.
- [es_event_copyfile_t](es_event_copyfile_t.md): A type for an event that indicates the copying of a file by use of a system call.
- [es_event_create_t](es_event_create_t.md): A type for an event that indicates the creation of a file.
- [es_event_dup_t](es_event_dup_t.md): A type for an event that indicates the duplication of a file descriptor.
- [es_event_fcntl_t](es_event_fcntl_t.md): A type for an event that indicates the manipulation of a file descriptor.
- [es_event_open_t](es_event_open_t.md): A type for an event that indicates the opening of a file.
- [es_event_close_t](es_event_close_t.md): A type for an event that indicates the closing of a file.
- [es_event_rename_t](es_event_rename_t.md): A type for an event that indicates the renaming of a file.
- [es_event_truncate_t](es_event_truncate_t.md): A type for an event that indicates the truncation of a file.
- [es_event_exchangedata_t](es_event_exchangedata_t.md): A type for an event that indicates the exchange of data between two files.
- [es_event_write_t](es_event_write_t.md): A type for an event that indicates the writing of data to a file.
- [es_event_lookup_t](es_event_lookup_t.md): A type for an event that indicates the lookup of a file’s path.
- [es_event_searchfs_t](es_event_searchfs_t.md): A type for an event that indicates searching a volume or mounted file system.
