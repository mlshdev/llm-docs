> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/audit_token](https://developer.apple.com/documentation/endpointsecurity/es_process_t/audit_token)

# audit_token (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A token for use with Basic Security Module auditing functions.

## Declaration

```swift
var audit_token: audit_token_t
```

<a id="Discussion"></a>

## Discussion

Use this token with the functions defined in `libbsm.h` to extract values such as the process identifier (`PID`), user identifier (`UID`), and group identifier (`GID`).

## See Also

### Inspecting the Source Process

- [executable](executable.md): The file containing the executed process.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [is_platform_binary](is_platform_binary.md): A Boolean value that indicates whether the process is a platform binary.
- [start_time](start_time.md): The time the process started.

# audit_token (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A token for use with Basic Security Module auditing functions.

## Declaration

```objectivec
audit_token_t audit_token;
```

<a id="Discussion"></a>

## Discussion

Use this token with the functions defined in `libbsm.h` to extract values such as the process identifier (`PID`), user identifier (`UID`), and group identifier (`GID`).

## See Also

### Inspecting the Source Process

- [executable](executable.md): The file containing the executed process.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [is_platform_binary](is_platform_binary.md): A Boolean value that indicates whether the process is a platform binary.
- [start_time](start_time.md): The time the process started.
