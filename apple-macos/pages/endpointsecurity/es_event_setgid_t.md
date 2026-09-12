> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setgid_t](https://developer.apple.com/documentation/endpointsecurity/es_event_setgid_t)

# es_event_setgid_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the setting of a process’s group ID.

## Declaration

```swift
struct es_event_setgid_t
```

## Topics

### Inspecting Event Properties

- [gid](es_event_setgid_t/gid.md): The group ID.
- [reserved](es_event_setgid_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_setgid_t/init%28%29.md)
- [init(gid:reserved:)](es_event_setgid_t/init%28gid_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### User and Group ID Types

- [es_event_setuid_t](es_event_setuid_t.md): A type for an event that indicates the setting of a process’s user ID.
- [es_event_seteuid_t](es_event_seteuid_t.md): A type for an event that indicates the setting of a process’s effective user ID.
- [es_event_setegid_t](es_event_setegid_t.md): A type for an event that indicates the setting of a process’s effective group ID.
- [es_event_setreuid_t](es_event_setreuid_t.md): A type for an event that indicates the setting of a process’s real and effective user IDs.
- [es_event_setregid_t](es_event_setregid_t.md): A type for an event that indicates the setting of a process’s real and effective group IDs.

# es_event_setgid_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the setting of a process’s group ID.

## Declaration

```objectivec
typedef struct { ... } es_event_setgid_t;
```

## Topics

### Inspecting Event Properties

- [gid](es_event_setgid_t/gid.md): The group ID.
- [reserved](es_event_setgid_t/reserved.md): An unused field reserved for future use.

## See Also

### User and Group ID Types

- [es_event_setuid_t](es_event_setuid_t.md): A type for an event that indicates the setting of a process’s user ID.
- [es_event_seteuid_t](es_event_seteuid_t.md): A type for an event that indicates the setting of a process’s effective user ID.
- [es_event_setegid_t](es_event_setegid_t.md): A type for an event that indicates the setting of a process’s effective group ID.
- [es_event_setreuid_t](es_event_setreuid_t.md): A type for an event that indicates the setting of a process’s real and effective user IDs.
- [es_event_setregid_t](es_event_setregid_t.md): A type for an event that indicates the setting of a process’s real and effective group IDs.
