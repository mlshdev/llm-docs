> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_process_t/session_id

# session_id (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The identifier of the session that contains the process group.

## Declaration

```swift
var session_id: pid_t
```

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [original_ppid](original_ppid.md): The original parent process ID.
- [group_id](group_id.md): The process group identifier.
- [tty](tty.md): The TTY associated with the process sending the message.

# session_id (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The identifier of the session that contains the process group.

## Declaration

```objectivec
pid_t session_id;
```

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [original_ppid](original_ppid.md): The original parent process ID.
- [group_id](group_id.md): The process group identifier.
- [tty](tty.md): The TTY associated with the process sending the message.
