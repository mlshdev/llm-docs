> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/group_id](https://developer.apple.com/documentation/endpointsecurity/es_process_t/group_id)

# group_id (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process group identifier.

## Declaration

```swift
var group_id: pid_t
```

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [original_ppid](original_ppid.md): The original parent process ID.
- [session_id](session_id.md): The identifier of the session that contains the process group.
- [tty](tty.md): The TTY associated with the process sending the message.

# group_id (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process group identifier.

## Declaration

```objectivec
pid_t group_id;
```

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [original_ppid](original_ppid.md): The original parent process ID.
- [session_id](session_id.md): The identifier of the session that contains the process group.
- [tty](tty.md): The TTY associated with the process sending the message.
