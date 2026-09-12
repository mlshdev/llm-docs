> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_mount_t](https://developer.apple.com/documentation/endpointsecurity/es_event_mount_t)

# es_event_mount_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the mounting of a file system.

## Declaration

```swift
struct es_event_mount_t
```

## Topics

### Inspecting Event Properties

- [statfs](es_event_mount_t/statfs.md): The statistics of the mounted file system.
- [reserved](es_event_mount_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(statfs:disposition:reserved:)](es_event_mount_t/init%28statfs_disposition_reserved_%29.md)

### Instance Properties

- [disposition](es_event_mount_t/disposition.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### File System Mounting Event Types

- [es_event_unmount_t](es_event_unmount_t.md): A type for an event that indicates the unmounting of a file system.
- [es_event_remount_t](es_event_remount_t.md): A type for an event that indicates the unmounting of a file system.

# es_event_mount_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the mounting of a file system.

## Declaration

```objectivec
typedef struct { ... } es_event_mount_t;
```

## Topics

### Inspecting Event Properties

- [statfs](es_event_mount_t/statfs.md): The statistics of the mounted file system.
- [reserved](es_event_mount_t/reserved.md): An unused field reserved for future use.

### Instance Properties

- [disposition](es_event_mount_t/disposition.md)

## See Also

### File System Mounting Event Types

- [es_event_unmount_t](es_event_unmount_t.md): A type for an event that indicates the unmounting of a file system.
- [es_event_remount_t](es_event_remount_t.md): A type for an event that indicates the unmounting of a file system.
