> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/executable](https://developer.apple.com/documentation/endpointsecurity/es_process_t/executable)

# executable (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file containing the executed process.

## Declaration

```swift
var executable: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting the Source Process

- [audit_token](audit_token.md): A token for use with Basic Security Module auditing functions.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [is_platform_binary](is_platform_binary.md): A Boolean value that indicates whether the process is a platform binary.
- [start_time](start_time.md): The time the process started.

# executable (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file containing the executed process.

## Declaration

```objectivec
es_file_t * executable;
```

## See Also

### Inspecting the Source Process

- [audit_token](audit_token.md): A token for use with Basic Security Module auditing functions.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [is_platform_binary](is_platform_binary.md): A Boolean value that indicates whether the process is a platform binary.
- [start_time](start_time.md): The time the process started.
