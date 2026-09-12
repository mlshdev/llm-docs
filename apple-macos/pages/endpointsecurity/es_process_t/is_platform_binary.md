> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/is_platform_binary](https://developer.apple.com/documentation/endpointsecurity/es_process_t/is_platform_binary)

# is_platform_binary (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A Boolean value that indicates whether the process is a platform binary.

## Declaration

```swift
var is_platform_binary: Bool
```

<a id="Discussion"></a>

## Discussion

For the purposes of this value, a “platform binary” is one signed with Apple certificates.

## See Also

### Inspecting the Source Process

- [audit_token](audit_token.md): A token for use with Basic Security Module auditing functions.
- [executable](executable.md): The file containing the executed process.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [start_time](start_time.md): The time the process started.

# is_platform_binary (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A Boolean value that indicates whether the process is a platform binary.

## Declaration

```objectivec
bool is_platform_binary;
```

<a id="Discussion"></a>

## Discussion

For the purposes of this value, a “platform binary” is one signed with Apple certificates.

## See Also

### Inspecting the Source Process

- [audit_token](audit_token.md): A token for use with Basic Security Module auditing functions.
- [executable](executable.md): The file containing the executed process.
- [is_es_client](is_es_client.md): A Boolean value that indicates whether the process connects to the Endpoint Security subsystem.
- [start_time](start_time.md): The time the process started.
