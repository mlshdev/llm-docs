> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/responsible_audit_token](https://developer.apple.com/documentation/endpointsecurity/es_process_t/responsible_audit_token)

# responsible_audit_token (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The audit token of the process responsible for this process.

## Declaration

```swift
var responsible_audit_token: audit_token_t
```

<a id="Discussion"></a>

## Discussion

The responsible process may be this process itself, if there’s no responsible process or the responsible process already exited.

This field is only available if the message [version](../es_message_t/version.md) is `4` or greater.

## See Also

### Inspecting Audit Tokens

- [parent_audit_token](parent_audit_token.md): The audit token of the parent process.

# responsible_audit_token (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The audit token of the process responsible for this process.

## Declaration

```objectivec
audit_token_t responsible_audit_token;
```

<a id="Discussion"></a>

## Discussion

The responsible process may be this process itself, if there’s no responsible process or the responsible process already exited.

This field is only available if the message [version](../es_message_t/version.md) is `4` or greater.

## See Also

### Inspecting Audit Tokens

- [parent_audit_token](parent_audit_token.md): The audit token of the parent process.
