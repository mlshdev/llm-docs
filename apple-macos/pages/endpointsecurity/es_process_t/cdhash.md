> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/cdhash](https://developer.apple.com/documentation/endpointsecurity/es_process_t/cdhash)

# cdhash (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The code directory hash value.

## Declaration

```swift
var cdhash: es_cdhash_t
```

<a id="Discussion"></a>

## Discussion

The code directory hash identifies a specific version of a program. This allows the system to verify that the contents of a binary have not changed since being code-signed.

## See Also

### Inspecting Code Signing Properties

- [codesigning_flags](codesigning_flags.md): The flags used to sign the process.
- [signing_id](signing_id.md): The identifier used to sign the process.
- [team_id](team_id.md): The team identifier used to sign the process.

# cdhash (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The code directory hash value.

## Declaration

```objectivec
es_cdhash_t cdhash;
```

<a id="Discussion"></a>

## Discussion

The code directory hash identifies a specific version of a program. This allows the system to verify that the contents of a binary have not changed since being code-signed.

## See Also

### Inspecting Code Signing Properties

- [codesigning_flags](codesigning_flags.md): The flags used to sign the process.
- [signing_id](signing_id.md): The identifier used to sign the process.
- [team_id](team_id.md): The team identifier used to sign the process.
