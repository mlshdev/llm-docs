> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/ppid](https://developer.apple.com/documentation/endpointsecurity/es_process_t/ppid)

# ppid (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The parent process identifier.

## Declaration

```swift
var ppid: pid_t
```

## See Also

### Inspecting Process IDs

- [original_ppid](original_ppid.md): The original parent process ID.
- [group_id](group_id.md): The process group identifier.
- [session_id](session_id.md): The identifier of the session that contains the process group.
- [tty](tty.md): The TTY associated with the process sending the message.

# ppid (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The parent process identifier.

## Declaration

```objectivec
pid_t ppid;
```

## See Also

### Inspecting Process IDs

- [original_ppid](original_ppid.md): The original parent process ID.
- [group_id](group_id.md): The process group identifier.
- [session_id](session_id.md): The identifier of the session that contains the process group.
- [tty](tty.md): The TTY associated with the process sending the message.
