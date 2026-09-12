> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/original_ppid](https://developer.apple.com/documentation/endpointsecurity/es_process_t/original_ppid)

# original_ppid (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The original parent process ID.

## Declaration

```swift
var original_ppid: pid_t
```

<a id="Discussion"></a>

## Discussion

This field stays constant, even if the process’ parent changes.

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [group_id](group_id.md): The process group identifier.
- [session_id](session_id.md): The identifier of the session that contains the process group.
- [tty](tty.md): The TTY associated with the process sending the message.

# original_ppid (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The original parent process ID.

## Declaration

```objectivec
pid_t original_ppid;
```

<a id="Discussion"></a>

## Discussion

This field stays constant, even if the process’ parent changes.

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [group_id](group_id.md): The process group identifier.
- [session_id](session_id.md): The identifier of the session that contains the process group.
- [tty](tty.md): The TTY associated with the process sending the message.
