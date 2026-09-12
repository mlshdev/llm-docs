> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/signing_id](https://developer.apple.com/documentation/endpointsecurity/es_process_t/signing_id)

# signing_id (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The identifier used to sign the process.

## Declaration

```swift
var signing_id: es_string_token_t
```

## See Also

### Inspecting Code Signing Properties

- [codesigning_flags](codesigning_flags.md): The flags used to sign the process.
- [cdhash](cdhash.md): The code directory hash value.
- [team_id](team_id.md): The team identifier used to sign the process.

# signing_id (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The identifier used to sign the process.

## Declaration

```objectivec
es_string_token_t signing_id;
```

## See Also

### Inspecting Code Signing Properties

- [codesigning_flags](codesigning_flags.md): The flags used to sign the process.
- [cdhash](cdhash.md): The code directory hash value.
- [team_id](team_id.md): The team identifier used to sign the process.
