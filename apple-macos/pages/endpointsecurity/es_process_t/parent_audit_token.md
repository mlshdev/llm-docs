> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_process_t/parent_audit_token

# parent_audit_token (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The audit token of the parent process.

## Declaration

```swift
var parent_audit_token: audit_token_t
```

<a id="Discussion"></a>

## Discussion

This field is only available if the message [version](../es_message_t/version.md) is `4` or greater.

## See Also

### Inspecting Audit Tokens

- [responsible_audit_token](responsible_audit_token.md): The audit token of the process responsible for this process.

# parent_audit_token (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The audit token of the parent process.

## Declaration

```objectivec
audit_token_t parent_audit_token;
```

<a id="Discussion"></a>

## Discussion

This field is only available if the message [version](../es_message_t/version.md) is `4` or greater.

## See Also

### Inspecting Audit Tokens

- [responsible_audit_token](responsible_audit_token.md): The audit token of the process responsible for this process.
