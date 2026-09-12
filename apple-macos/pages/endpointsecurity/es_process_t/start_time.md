> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/start_time](https://developer.apple.com/documentation/endpointsecurity/es_process_t/start_time)

# start_time (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The time the process started.

## Declaration

```swift
var start_time: timeval
```

<a id="Discussion"></a>

## Discussion

This value represents the time that a fork call created the process.

This field is only available if the message [version](../es_message_t/version.md) is `3` or greater.

## See Also

### Inspecting the Source Process

- [audit_token](audit_token.md): A token for use with Basic Security Module auditing functions.
- [executable](executable.md): The file containing the executed process.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [is_platform_binary](is_platform_binary.md): A Boolean value that indicates whether the process is a platform binary.

# start_time (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The time the process started.

## Declaration

```objectivec
struct timeval start_time;
```

<a id="Discussion"></a>

## Discussion

This value represents the time that a fork call created the process.

This field is only available if the message [version](../es_message_t/version.md) is `3` or greater.

## See Also

### Inspecting the Source Process

- [audit_token](audit_token.md): A token for use with Basic Security Module auditing functions.
- [executable](executable.md): The file containing the executed process.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [is_platform_binary](is_platform_binary.md): A Boolean value that indicates whether the process is a platform binary.
