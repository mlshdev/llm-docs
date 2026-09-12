> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/tty](https://developer.apple.com/documentation/endpointsecurity/es_process_t/tty)

# tty (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The TTY associated with the process sending the message.

## Declaration

```swift
var tty: UnsafeMutablePointer<es_file_t>?
```

<a id="Discussion"></a>

## Discussion

This field is available if the message version is greater than `2`.

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [original_ppid](original_ppid.md): The original parent process ID.
- [group_id](group_id.md): The process group identifier.
- [session_id](session_id.md): The identifier of the session that contains the process group.

# tty (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The TTY associated with the process sending the message.

## Declaration

```objectivec
es_file_t * tty;
```

<a id="Discussion"></a>

## Discussion

This field is available if the message version is greater than `2`.

## See Also

### Inspecting Process IDs

- [ppid](ppid.md): The parent process identifier.
- [original_ppid](original_ppid.md): The original parent process ID.
- [group_id](group_id.md): The process group identifier.
- [session_id](session_id.md): The identifier of the session that contains the process group.
